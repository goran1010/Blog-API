import { Router } from "express";
const apiRouter = Router();
import usersRouter from "./usersRouter.js";
import postsRouter from "./postsRouter.js";

apiRouter.use("/users", usersRouter);

apiRouter.use("/posts", postsRouter);

apiRouter.get("/", (req, res) => {
  res.status(200).json("OK");
});

export default apiRouter;
