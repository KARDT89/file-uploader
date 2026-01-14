import { v2 as cloudinary } from "cloudinary";
import prisma from "../lib/prisma.js";

// Make it offline first then we'll go online

// function postFileUpload(req, res) {
//   cloudinary.uploader.upload(req.file.path, { resource_type: "auto" }, function (err, result) {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({
//         success: false,
//         message: "upload error"
//       });
//     }
//     res.status(200).json({
//       success: true,
//       message: "Uploaded!",
//       data: result
//     });
//     console.log(result);
//   });
// }

async function postFileUpload(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const file = await prisma.file.create({
      data: {
        name: req.file.originalname,
        size: req.file.size,
        url: req.file.path,
        userId: req.user.id,
        folderId: req.body.folderId
      }
    });
    res.status(200).json({
      success: true,
      message: "File Uploaded",
      file
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Upload failed" });
  }
}

export { postFileUpload };
