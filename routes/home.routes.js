import { Router } from "express";
import { getHomePage, getDashboard } from "../controllers/home.controllers.js";
import { ensureGuest, ensureAuthenticated } from "../middleware/auth.middleware.js";

const router = new Router();

router.get("/", ensureGuest, getHomePage);
router.get("/dashboard", ensureAuthenticated, getDashboard);

export default router;
