import prisma from "../db/prisma.js";

export async function createUser(username, password, isAuthor) {
  const result = await prisma.user.create({
    data: { username, password, isAuthor },
  });
  return result;
}

export async function getUser(username) {
  return await prisma.user.findUnique({ where: { username } });
}

export async function getUserById(id) {
  return await prisma.user.findUnique({ where: { id } });
}
