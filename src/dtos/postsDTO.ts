// import { ProductModel } from "../types";

import { TPostsDB } from "../types"

// export interface GetProductsInput {
//     q: unknown
// }

// export type GetProductsOutput = ProductModel[]

// export interface CreateProductInput {
//     // id: unknown,
//     name: unknown,
//     price: unknown
// }

// export interface CreateProductOutput {
//     message: string,
//     product: ProductModel
// }


export interface GetPostsInput{
    q: unknown
}

export type GetPostsOutput = TPostsDB[]


export interface CreatePosttInput {
    content: unknown
}

// export interface CreateProductOutput {
//     message: string,
//     product: ProductModel
// }
