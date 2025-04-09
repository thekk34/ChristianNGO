const {getCourse,getCourseByTitle}=require("../Controller/Course");
const express=require("express");

const router=express.Router();

router.get("/showCourse",getCourse);
router.get("/course/:title", getCourseByTitle);

module.exports=router;



