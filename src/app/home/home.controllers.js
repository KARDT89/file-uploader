import { getRootFiles } from "../file/file.service.js";
import { getRootFolders } from "../folder/folder.service.js";

async function getHomePage(req, res) {
  res.render("pages/homepage", { user: req.user });
}
async function getDashboard(req, res) {
  const folders = await getRootFolders(req.user.id)
  const files = await getRootFiles(req.user.id)
  res.render("pages/dashboard", { user: req.user, folders, files });
}

export { getHomePage, getDashboard };
