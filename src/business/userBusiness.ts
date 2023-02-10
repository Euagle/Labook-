import { UserDatabase } from "../database/UserDatabase";

export class UserBusiness {
    public async postUsers(input: any){
const{
    name,
    email,
    password
} = input

if(typeof name !== "string"){
    throw new Error("'nome' inválido, deve ser uma string");
    
}
if(typeof email !== "string"){
    throw new Error("'email' inválido, deve ser uma string");
    
}
if(typeof password !== "string"){
  throw new Error("'password' inválido, deve ser uma string");
  
}

if( email.length < 1 || name.length <1){
    throw new Error("'name' ou 'email' devem ter no minímo 1 caractere");
    
}
const userdataBase = new UserDatabase()
const usersDB = await userdataBase.findUsers( name, email, password)
return usersDB

}}