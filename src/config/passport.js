import passport from "passport";
import passportLocal from "passport-local";
import prisma from "../lib/prisma.js";
import bcrypt from "bcryptjs";

const LocalStrategy = passportLocal.Strategy;

export default function initializePassport() {
  passport.use(
    new LocalStrategy(async (email, password, done) => {
      try {
        const user = await prisma.user.findUnique({
          where: { email: email }
        });

        if (!user) {
          return done(null, false, { message: "Incorrect email" });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          // passwords do not match!
          return done(null, false, { message: "Incorrect password" });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: id }
      });

      done(null, user);
    } catch (err) {
      done(err);
    }
  });
}
