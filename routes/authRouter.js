import { Router } from "express";
const authRouter = Router();
import * as authController from "../controllers/authController.js";

authRouter.post("/log-in", authController.logIn);

export default authRouter;
