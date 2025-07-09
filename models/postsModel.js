import prisma from "../db/prisma.js";

export async function getAllPosts() {
  return await prisma.post.findMany();
}

export async function createPost(title, text, isPublished, userId) {
  return await prisma.post.create({
    data: { title, text, isPublished, userId },
  });
}

export async function getPost(id) {
  return await prisma.post.findUnique({ where: { id } });
}

export async function deletePost(id) {
  return await prisma.post.delete({ where: { id } });
}

export async function modifyPost(id, title, text, isPublished) {
  return await prisma.post.update({
    where: { id },
    data: { title, text, isPublished },
  });
}
