import { Request, Response } from "express";
import vacancyService from "../services/vacancy.service";

class VacancyController {
    async create (req: Request, res: Response) {
        try {
            const vacancy = await vacancyService.create(req.body)
            return res.status(201).json(vacancy)
        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }

    async getAll (req: Request, res: Response) {
        try {
            const vacancies = await vacancyService.getAll(req.query)
            return res.status(200).json(vacancies)
        }catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }

    async getOne (req: Request, res: Response) {
        try {
            const vacancy = await vacancyService.getOne(Number(req.params.id))
            return res.status(200).json(vacancy)
        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }

    async update (req: Request, res: Response) {
        try {
            const updatedVacancy = await vacancyService.update(req.body)
            return res.status(200).json(updatedVacancy)
        } catch (e) {
            console.log(e)
            res.status(500).json(e.message)
        }
    }

    async delete (req: Request, res: Response) {
        try {
            const deletedVacancy = await vacancyService.delete(Number(req.params.id))
            return res.status(200).json(deletedVacancy)
        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }

    async response (req: Request, res: Response) {
        try {
            const response = await vacancyService.response(req.body)
            return res.status(200).json(response)
        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }

    async getResponse (req: Request, res: Response) {
        try {
            const responses = await vacancyService.getResponse(Number(req.query.userId), Number(req.query.vacancyId))
            return res.status(200).json(responses) 
        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }

    async stats (req: Request, res: Response) {
        try {
            const responses = await vacancyService.stats(Number(req.query.vacancyId))
            return res.status(200).json(responses)
        } catch (e) {
            console.log(e)
            res.status(500).json(e)
        }
    }
}

const vacancyController = new VacancyController();

export default vacancyController