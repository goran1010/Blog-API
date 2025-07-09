import jwt from "jsonwebtoken";

export default function isAuthenticated(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, "mySecretKey", (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.userId = user;
    next();
  });
}
