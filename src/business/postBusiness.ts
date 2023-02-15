

// --------------------------------------------------------

// parte correta
// import Post
// import { UserDatabase } from "../database/UserDatabase";
// import { BadRequesteError } from "../error/BadRequest";
// import { Post } from "../models/postModels";
// import { TPostsDB, TUserDB } from "../types";

// export class PostBusiness {
//     public async getPosts(){
//         const postDatabase = new PostsDatabase();
//         const postsDB = await postDatabase.getAllPost();

//         const userDatabase = new UserDatabase();
//         const usersDB = await userDatabase.findUsers(q);

//         const output = postsDB.map(post => new Post (
//             post.id,
//             post.content,
//             post.likes,
//             post.dislikes,
//             post.created_at,
//             post.updated_at,
//             getCreator(post.creator_id)
//         ));

//         function getCreator(userId : string){
//             const user = usersDB.find(userDB => userDB.id === userId) as TUserDB;

//             return {
//                 id: user.id,
//                 name: user.name
//             }
//         }

//         return output;
//     }

//     public async createPost(input : any){
//         const { content } = input;
//         const postDatabase = new PostsDatabase();

//         if (typeof content !== "string"){
//             throw new BadRequesteError("'content' deve ser uma string");
//         }

//         const id = ((new Date()).getTime()).toString();
//         const createdAt = (new Date()).toISOString();

//         const newPost = new Post (
//             id,
//             content,
//             0,
//             0,
//             createdAt,
//             createdAt,
//             {
//                 id: "a00",
//                 name: "Pedro Henri"
//             }
//         )

//         const newPostDB : TPostsDB = {
//             id: newPost.getId(),
//             creator_id: newPost.getCreator().id,
//             content: newPost.getContent(),
//             likes: newPost.getLikes(),
//             dislikes: newPost.getDislikes(),
//             created_at: newPost.getCreatedAt(),
//             updated_at: newPost.getUpdatedAt()
//         }

//         await postDatabase.createPost(newPostDB);
//     }}





// import { ProductDatabase } from "../database/ProductDatabase"
// import { CreateProductInput, CreateProductOutput, GetProductsInput, GetProductsOutput } from "../dtos/productDTO"
// import { BadRequestError } from "../errors/BadRequestError"
// import { Product } from "../models/Product"
// import { IdGenerator } from "../services/IdGenerator"

// export class ProductBusiness {
//     constructor(
//         private productDatabase: ProductDatabase,
//         private idGenerator: IdGenerator
//     ) {}

//     public getProducts = async (
//         input: GetProductsInput
//     ): Promise<GetProductsOutput> => {
//         const { q } = input

//         if (typeof q !== "string" && q !== undefined) {
//             throw new BadRequestError("'q' deve ser string ou undefined")
//         }

//         const productsDB = await this.productDatabase.findProducts(q)

//         const products = productsDB.map((productDB) => {
//             const product = new Product(
//                 productDB.id,
//                 productDB.name,
//                 productDB.price,
//                 productDB.created_at
//             )

//             return product.toBusinessModel()
//         })

//         const output: GetProductsOutput = products

//         return output
//     }

//     public createProduct = async (
//         input: CreateProductInput
//     ): Promise<CreateProductOutput> => {
//         // const { id, name, price } = input
//         const { name, price } = input

//         // if (typeof id !== "string") {
//         //     throw new BadRequestError("'id' deve ser string")
//         // }

//         if (typeof name !== "string") {
//             throw new BadRequestError("'name' deve ser string")
//         }

//         if (typeof price !== "number") {
//             throw new BadRequestError("'price' deve ser number")
//         }

//         if (name.length < 2) {
//             throw new BadRequestError("'name' deve possuir pelo menos 2 caracteres")
//         }

//         if (price <= 0) {
//             throw new BadRequestError("'price' não pode ser zero ou negativo")
//         }

//         const id = this.idGenerator.generate()

//         // const productDBExists = await this.productDatabase.findProductById(id)

//         // if (productDBExists) {
//         //     throw new BadRequestError("'id' já existe")
//         // }

//         const newProduct = new Product(
//             id,
//             name,
//             price,
//             new Date().toISOString()
//         )

//         const newProductDB = newProduct.toDBModel()
//         await this.productDatabase.insertProduct(newProductDB)

//         const output: CreateProductOutput = {
//             message: "Producto cadastrado com sucesso",
//             product: newProduct.toBusinessModel()
//         }

//         return output
//     }
// }


