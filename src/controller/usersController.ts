
import { Request, Response } from "express"
import { UserBusiness } from "../business/userBusiness";


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
            }}




    }

}