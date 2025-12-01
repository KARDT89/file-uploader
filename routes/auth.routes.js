import { Router } from "express";
import { getLogin, getSignup } from "../controllers/auth.controllers.js";

const router = new Router();

router.get("/sign-up", getSignup);
router.get("/login", getLogin);

export default router;
