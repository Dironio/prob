import { Router } from "express";
import experienceController from "../controllers/experience.controller";

const experienceRouter : Router = Router()

experienceRouter.get('/', experienceController.getAll)

export default experienceRouter