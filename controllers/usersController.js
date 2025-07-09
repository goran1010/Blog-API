import * as usersModel from "../models/usersModel.js";
import bcrypt from "bcryptjs";

export async function createUser(req, res) {
  try {
    const { username, password, isAuthor } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    await usersModel.createUser(username, hashedPassword, isAuthor);
    res.status(200).json({ message: `User ${username} created.` });
  } catch (err) {
    res.status(400).json(err.message);
  }
}

export async function logInUser(req, res) {
  try {
    const { username, password } = req.body;
    const user = await usersModel.getUser(username);
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      res.status(200).json("logged in");
    } else {
      res.status(300).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    res.status(400).json(err?.message);
  }
}
