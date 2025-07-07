import { Router } from "express";
const postsRouter = Router();

postsRouter.use((req, res) => {
  res.status(404).json("No page found");
});

export default postsRouter;
