const multer =require("multer")
const path = require("path");

// === Storage for PDFs ===
const pdfStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/chapter_pdfs/"); // ✅ match your folder structure
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// PDF filter
const pdfFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files allowed"), false);
  }
};

// === Storage for Images ===
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/course_images/"); // ✅ match your folder structure
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Image filter
const imageFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files allowed"), false);
  }
};

// Export configured multer uploaders
module.exports = {
  uploadPDF: multer({ storage: pdfStorage, fileFilter: pdfFilter }),
  uploadImage: multer({ storage: imageStorage, fileFilter: imageFilter }),
};
