import { Router } from "express";
import busynessController from "../controllers/busyness.controller";

const busynessRouter : Router = Router()

busynessRouter.get('/', busynessController.getAll)

export default busynessRouter