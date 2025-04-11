const express = require("express");
const {GetDashboardData,UpdateDashboardData}=require("../../Controller/AdminController/DashBoard");
const VerifyAdmin =require("../../Middleware/VerifyAdmin")
const router = express.Router();
router.get("/dashboard",VerifyAdmin, GetDashboardData); 
router.put("/dashboard", UpdateDashboardData); 
module.exports = router;
