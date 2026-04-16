import prisma from "../../lib/prisma.js";

async function getRootFolders(userId) {
  return await prisma.folder.findMany({
    where: { userId, parentId: null }
  });
}

async function getFolderById(folderId, userId) {
  return await prisma.folder.findFirst({
    where: { id: folderId, userId: userId },
    include: { children: true, files: true }
  });
}

async function createFolder(name, userId, parentId = null) {
  return prisma.folder.create({
    data: { name, userId, parentId }
  });
}

async function deleteFolder(folderId, userId) {
  return prisma.folder.delete({
    where: { id: folderId, userId }
  });
}

export {getRootFolders, getFolderById, createFolder, deleteFolder}