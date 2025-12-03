import { Router } from "express";
import { getHomePage } from "../controllers/home.controllers.js";

const router = new Router()

router.get("/", getHomePage)

export default router;