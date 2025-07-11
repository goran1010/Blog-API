import bcrypt from "bcryptjs";
import * as usersModel from "../models/usersModel.js";
import jwt from "jsonwebtoken";

export async function logIn(req, res) {
  try {
    const { username, password } = req.body;
    const user = await usersModel.getUser(username);
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      const token = jwt.sign({ id: user.id }, "mySecretKey", {
        expiresIn: "30d",
      });
      res.status(200).json(token);
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    res.status(400).json(err?.message);
  }
}
