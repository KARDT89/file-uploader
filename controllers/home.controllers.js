async function getHomePage(req, res) {
  res.render("pages/homepage", { user: req.user });
}
async function getDashboard(req, res) {
  res.render("pages/dashboard", { user: req.user });
}

export { getHomePage, getDashboard };
