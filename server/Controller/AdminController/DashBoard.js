const Dashboard = require("../../Model/Dashboard");
exports.GetDashboardData = async (req, res) => {
  try {
    const dashboardinfo = await Dashboard.findOne();
    if (!dashboardinfo) {
      return res.status(404).json({ message: "dashboard data is missing" });
    }
    return res.json(dashboardinfo); // ✅ Fixed 'response' → 'res'
  } catch (error) {
     return res.status(500).json({ message: "Unable to load dashboard data", error });
  }
};



exports.UpdateDashboardData = async (req, res) => {
  try {
    const { totalEnrollment, totalTasks, courseProgress, completionRate } = req.body;

    const updatedDashboard = await Dashboard.findOneAndUpdate(
      {}, 
      { totalEnrollment, totalTasks, courseProgress, completionRate }, 
      { new: true, upsert: true }
    );

    res.json(updatedDashboard);
  } catch (error) {
    res.status(500).json({ message: "Failed to update dashboard data", error });
  }
};




