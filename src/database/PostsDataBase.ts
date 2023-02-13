import { TPostsDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class PostsDatabase extends BaseDatabase {
    public static TABLE_POSTS = "posts"



    public getAllPost = async () => {
      const productsDB = await BaseDatabase
          .connection(PostsDatabase.TABLE_POSTS)
          .select()

      return productsDB
  }

  public getPostsByName = async (q: string) => {
      const productsDB = await BaseDatabase
          .connection(PostsDatabase.TABLE_POSTS)
          .select()
          .where("name", "LIKE", `%${q}%`)

      return productsDB
  }
  public async createPost(newPostDB : TPostsDB){
    await BaseDatabase
        .connection(PostsDatabase.TABLE_POSTS)
        .insert(newPostDB);
}

  public getPostAndCreator = async (q: string | undefined) => {
      
      let postsDB: TPostsDB[]

      if (q) {
        postsDB = await this.getPostsByName(q)
      } else {
        postsDB = await this.getAllPost()
      }
      
      const creatorDB = await BaseDatabase
          .connection(PostsDatabase.TABLE_POSTS)
          .select()
      
      return {
        postsDB,
          creatorDB 
      }
  }

}


