import { Router } from "express";
const commentsRouter = Router();
import * as commentsController from "../controllers/commentsController.js";

commentsRouter.get("/", commentsController.getAllComments);

commentsRouter.post("/:CommentID", commentsController.createComment);

commentsRouter.get("/:CommentID", commentsController.getComment);

commentsRouter.delete("/:CommentID", commentsController.deleteComment);

commentsRouter.put("/:CommentID", commentsController.modifyComment);

export default commentsRouter;
