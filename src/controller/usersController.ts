
import { Request, Response } from "express"
import { UserBusiness } from "../business/userBusiness";
import { BaseDatabase } from "../database/BaseDatabase";
import { UserDatabase } from "../database/UserDatabase";


export class UserController {
    public postUsers = async (req: Request, res: Response) => {

        try{
            const { name, email, password}= req.body
            const input={
                name,
                email,
                password
            }
            const userBusiness = new UserBusiness()

            const output = await userBusiness.postUsers(input)

            res.status(201).send(` CREATED ${output} ` )

        }catch (error) {
            console.log(error)
      
            if (req.statusCode === 200) {
                res.status(500)
            }
      
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }}}




    
    public PostLogin = async (req: Request, res: Response)=>{
        try {
            const {email, password}= req.body
            const out =  {email, password}        
        
            const userBusiness = new UserBusiness()

            const input = await userBusiness.postLogin(out)


                   
                    res.status(200).send(` Ok ${input} ` )
                               

        } catch (error) {
            console.log(error)
                 if (req.statusCode === 200) {
            res.status(500)
        }
  
        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }}
        

    }

    // public getPosts = async (req: Request, res: Response) => {
    //     try {
    //         const q = req.query.q as string | undefined


    //         const output = await this.postsBusiness.getProducts(q)

    //         res.status(200).send(output)

    //     } catch (error) {
    //         console.log(error)
    
    //         if (error instanceof Error) {
    //             res.status(500).send(error.message)
    //         } else {
    //             res.status(500).send("Erro inesperado")
    //         }
    //     }
    // }
}