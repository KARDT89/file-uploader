import { Router } from "express";
import { getHomePage, getDashboard } from "./home.controllers.js";
import { ensureGuest, ensureAuthenticated } from "../auth/auth.middleware.js";

const router = new Router();

router.get("/", ensureGuest, getHomePage);
router.get("/dashboard", ensureAuthenticated, getDashboard);

export default router;
