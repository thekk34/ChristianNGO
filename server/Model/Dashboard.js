const mongoose = require("mongoose");
const DashboardSchema = new mongoose.Schema({
  totalEnrollment: { type: Number, default: 0 },
  totalTasks: { type: Number, default: 0 },
  courseProgress: { type: Number, default: 0 },  
  completionRate: { type: Number, default: 0 }, 
});

const DashboardModel=mongoose.model("Dashboard",DashboardSchema);

module.exports=DashboardModel;
