import express from "express";
import ejsLayouts from "express-ejs-layouts";
import passport from "passport";
import authRouter from "./app/auth/auth.routes.js";
import homeRouter from "./app/home/home.routes.js";
import fileRouter from "./app/file/file.routes.js";
import folderRouter from "./app/folder/folder.routes.js";
import initializePassport from "./config/passport.js";
import session from "./config/session.js";

export function createExpressApplication() {
  const app = new express();

  app.use((req, res, next) => {
    console.log(`API Endpoint: ${req.method} ${req.originalUrl}`);
    next();
  });

  app.use(express.static("./src/public"));
  app.use(express.urlencoded({ extended: false }));

  app.set("views", "./src/views");
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
  app.use("/", folderRouter);

  // 404 Not Found handler (must be placed last)
  app.use((req, res, next) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
  });


  return app;
}
