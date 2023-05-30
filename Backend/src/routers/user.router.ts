import { Router } from "express";
import usersController from "../controllers/user.controller";

const userRouter : Router = Router()

userRouter.post('/', usersController.create)
userRouter.get('/', usersController.getAll)
userRouter.get('/:id', usersController.getOne)
userRouter.put('/', usersController.update)
userRouter.delete('/:id', usersController.delete)



export default userRouter