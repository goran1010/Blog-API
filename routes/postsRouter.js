import { Router } from "express";
const postsRouter = Router();
import commentsRouter from "./commentsRouter.js";
import * as postsController from "../controllers/postsController.js";

postsRouter.get("/", postsController.getAllPosts);

postsRouter.post("/:postID", postsController.createPost);

postsRouter.get("/:postID", postsController.getPost);

postsRouter.delete("/:postID", postsController.deletePost);

postsRouter.put("/:postID", postsController.modifyPost);

postsRouter.use("/:postID/comments", commentsRouter);

export default postsRouter;
