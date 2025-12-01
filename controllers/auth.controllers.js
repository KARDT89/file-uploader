import prisma from "../lib/prisma.js";
import bcrypt from "bcryptjs";

function getSignup(req, res) {
  res.render("pages/sign-up");
}

function getLogin(req, res) {
  res.render("pages/login");
}

async function postSignup(req, res, next) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await prisma.user.create({
      data: {
        username: req.body.username,
        password: hashedPassword
      }
    })
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
}

export { getLogin, getSignup, postSignup };
