import express, { Request, Response } from 'express'
import cors from 'cors'
import {
    users, posts, likesDislikes 
} from './dabatase'
import {  TUser, TPostsDB, TLikes_dislikesDB  } from './types'
import { db } from './database/BaseDatabase'


const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

app.get("/ping", async (req: Request, res: Response) => {
    try {
        res.status(200).send({ message: "Pong!" })
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

app.post("users/signup", async (req: Request, res: Response) =>{
    try{
        const {name, email, password}= req.body
        if(typeof name !== "string"){
            res.status(400)
            throw new Error("'nome' inválido, deve ser uma string");
            
        }
        if(typeof email !== "string"){
            res.status(400)
            throw new Error("'email' inválido, deve ser uma string");
            
        }
        if(typeof password !== "string"){
          res.status(400)
          throw new Error("'password' inválido, deve ser uma string");
          
      }
        if( email.length < 1 || password.length <2){
            res.status(400)
            throw new Error("'name' ou 'email' devem ter no minímo 1 caractere");
            
        }
        await db.insert({
          name: name,
          email: email,
          password: password
        }).into("users")
           
        //Alteração 01 - trocando raw por query build
        // await db.raw(`
        // INSERT INTO users(id, email, password)
        // VALUES("${id}", "${email}", ${password});`)
        // res.status(200).send(`usuário cadastrada com sucesso`)
    }catch (error) {
        console.log(error)
  
        if (req.statusCode === 200) {
            res.status(500)
        }
  
        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }}
  });