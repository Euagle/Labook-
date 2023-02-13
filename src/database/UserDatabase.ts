import { TPostsDB, TUserDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "users"

    public async findUsers(){
      const usersDB : TUserDB[] = await BaseDatabase
          .connection(UserDatabase.TABLE_USERS);

      return usersDB;
  }
    public async findLogin( email: string, password: string){
      await UserDatabase.connection(UserDatabase.TABLE_USERS).insert({
                              
        email: email,
        password: password
      
      }).into("users")
    }

  }