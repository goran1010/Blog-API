import { Router } from "express";
const commentsRouter = Router({ mergeParams: true });
import * as commentsController from "../controllers/commentsController.js";
import isAuthenticated from "../auth/isAuthenticated.js";
import isAuthorized from "../auth/isAuthorized.js";

commentsRouter.get("/", commentsController.getAllPostComments);

commentsRouter.post("/", isAuthenticated, commentsController.createComment);

commentsRouter.get("/:commentId", commentsController.getComment);

commentsRouter.delete(
  "/:commentId",
  isAuthorized,
  commentsController.deleteComment,
);

export default commentsRouter;
