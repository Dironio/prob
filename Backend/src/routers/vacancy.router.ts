import { Router } from "express";
import vacancyController from "../controllers/vacancy.controller";

const vacancyRouter : Router = Router()

vacancyRouter.post('/responses', vacancyController.response)
vacancyRouter.get('/responses', vacancyController.getResponse)

vacancyRouter.post('/', vacancyController.create)
vacancyRouter.get('/', vacancyController.getAll)
vacancyRouter.get('/:id', vacancyController.getOne)
vacancyRouter.put('/', vacancyController.update)
vacancyRouter.delete('/:id', vacancyController.delete)


export default vacancyRouter