import { Router } from "express";
const commentsRouter = Router({ mergeParams: true });
import * as commentsController from "../controllers/commentsController.js";

commentsRouter.get("/", commentsController.getAllPostComments);

commentsRouter.post("/", commentsController.createComment);

commentsRouter.get("/:commentId", commentsController.getComment);

commentsRouter.delete("/:commentId", commentsController.deleteComment);

export default commentsRouter;
