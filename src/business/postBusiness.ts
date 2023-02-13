import { PostsDatabase } from "../database/PostsDataBase";
import { UserDatabase } from "../database/UserDatabase";
import { BadRequesteError } from "../error/BadRequest";
import { Post } from "../models/postModels";
import { TPostsDB, TUserDB } from "../types";

export class PostBusiness {
    public async getPosts(){
        const postDatabase = new PostsDatabase();
        const postsDB = await postDatabase.getAllPost();

        const userDatabase = new UserDatabase();
        const usersDB = await userDatabase.findUsers();

        const output = postsDB.map(postDB => new Post (
            postDB.id,
            postDB.content,
            postDB.likes,
            postDB.dislikes,
            postDB.created_at,
            postDB.updated_at,
            getCreator(postDB.creator_id)
        ));

        function getCreator(userId : string){
            const user = usersDB.find(userDB => userDB.id === userId) as TUserDB;

            return {
                id: user.id,
                name: user.name
            }
        }

        return output;
    }

    public async createPost(input : any){
        const { content } = input;
        const postDatabase = new PostsDatabase();

        if (typeof content !== "string"){
            throw new BadRequesteError("'content' deve ser uma string");
        }

        const id = ((new Date()).getTime()).toString();
        const createdAt = (new Date()).toISOString();

        const newPost = new Post (
            id,
            content,
            0,
            0,
            createdAt,
            createdAt,
            {
                id: "a00",
                name: "Pedro Henri"
            }
        )

        const newPostDB : TPostsDB = {
            id: newPost.getId(),
            creator_id: newPost.getCreator().id,
            content: newPost.getContent(),
            likes: newPost.getLikes(),
            dislikes: newPost.getDislikes(),
            created_at: newPost.getCreatedAt(),
            updated_at: newPost.getUpdatedAt()
        }

        await postDatabase.createPost(newPostDB);
    }}
