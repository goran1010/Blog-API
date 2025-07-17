import { Router } from "express";
const postsRouter = Router();
import commentsRouter from "./commentsRouter.js";
import * as postsController from "../controllers/postsController.js";
import isAuthorized from "../auth/isAuthorized.js";
import * as validation from "../auth/validation.js";

postsRouter.get("/", postsController.getAllPosts);

postsRouter.post(
  "/",
  isAuthorized,
  validation.createPost,
  postsController.createPost,
);

postsRouter.get("/:postId", postsController.getPost);

postsRouter.delete("/:postId", isAuthorized, postsController.deletePost);

postsRouter.put(
  "/:postId",
  isAuthorized,
  validation.editPost,
  postsController.modifyPost,
);

postsRouter.use("/:postId/comments", commentsRouter);

export default postsRouter;
