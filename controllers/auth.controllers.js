import prisma from "../lib/prisma.js";
import bcrypt from "bcryptjs";

function getSignup(req, res) {
  if (req.user) {
    res.redirect("/dashboard");
  } else {
    res.render("pages/sign-up", { user: req.user });
  }
}

function getLogin(req, res) {
  if (req.user) {
    res.redirect("/dashboard");
  } else {
    res.render("pages/login", { user: req.user });
  }
}

async function postSignup(req, res, next) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await prisma.user.create({
      data: {
        username: req.body.username,
        password: hashedPassword
      }
    });
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
}

export { getLogin, getSignup, postSignup };
