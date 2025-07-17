import { body, validationResult } from "express-validator";
import * as userModel from "../models/usersModel.js";

const createUser = [
  body("username")
    .trim()
    .isLength({ min: 5, max: 30 })
    .withMessage(`Username has to be between 5 and 30 characters long.`)
    .custom(async (value) => {
      const usernameCheck = await userModel.getUser(value);
      if (usernameCheck) {
        throw new Error("Username already exists");
      }
      return true;
    }),
  body("password")
    .trim()
    .notEmpty()
    .isLength({ min: 5, max: 30 })
    .withMessage("Password must be between 5 and 30 characters long."),
  body("confirmPassword")
    .trim()
    .notEmpty()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords need to match");
      }
      return true;
    }),
];

const logIn = [
  body("username").trim().notEmpty().withMessage("Username can't be empty."),
  body("password").trim().notEmpty().withMessage("Password can't be empty."),
];

const createPost = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Couldn't create Post - Title can't be empty."),
  body("text")
    .trim()
    .notEmpty()
    .withMessage("Couldn't create Post - Text can't be empty."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()[0] });
    }
    next();
  },
];

const editPost = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Couldn't edit Post - Title can't be empty."),
  body("text")
    .trim()
    .notEmpty()
    .withMessage("Couldn't edit Post - Text can't be empty."),
  body("isPublished")
    .isBoolean()
    .withMessage("Incorrect format for isPublished."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array()[0] });
    }
    next();
  },
];

export { createUser, logIn, createPost, editPost };
