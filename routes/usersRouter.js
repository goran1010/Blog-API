import { Router } from "express";
const usersRouter = Router();

usersRouter.use((req, res) => {
  res.status(404).json("No page found");
});

export default usersRouter;
