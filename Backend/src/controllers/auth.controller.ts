import { Request, Response } from "express";
import authService from "../services/auth.service";

class AuthController {
    async singup (req: Request, res: Response) {
        try {
            const singup = await authService.singup(req.body)
            return res.status(201).json(singup)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async login (req: Request, res: Response) {
        try {
            const login = await authService.login() 
            return res.status(200).json(login)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    

}

const authController = new AuthController();

export default authController