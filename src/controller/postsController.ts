import { Request , Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { BaseErro } from "../error/BaseErro";

export class PostController {
    public getPosts = async (req: Request, res: Response) => {
        try {
            const postBusiness = new PostBusiness();
            const output = await postBusiness.getPosts();

            res.status(200).send(output);
        } catch (error) {
            console.log(error)

            if (error instanceof BaseErro) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public createPost = async (req: Request, res: Response) => {
        try {
            const content = req.body.content;

            const input = {
                content
            };

            const postBusiness = new PostBusiness();
            await postBusiness.createPost(input);

            res.status(201).send("Post criado com sucesso");
        } catch (error) {
            console.log(error)

            if (error instanceof BaseErro) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }
}