import { Router } from "express";
import { getHomePage, getDashboard } from "../controllers/home.controllers.js";

const router = new Router()

router.get("/", getHomePage)
router.get("/dashboard", getDashboard)

export default router;