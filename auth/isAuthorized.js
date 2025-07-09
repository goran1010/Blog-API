import isAuthenticated from "./isAuthenticated.js";

const isAuthorized = [
  isAuthenticated,
  (req, res, next) => {
    console.log(req.userId);
    next();
  },
];

export default isAuthorized;
