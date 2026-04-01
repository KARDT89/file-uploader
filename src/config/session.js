import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import prisma from "../lib/prisma.js";
import session from "express-session";

export default function setupSession(app) {
  app.use(
    session({
      cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000 // ms
      },
      secret: "kevster",
      resave: false,
      saveUninitialized: true,
      store: new PrismaSessionStore(prisma, {
        checkPeriod: 2 * 60 * 1000, //ms
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined
      })
    })
  );
}
