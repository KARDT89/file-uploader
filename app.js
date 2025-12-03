import express from "express";
import ejsLayouts from "express-ejs-layouts";
import passport from "passport";
import authRouter from "./routes/auth.routes.js";
import homeRouter from "./routes/home.routes.js";
import fileRouter from "./routes/file.routes.js";
import initializePassport from "./config/passport.js";
import session from "./config/session.js";

const app = new express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(`API Endpoint: ${req.method} ${req.originalUrl}`);
  next();
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(ejsLayouts);
app.set("layout", "layouts/main-layout");

session(app);
initializePassport();
app.use(passport.initialize());
app.use(passport.session());

app.use("/", authRouter);
app.use("/", homeRouter);
app.use("/", fileRouter);

// 404 Not Found handler (must be placed last)
app.use((req, res, next) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`running at http://localhost:${PORT}`);
});
