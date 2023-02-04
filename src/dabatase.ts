import { TUserDB, TPostsDB,  TLikes_dislikesDB } from "./types";

export const users: TUserDB[] = [
	{
        id: 'a06',
        name: "Joao Paulo",
        email: "joaopaulo123@gmail.com",
        password: "joaoa123",
        role: "usuario",
        created_at: "2023-02-03 15:46:04"
	},
	{
		id: 'a07',
        name: "Camila",
        email: "camila123@gmail.com",
        password: "camila123",
        role: "usuario",
        created_at: "2023-02-03 15:46:04"

	},
	{
		id: 'a08',
        name: "Pedro Henrique",
        email: "pedrohenri123@gmail.com",
        password: "pedrohenrique123",
        role: "usuario",
        created_at: "2023-02-03 15:46:04"

	}
]


export const posts: TPostsDB[] = [
    {
        id: "p06",
        creator_id: "a08",
        content: "Ex presidente Bolsonaro",
        likes: 1,
        dislikes: 1200,
        created_at: "2023-02-03 15:46:04",
        updated_at: "2023-02-03 15:46:04"
    },
    {
        id: "p07",
        creator_id: "a07",
        content: "Presidente Lula",
        likes: 1200,
        dislikes: 100,
        created_at: "2023-02-03 15:46:04",
        updated_at: "2023-02-03 15:46:04"
    },
    {
        id: "p08",
        creator_id: "a06",
        content: " Lago Paranoá",
        likes: 1200,
        dislikes: 2,
        created_at: "2023-02-03 15:46:04",
        updated_at: "2023-02-03 15:46:04"
    }

]

export const likesDislikes: TLikes_dislikesDB[] = [
    {
        user_id: "a06",
    post_id: "p06",
    like: 2

    },
    {
        user_id: "a07",
    post_id: "p07",
    like: 100

    },
    {
        user_id: "a08",
    post_id: "p08",
    like: 1200

    }
]
