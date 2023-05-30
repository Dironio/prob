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

    async getOne (req: Request, res: Response) {
        try {
            const user = await userService.getOne(Number(req.params.id))
            return res.status(200).json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update (req: Request, res: Response) {
        try {
            const updatedUser = await userService.update(req.body)
            return res.status(200).json(updatedUser)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete (req: Request, res: Response) {
        try {
            const deletedUser = await userService.delete(Number(req.params.id))
            return res.status(200).json(deletedUser)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

const usersController = new UsersController();

export default usersController