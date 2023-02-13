import { TPostsDB, TPostsDBi } from "../types"

export class User {    
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: string
    ) {}

    // public toBusinessModel():  TPostsDB {
    //     return {
    //         id: this.id,
            // id: this.id,
            // content: this.
            // likes: this.likes,
            // deslike: this.deslike,
            // created_at: this.
    //     }
    // }
    public getId(): string {
        return this.id
    }
    
    public setId(value: string): void {
        this.id = value
    }

    public getName(): string {
        return this.name
    }

    public setName(value: string): void {
        this.name = value
    }

    public getEmail(): string {
        return this.email
    }

    public setEmail(value: string): void {
        this.email = value
    }

    public getPassword(): string {
        return this.password
    }

    public setPassword(value: string): void {
        this.password = value
    }

    public getRole(): string {
        return this.role
    }

    public setRole(value: string): void {
        this.role = value
    }
}