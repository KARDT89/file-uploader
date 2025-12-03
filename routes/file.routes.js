import { Router } from "express";
import { postFileUpload } from "../controllers/file.controllers.js";
import multer from "multer";

const router = new Router();
const upload = multer({ dest: 'uploads/'})

router.post("/file-upload", upload.single('uploaded_file'), postFileUpload);

export default router;
