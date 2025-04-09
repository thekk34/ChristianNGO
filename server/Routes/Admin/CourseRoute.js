const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  addCourse,
  showCourse,
  editCourse,
  updateCourse,
  deleteCourse,
  addChapter,
} = require("../../Controller/AdminController/CourseController");

const router = express.Router();

// Course Image Upload
const courseStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/course_images/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const uploadCourseImage = multer({ storage: courseStorage });

// Chapter PDF Upload
const chapterStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/chapter_pdfs/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const uploadChapterPDF = multer({ storage: chapterStorage });

// ROUTES
router.post("/addCourse", uploadCourseImage.single("image"), addCourse);
router.post("/addChapter", uploadChapterPDF.single("pdf"), addChapter);

router.get("/showCourse", showCourse);
router.get("/editCourse/:id", editCourse);
router.put("/updateCourse/:id", updateCourse);
router.delete("/deleteCourse/:id", deleteCourse);

module.exports = router;
