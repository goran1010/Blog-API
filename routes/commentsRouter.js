import { Router } from "express";
const commentsRouter = Router();

commentsRouter.use((req, res) => {
  res.status(404).json("No page found");
});

export default commentsRouter;
