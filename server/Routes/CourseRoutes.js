const {getCourse,getCourseByTitle,enrollUser,checkEnrollmentStatus}=require("../Controller/Course");
const express=require("express");
const verifyUser=require("../Middleware/VerifyUser");

const router=express.Router();

router.get("/showCourse",getCourse);
router.get("/course/:title", getCourseByTitle);
router.post("/enroll", verifyUser, enrollUser);

// Route: GET /api/enrollment-status/:courseId
router.get("/enrollment-status/:courseId", verifyUser, checkEnrollmentStatus);

module.exports=router;



