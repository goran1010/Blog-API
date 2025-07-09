import prisma from "../db/prisma.js";

export async function getAllComments(id) {
  return await prisma.post.findUnique({
    where: { id },
    select: { comments: true },
  });
}

export async function createComment(text, postId, userId) {
  return await prisma.comment.create({
    data: { text, postId, userId },
  });
}

export async function getComment(id) {
  return await prisma.comment.findUnique({ where: { id } });
}

export async function deleteComment(id) {
  return await prisma.comment.delete({ where: { id } });
}
