import express from "express";
import ejsLayouts from "express-ejs-layouts";
import session from "express-session";
import passport from "passport";
import authRouter from "./routes/auth.routes.js";

const app = new express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(`API Endpoint: ${req.method} ${req.originalUrl}`);
  next();
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("views", "./views");
app.set("view engine", "ejs");
// app.use(ejsLayouts);
// app.set("layout", "layouts/main");

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());

app.get("/", (req, res) => {
  res.render("index");
});
app.use("/", authRouter);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`running at http://localhost:${PORT}`);
});
