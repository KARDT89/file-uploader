import { v2 as cloudinary } from "cloudinary";

function postFileUpload(req, res) {
  cloudinary.uploader.upload(req.file.path, { resource_type: "auto" }, function (err, result) {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: "upload error"
      });
    }
    res.status(200).json({
      success: true,
      message: "Uploaded!",
      data: result
    });
    console.log(result);
  });
}

export { postFileUpload };
