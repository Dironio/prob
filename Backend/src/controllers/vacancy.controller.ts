import { Request, Response } from "express";
import vacancyService from "../services/vacancy.service";

class VacancyController {
    async create (req: Request, res: Response) {
        try {
            const vacancy = await vacancyService.create(req.body)
            return res.status(201).json(vacancy)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll (req: Request, res: Response) {
        try {
            const vacancies = await vacancyService.getAll()
            return res.status(200).json(vacancies)
        }catch (e) {
            res.status(500).json(e)
        }
    }
}

const vacancyController = new VacancyController();

export default vacancyController