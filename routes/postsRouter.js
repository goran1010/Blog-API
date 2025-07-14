import { Router } from "express";
const postsRouter = Router();
import commentsRouter from "./commentsRouter.js";
import * as postsController from "../controllers/postsController.js";
import isAuthorized from "../auth/isAuthorized.js";

postsRouter.get("/", postsController.getAllPosts);

postsRouter.post("/", isAuthorized, postsController.createPost);

postsRouter.get("/:postId", postsController.getPost);

postsRouter.delete("/:postId", isAuthorized, postsController.deletePost);

postsRouter.put("/:postId", isAuthorized, postsController.modifyPost);

postsRouter.use("/:postId/comments", commentsRouter);

export default postsRouter;
