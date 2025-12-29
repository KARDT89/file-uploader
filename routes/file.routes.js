import { Router } from "express";
import { postFileUpload } from "../controllers/file.controllers.js";
import upload from "../middleware/upload.js";

const router = new Router();

router.post("/upload", upload.single("uploaded_file"), postFileUpload);

export default router;
