


import { PostDatabase } from "../database/postDataBase";
import { UserDatabase } from "../database/UserDatabase";
import { CreatePostInputDTO, DeletePostInputDTO, EditPostInputDTO, GetPostInputDTO, GetPostOutputDTO, PostDTO } from "../dtos/postsDTO";
import { BadRequestError } from "../errors/BadRequestError";
import { ForbiddenError } from "../errors/ForbiddenError";
import { NotFoundError } from "../errors/NotFoundError";
import { Post } from "../models/post";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";
import { POST_LIKE, TLikesdislikesDB, UserDB, USER_ROLES } from "../types";
// import { LikesDislikesDatabase } from "../database/LikesDislikesDatabase";




export class PostBusiness {
    constructor(
        private postDatabase : PostDatabase,
        private userDatabase : UserDatabase,
        // private likesDislikesDatabase : LikesDislikesDatabase,
        private postDTO : PostDTO,
        private idGenerator : IdGenerator,
        private tokenManager: TokenManager
    ){}

    public async getPosts(input: GetPostInputDTO) : Promise<GetPostOutputDTO[]>{
        const { token } = input;

        const payload = this.tokenManager.getPayload(token);
        if (payload === null){
            throw new BadRequestError("Token inválido");
        }

        const postsDB = await this.postDatabase.findPosts();
        const usersDB = await this.userDatabase.findUsers();

        const output = postsDB.map(postDB => {
            const post = new Post (
                postDB.id,
                postDB.content,
                postDB.likes,
                postDB.dislikes,
                postDB.created_at,
                postDB.updated_at,
                getCreator(postDB.creator_id)
            );

            return this.postDTO.getPostOutput(post);
        })             

        function getCreator(userId : string){
            const user = usersDB.find(userDB => userDB.id === userId) as UserDB;

            return {
                id: user.id,
                name: user.name
            }
        }

        return output;
    }

    
    public async createPost(input : CreatePostInputDTO) : Promise<void>{
        const { content , token } = input;

        const payload = this.tokenManager.getPayload(token);
        if (payload === null){
            throw new BadRequestError("Token inválido");
        }

        const id = this.idGenerator.generate();
        const createdAt = (new Date()).toISOString();
        const likes = 0;
        const dislikes = 0;

        const newPost = new Post (
            id,
            content,
            likes,
            dislikes,
            createdAt,
            createdAt,
            {
                id: payload.id, 
                name: payload.name
            }
        )

        const newPostDB = newPost.toDBModelBusiness();
        await this.postDatabase.createPost(newPostDB);
    }

    public async editPost(input : EditPostInputDTO) : Promise<void>{
        
        const { content , id , token } = input;


        const postDB = await this.postDatabase.findPostId(id);
        if (!postDB){
            throw new NotFoundError("Não foi encontrado um post com esse id");
        }
        const payload = this.tokenManager.getPayload(token);
        if (payload === null){
            throw new BadRequestError("Token inválido");
        }

        if (payload.id !== postDB.creator_id){
            throw new ForbiddenError("Somente quem criou o post pode editá-lo");
        }

        const updatedAt = (new Date()).toISOString();

        const updatedPost = new Post(
            id,
            content,
            postDB.likes,
            postDB.dislikes,
            postDB.created_at,
            updatedAt,
            {
                id: postDB.creator_id,
                name: ""
            }
        )

        const updatedPosts = updatedPost.toDBModelBusiness();
        await this.postDatabase.edittePost(updatedPosts, id);
    }
    public deletPost = async (
        input: DeletePostInputDTO
    ): Promise<void> => {
        const { id, token } = input

        if (token === undefined) {
            throw new BadRequestError("token ausent")
        }

        const payload = this.tokenManager.getPayload(token)

        if (payload === null) {
            throw new BadRequestError("token inválido")
        }

        const postsDB = await this.postDatabase.findPostId(id)

        if (postsDB === null) {
            throw new NotFoundError("'id' não encontrado")
        }

        const creatorId = payload.id

        // const isUserAdm = payload.role === USER_ROLES.ADMIN  &&
        if(  postsDB.creator_id !==creatorId ){
            throw new BadRequestError("somente quem criou o post pode deletá-lo")

        }

        if (
            payload.role !== USER_ROLES.ADMIN
        ) {
            throw new BadRequestError("somente admin pode delete o post")
        }

        await this.postDatabase.deletePost(id)
    }

    
    // public likeDislikePost = async (
    //     input: EditPostLikesInputDTO
    // ): Promise<void> => {
    //     const { id, token, like } = input

    //     if (token === undefined) {
    //         throw new BadRequestError("token ausente")
    //     }

    //     const payload = this.tokenManager.getPayload(token)

    //     if (payload === null) {
    //         throw new BadRequestError("token inválido")
    //     }

    //     if (typeof like !== "boolean") {
    //         throw new BadRequestError("'like' deve ser boolean")
    //     }

    //     const creadorPost = await this.postDatabase
    //         .findPostId(id)

    //     if (!creadorPost) {
    //         throw new NotFoundError("'id' não encontrado")
    //     }

    //     const userId = payload.id
    //     const likeSQLite = like ? 1 : 0

    //     const likeDislikeDB: TLikesdislikesDB = {
    //         user_id: userId,
    //         post_id: creadorPost.id,
    //         like: likeSQLite
    //     }

    //     const likes = new Post(
    //         creadorPost.id,
    //         creadorPost.content,
    //         creadorPost.likes,
    //         creadorPost.dislikes,
    //         creadorPost.created_at,
    //         creadorPost.updated_at,
    //         creadorPost.creator_id
           
    //     )

    //     const likeDislikeExists = await this.LikesDislikesDatabase.findLikeDislike(likeDislikeDB)

    //     if (likeDislikeExists === POST_LIKE.ALREADY_LIKED) {
    //         if (like) {
    //             await this.LikesDislikesDatabase.removeLikeDislike(likeDislikeDB)
    //             playlist.removeLike()
    //         } else {
    //             await this.LikesDislikesDatabase.updateLikeDislike(likeDislikeDB)
    //             playlist.removeLike()
    //             playlist.addDislike()
    //         }

    //     } else if (likeDislikeExists === POST_LIKE.ALREADY_DISLIKED) {
    //         if (like) {
    //             await this.postDatabase.edittePost(likeDislikeDB)
    //             playlist.removeDislike()
    //             playlist.addLike()
    //         } else {
    //             await this.playlistDatabase.removeLikeDislike(likeDislikeDB)
    //             playlist.removeDislike()
    //         }

    //     } else {
    //         await this.playlistDatabase.likeOrDislikePlaylist(likeDislikeDB)
    
    //         like ? playlist.addLike() : playlist.addDislike()
    //     }

    //     const updatedPlaylistDB = playlist.toDBModel()
    
    //     await this.playlistDatabase.update(idToLikeOrDislike, updatedPlaylistDB)
    // }

}
