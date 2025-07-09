import * as usersModel from "../models/usersModel.js";
import bcrypt from "bcryptjs";

export async function createUser(req, res) {
  try {
    const { username, password, isAuthor } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    await usersModel.createUser(username, hashedPassword, isAuthor);
    res.status(200).json({ message: `User ${username} created.` });
  } catch (err) {
    res.status(400).json(err?.message);
  }
}
