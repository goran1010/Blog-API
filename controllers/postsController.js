import * as postsModel from "../models/postsModel.js";

export async function getAllPosts(req, res) {
  const posts = await postsModel.getAllPosts();
  res.status(200).json(posts);
}

export async function createPost(req, res) {
  const { userId } = req;
  let { title, text, isPublished } = req.body;
  if (isPublished === "true") {
    isPublished = true;
  } else if (isPublished === "false") {
    isPublished = false;
  }
  await postsModel.createPost(title, text, isPublished, userId);
  res.status(201).json("Post created");
}

export async function getPost(req, res) {
  const { postId } = req.params;
  const post = await postsModel.getPost(postId);
  res.status(200).json(post);
}

export async function deletePost(req, res) {
  const { postId } = req.params;
  await postsModel.deletePost(postId);
  res.status(200).json("Post deleted");
}

export async function modifyPost(req, res) {
  const { postId } = req.params;
  let { title, text, isPublished } = req.body;

  await postsModel.modifyPost(postId, title, text, isPublished);
  res.status(200).json("Post modified");
}
