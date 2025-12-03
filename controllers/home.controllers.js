async function getHomePage(req, res) {
  if (!req.user) {
    res.render("pages/homepage", { user: req.user });
  } else {
    res.redirect("/dashboard");
  }
}
async function getDashboard(req, res) {
  if (req.user) {
    res.render("pages/dashboard", { user: req.user });
  } else {
    res.redirect("/login");
  }
}

export { getHomePage, getDashboard };
