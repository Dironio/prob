import { Router } from "express";
import vacancyController from "../controllers/vacancy.controller";

const vacancyRouter : Router = Router()

vacancyRouter.post('/vacancies', vacancyController.create)
vacancyRouter.get('/', vacancyController.getAll)
// vacancyRouter.


export default vacancyRouter