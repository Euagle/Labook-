import express from 'express'
import { UserController } from "../controller/usersController"

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post('/', userController.postUsers)
