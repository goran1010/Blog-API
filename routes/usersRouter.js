import { Router } from "express";
const usersRouter = Router();
import * as userController from "../controllers/userController.js";

usersRouter.post("/:userID", userController.createUser);

usersRouter.get("/:userID", userController.getUser);

usersRouter.delete("/:userID", userController.deleteUser);

export default usersRouter;
