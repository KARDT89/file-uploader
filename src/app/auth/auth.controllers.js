import prisma from "../../lib/prisma.js";
import bcrypt from "bcryptjs";
import passport from "passport";

function getSignup(req, res) {
  res.render("pages/register", { user: req.user });
}

function getLogin(req, res) {
  res.render("pages/login", { user: req.user });
}

async function postSignup(req, res, next) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await prisma.user.create({
      data: {
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
      }
    });
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
}



async function logout(res, req, next) {
  // Implementation for handling login
  return (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  };
}

export { getLogin, getSignup, postSignup, logout };
