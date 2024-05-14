import multer from "multer";
import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadDir = "public/images"
// Multer diskStorage configuration
export const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Create directory if it doesn't exist

    if (!fs.existsSync(uploadDir)) {
        console.log("salam 2")
      fs.mkdirSync(uploadDir, { recursive: true });
      console.log("salam 2")
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpeg");
  },
});

// Multer file filter
export const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(
      {
        message: "Unsupported file format",
      },
      false
    );
  }
};

// Multer instance for file upload
export const uploadPhoto = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: { fieldSize: 200000 },
});
