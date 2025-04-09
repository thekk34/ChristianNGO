const express=require("express");
const {getProfileData,getUsername}=require("../Controller/UserController");
const verifyUser=require("../Middleware/VerifyUser");

const router=express.Router();
router.get("/getUsername", verifyUser, getUsername);
router.get("/getProfileData", verifyUser, getProfileData);

module.exports=router;