import { Router } from "express";
import usersController from "../controllers/user.controller";

const userRouter : Router = Router()

userRouter.post('/users', usersController.create)
userRouter.get('/users', usersController.getAll)



export default userRouter