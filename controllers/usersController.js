import * as usersModel from "../models/usersModel.js";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";

export async function createUser(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { username, password, isAuthor } = req.body;
    if (isAuthor === "false") isAuthor = false;
    if (isAuthor === "true") isAuthor = true;
    const hashedPassword = await bcrypt.hash(password, 10);

    await usersModel.createUser(username, hashedPassword, isAuthor);
    res.status(201).json({ message: `User ${username} created.` });
  } catch (err) {
    res.status(400).json(err?.message);
  }
}
