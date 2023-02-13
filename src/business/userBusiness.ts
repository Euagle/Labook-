import { UserDatabase } from "../database/UserDatabase";
import { BadRequesteError } from "../error/BadRequest";
import { PostsDatabase } from "../database/PostsDataBase";
export class UserBusiness {
    public async postUsers(input: any){
const{
    name,
    email,
    password
} = input

if(typeof name !== "string"){
    throw new BadRequesteError("'nome' inválido, deve ser uma string");
    
}
if(typeof email !== "string"){
    throw new BadRequesteError("'email' inválido, deve ser uma string");
    
}
if(typeof password !== "string"){
  throw new BadRequesteError("'password' inválido, deve ser uma string");
  
}

if( email.length < 1 || name.length <1){
    throw new BadRequesteError("'name' ou 'email' devem ter no minímo 1 caractere");
    
}
const userdataBase = new UserDatabase()
const usersDB = await userdataBase.findUsers( )
return usersDB

}

// --------------------------------------------------------------------------------------------------------

public async postLogin(out: any){
    const{ email, password} = out
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if(typeof email !== "string" ){
                throw new BadRequesteError("'email' inválido, deve ser uma string");
                
            }
            if(typeof password !== "string"){
                throw new BadRequesteError("'password' inválido, deve ser uma string");
                
            }
            if( !emailRegex  ){
                throw new BadRequesteError("'email' inválido");
                
            }

            const userdataBase = new UserDatabase()
            const output = await userdataBase.findLogin(email, password)
            return output





}

///--------------------------------------------------------------------


// public getPosts = async (q: string | undefined) => {

//     const {
//         postsDB,
//         creatorDB

//     } = await this.getPosts(q)
    

//     const posts = creatorDB.map((post: any) => {
//         const product = new posts(
//             post.id,
//             post.content,
//             post.likes,
//             post.dislikes,
//             post.likes,
//             post.createdA,
//             post.updatedAT,
//             getPost(postsDB.creator_id && postsDB.name )
//         )

//         return product.toBusinessModel()
//     })

   
//     function getPost(postId: string) {
//         const post = creatorDB.find((postDB: any) => {
//             return postDB.id === postId
//         })

//         return {
//             id: postsDB.id,
//             name: postsDB.name
//         }

//         return post

//     }
    


// }
}
