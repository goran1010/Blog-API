import { Router } from "express";
const indexRouter = Router();
import usersRouter from "./usersRouter.js";
import postsRouter from "./postsRouter.js";
import commentsRouter from "./commentsRouter.js";

indexRouter.use("/users", usersRouter);

indexRouter.use("/posts", postsRouter);

indexRouter.use("/comments", commentsRouter);

indexRouter.get("/", (req, res) => {
  res.status(200).json("OK");
});

indexRouter.use((req, res) => {
  res.status(404).json("No page found");
});

export default indexRouter;
