import express, { Request, Response } from 'express'
import cors from 'cors'
import {
    users, posts, likesDislikes 
} from './dabatase'
import {  TUser, TPostsDB, TLikes_dislikesDB  } from './types'
import { UserController } from './controller/usersController'
import { userRouter } from './router/userRouter'


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

// app.get("users")


// const userController = new UserController()
app.use("/users/signup", userRouter)
    //     const {id, name, email, password, role}= req.body
    //     if(typeof id !== "string"){
    //         res.status(400)
    //         throw new Error("'id' inválido, deve ser uma string");
            
    //     }
    //     if(typeof name !== "string"){
    //         res.status(400)
    //         throw new Error("'nome' inválido, deve ser uma string");
            
    //     }
    //     if(typeof email !== "string"){
    //         res.status(400)
    //         throw new Error("'email' inválido, deve ser uma string");
            
    //     }
    //     if(typeof password !== "string"){
    //       res.status(400)
    //       throw new Error("'password' inválido, deve ser uma string");
          
    //   }
    //   if(typeof role !== "string"){
    //     res.status(400)
    //     throw new Error("'role' inválido, deve ser uma string");
        
    // }
    //     if( email.length < 1 || name.length <1){
    //         res.status(400)
    //         throw new Error("'name' ou 'email' devem ter no minímo 1 caractere");
            
    //     }
    //     await db.insert({
    //         id:id,
    //       name: name,
    //       email: email,
    //       password: password,
    //       role: role
    //     }).into("users")
           
      
    // }catch (error) {
    //     console.log(error)
  
    //     if (req.statusCode === 200) {
    //         res.status(500)
    //     }
  
    //     if (error instanceof Error) {
    //         res.send(error.message)
    //     } else {
    //         res.send("Erro inesperado")
    //     }}
