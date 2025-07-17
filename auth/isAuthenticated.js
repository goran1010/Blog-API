import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const MY_SECRET_KEY = process.env.MY_SECRET_KEY;

export default function isAuthenticated(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res
      .sendStatus(401)
      .json({ errors: [{ msg: "Expired session token" }] });
  }

  jwt.verify(token, MY_SECRET_KEY, (err, token) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.userId = token.id;
    next();
  });
}
