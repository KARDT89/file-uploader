import prisma from "../lib/prisma.js";

function getSignup(req, res) {
  res.render("pages/sign-up");
}

function getLogin(req, res) {
  res.render("pages/login");
}

async function postSignup(req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
      req.body.username,
      hashedPassword
    ]);
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
}

export { getLogin, getSignup, postSignup };
