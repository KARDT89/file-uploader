function getSignup(req, res) {
  res.render("pages/sign-up");
}

function getLogin(req, res) {
  res.render("pages/login");
}

export { getLogin, getSignup };
