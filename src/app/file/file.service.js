import prisma from "../../lib/prisma.js";

async function getRootFiles(userId) {
  return await prisma.file.findMany({
    where: { userId, folderId: null }
  });
}

async function createFile({ name, size, url, userId, folderId }) {
  return await prisma.file.create({
    data: {
      name,
      size,
      url,
      userId,
      folderId: folderId || null
    }
  });
}

export { getRootFiles, createFile };
