import { Router } from "express";
import authController from "../controllers/auth.controller";

const authRouter: Router = Router()

authRouter.get('/current', authController.getCurrentUser)
authRouter.post('/signup', authController.singup)
authRouter.post('/login', authController.login)
authRouter.get('/logout', authController.logout)

export default authRouter