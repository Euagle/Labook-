import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "users"
    public async findUsers( name: string, email: string, password: string){
        await BaseDatabase.connection(UserDatabase. TABLE_USERS).insert({
          name: name,
          email: email,
          password: password
        }).into("users")
    }



}
