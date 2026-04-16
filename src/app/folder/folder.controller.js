import * as folderService from "./folder.service.js";

async function getDashboard(req, res) {
  const folders = await folderService.getRootFolders(req.user.id);
  res.render("pages/dashboard", { user: req.user, folders });
}

async function getFolder(req, res) {
  const folder = await folderService.getFolderById(req.params.id, req.user.id);
  if (!folder) return res.status(404).send("Folder not found");
  res.render("pages/folder", { user: req.user, folder });
}

async function postCreateFolder(req, res) {
  await folderService.createFolder(req.body.name, req.user.id, req.body.parentId || null);
  res.redirect("back");
}

async function deleteFolder(req, res) {
  await folderService.deleteFolder(req.params.id, req.user.id);
  res.redirect("/dashboard");
}

export {getDashboard, getFolder, postCreateFolder, deleteFolder}