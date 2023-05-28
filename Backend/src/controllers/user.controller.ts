import { Request, Response } from "express";
import userService from "../services/user.service";

class UsersController {
    async create (req: Request, res: Response) {
        try {
            const user = await userService.create(req.body)
            return res.status(201).json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll (req: Request, res: Response) {
        try {
            const users = await userService.getAll()
            return res.status(200).json(users)
        }catch (e) {
            res.status(500).json(e)
        }
    }
}

const usersController = new UsersController();

export default usersController