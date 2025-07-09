import { Router } from "express";
const usersRouter = Router();
import * as usersController from "../controllers/usersController.js";

usersRouter.post("/", usersController.createUser);

export default usersRouter;
