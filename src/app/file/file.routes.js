import { Router } from "express";
import * as controller from "./file.controllers.js";
import {upload} from "../../middleware/upload.js";

const router = new Router();

router.post("/upload", upload.single("uploaded_file"), controller.postFileUpload);

export default router;
