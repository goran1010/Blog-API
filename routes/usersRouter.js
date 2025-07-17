import { Router } from "express";
const usersRouter = Router();
import * as usersController from "../controllers/usersController.js";
import * as validation from "../auth/validation.js";

usersRouter.post("/", validation.createUser, usersController.createUser);

export default usersRouter;
