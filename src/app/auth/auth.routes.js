import { Router } from "express";
import * as controller from "./auth.controllers.js";
import passport from "passport";
import { ensureGuest } from "./auth.middleware.js";

const router = new Router();

router.get("/register", ensureGuest, controller.getSignup);
router.get("/login", ensureGuest, controller.getLogin);
router.post("/sign-up", controller.postSignup);
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureMessage: true
  })
);
router.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

export default router;
