const {register,verifyOtp,resendOtp,verify,login,logout,forgotPassword,resetPassword} = require("../Controller/AuthController");
const verifyUser = require("../Middleware/VerifyUser");
const express = require("express");


const router = express.Router();

router.post("/register", register); 
router.post("/verifyOtp", verifyOtp); 
router.post("/resendOtp", resendOtp); 
router.post("/login", login);
router.get("/logout", logout);
router.get("/verify", verifyUser, verify);
router.post("/forgotPassword", forgotPassword); 
router.post("/resetPassword", resetPassword);   

module.exports = router;
