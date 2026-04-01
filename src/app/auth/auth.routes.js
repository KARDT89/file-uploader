import { Router } from "express";
import * as controller from "./auth.controllers.js";
import passport from "passport";
import { ensureGuest } from "./auth.middleware.js";

const router = new Router();

router.get("/register", ensureGuest, controller.getSignup);
router.post("/register", controller.postSignup);

router.get("/login", ensureGuest, controller.getLogin);
router.post("/login", controller.postLogin);

router.get("/log-out", controller.logout);

export default router;
