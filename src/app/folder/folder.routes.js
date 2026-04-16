import { Router } from "express";
import { ensureAuthenticated } from "../auth/auth.middleware.js";
import * as folderController from './folder.controller.js'

const router = Router()

router.post("/folders/create", ensureAuthenticated, folderController.postCreateFolder);
router.get("/folders/:id", ensureAuthenticated, folderController.getFolder);
router.post("/folders/delete/:id", ensureAuthenticated, folderController.deleteFolder);

export default router