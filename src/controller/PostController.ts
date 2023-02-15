

// import { Request , Response } from "express";
// import { PostBusiness } from "../business/PostBusiness";
// import { BaseError } from "../errors/BaseError";

// export class PostController {
//     public getPosts = async (req: Request, res: Response) => {
//         try {
//             const postBusiness = new PostBusiness();
//             const output = await postBusiness.getPosts();

//             res.status(200).send(output);
//         } catch (error) {
//             console.log(error)

//             if (error instanceof BaseError) {
//                 res.status(error.statusCode).send(error.message)
//             } else {
//                 res.status(500).send("Erro inesperado")
//             }
//         }
//     }

//     public createPost = async (req: Request, res: Response) => {
//         try {
//             const content = req.body

//             const input = {
//                 content
//             }

//             const postBusiness = new PostBusiness();
//             await postBusiness.createPost(input);

//             res.status(201).send("Post criado com sucesso");
//         } catch (error) {
//             console.log(error)

//             if (error instanceof BaseError) {
//                 res.status(error.statusCode).send(error.message)
//             } else {
//                 res.status(500).send("Erro inesperado")
//             }
//         }
//     }
// }

// ------------------------------------------------------

// import { Request, Response } from "express"
// import { ProductBusiness } from "../business/ProductBusiness"
// import { CreateProductInput, GetProductsInput } from "../dtos/ProductDTO"
// import { BaseError } from "../errors/BaseError"

// export class ProductController {
//     constructor(
//         private productBusiness: ProductBusiness
//     ) {}

//     public getProducts = async (req: Request, res: Response) => {
//         try {
//             const input: GetProductsInput = {
//                 q: req.query.q
//             }

//             const output = await this.productBusiness.getProducts(input)

//             res.status(200).send(output)
//         } catch (error) {
//             console.log(error)

//             if (error instanceof BaseError) {
//                 res.status(error.statusCode).send(error.message)
//             } else {
//                 res.status(500).send("Erro inesperado")
//             }
//         }
//     }

//     public createProduct = async (req: Request, res: Response) => {
//         try {

//             const input: CreateProductInput = {
//                 // id: req.body.id,
//                 name: req.body.name,
//                 price: req.body.price
//             }

//             const output = await this.productBusiness.createProduct(input)

//             res.status(201).send(output)
//         } catch (error) {
//             console.log(error)

//             if (error instanceof BaseError) {
//                 res.status(error.statusCode).send(error.message)
//             } else {
//                 res.status(500).send("Erro inesperado")
//             }
//         }
//     }
// }

