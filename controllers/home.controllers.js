async function getHomePage(req, res) {
  if (req.user) {
    res.render("pages/homepage", { user: req.user });
  } else {
    res.redirect("/login");
  }
}

export { getHomePage };
