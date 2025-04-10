const express = require("express");
const {
  addCourse,
  showCourse,
  editCourse,
  updateCourse, 
  deleteCourse,
  addChapter,
} = require("../../Controller/AdminController/CourseController");
const { uploadImage, uploadPDF } = require("../../Middleware/Upload");
const router = express.Router();
router.post("/addCourse", uploadImage.single("image"), addCourse);
router.post("/addChapter", uploadPDF.single("pdf"), addChapter); 
router.get("/showCourse", showCourse);
router.get("/editCourse/:id", editCourse);
router.put("/updateCourse/:id", uploadImage.single("image"), updateCourse);
router.delete("/deleteCourse/:id", deleteCourse);

module.exports = router;
