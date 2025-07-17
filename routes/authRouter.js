import { Router } from "express";
const authRouter = Router();
import * as authController from "../controllers/authController.js";
import * as validation from "../auth/validation.js";

authRouter.post("/log-in", validation.logIn, authController.logIn);

export default authRouter;
