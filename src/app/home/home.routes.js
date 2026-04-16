import { Router } from "express";
import * as folderController from "./home.controllers.js";
import { ensureGuest, ensureAuthenticated } from "../auth/auth.middleware.js";

const router = new Router();

router.get("/", ensureGuest, folderController.getHomePage);
router.get("/dashboard", ensureAuthenticated, folderController.getDashboard);

export default router;
