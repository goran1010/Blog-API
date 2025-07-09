import { Router } from "express";
const postsRouter = Router();
import commentsRouter from "./commentsRouter.js";
import * as postsController from "../controllers/postsController.js";

postsRouter.get("/", postsController.getAllPosts);

postsRouter.post("/", postsController.createPost);

postsRouter.get("/:postId", postsController.getPost);

postsRouter.delete("/:postId", postsController.deletePost);

postsRouter.put("/:postId", postsController.modifyPost);

postsRouter.use("/:postId/comments", commentsRouter);

export default postsRouter;
