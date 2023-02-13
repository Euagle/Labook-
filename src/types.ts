export interface TUserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    role: string,
    created_at: string
}


//type para post
export interface TUser {
    name: string,
    email: string,
    password: string,
   
}


export interface TPostsDB {
    id: string,
    creator_id: string,
    content: string,
    likes: number,
    dislikes: number,
    created_at: string,
    updated_at: string

}

export interface TPostsDBi {
    id: string,
    content: string,
    likes: number,
    dislikes: number,
    created_at: string,
    updated_at: string

}

export interface TLikes_dislikesDB{
    user_id: string,
    post_id: string,
    like: number
}