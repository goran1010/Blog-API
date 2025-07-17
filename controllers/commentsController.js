import * as commentsModel from "../models/commentsModel.js";

export async function getAllPostComments(req, res) {
  const { postId } = req.params;
  const comments = await commentsModel.getAllComments(postId);
  res.status(200).json(comments);
}

export async function createComment(req, res) {
  const { postId } = req.params;
  const { userId } = req;
  const { text } = req.body;
  await commentsModel.createComment(text, postId, userId);
  res.status(201).json("Comment created");
}

export async function getComment(req, res) {
  const { commentId } = req.params;
  const comment = await commentsModel.getComment(commentId);
  res.status(200).json(comment);
}

export async function deleteComment(req, res) {
  const { commentId } = req.params;
  await commentsModel.deleteComment(commentId);
  res.status(200).json("Comment deleted");
}
