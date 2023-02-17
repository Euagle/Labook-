import { TPostsDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";
// import { PostDB } from "../types";

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "posts";


    public async findPosts(){
        const result : TPostsDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS);
        return result;
    }

    public async findPostId(id : string){
        const [ result ] : TPostsDB[] | undefined[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .where({ id });
        return result;
    }

    public async createPost(newPostDB : TPostsDB){
        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .insert(newPostDB);
    }

    public async edittePost(updatedPostDB : TPostsDB, id : string){
        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .update(updatedPostDB)
            .where({ id })
    }

    public async deletePost(id : string){
        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .del()
            .where({ id });
    }
}



// import { TPostsDB } from "../types"
// import { BaseDatabase } from "./BaseDatabase"

// export class PostDatabase extends BaseDatabase {
//     public static TABLE_POSTS = "posts"

//     public async findPOSTS(q: string | undefined) {
//         let postsDB

//         if (q) {
//             const result: TPostsDB[] = await BaseDatabase
//                 .connection(PostDatabase.TABLE_POSTS)
//                 .where("name", "LIKE", `%${q}%`)

//             postsDB = result
//         } else {
//             const result: TPostsDB[] = await BaseDatabase
//                 .connection(PostDatabase.TABLE_POSTS)

//             postsDB = result
//         }

//         return postsDB
//     }}