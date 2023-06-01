import { Request, Response } from "express";
import busynessService from "../services/busyness.service";


class BusynessController {
    async getAll (req: Request, res: Response) {
        try {
            const busyness = await busynessService.getAll()
            return res.status(200).json(busyness)
        }catch (e) {
            res.status(500).json(e)
        }
    }
}

const busynessController = new BusynessController();

export default busynessController