import { Router } from "express";
import { getLogin, getSignup, postSignup } from "../controllers/auth.controllers.js";
import passport from "passport";

const router = new Router();

router.get("/sign-up", getSignup);
router.get("/login", getLogin);
router.post("/login", postSignup);
router.post(
    "/login",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        failureMessage: true,
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
