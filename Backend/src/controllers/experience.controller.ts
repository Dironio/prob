import { Request, Response } from "express";
import experienceService from "../services/experience.service";

class ExperienceController {
    async getAll (req: Request, res: Response) {
        try {
            const experience = await experienceService.getAll()
            return res.status(200).json(experience)
        }catch (e) {
            res.status(500).json(e)
        }
    }
}

const experienceController = new ExperienceController();

export default experienceController