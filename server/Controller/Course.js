const Course=require("../Model/Course");
const Enrollment=require("../Model/Enrollment")

exports.getCourse=async(req,res)=>{
    try {
        const courses = await Course.find(); 
        res.status(200).json(courses);
      } catch (error) {
        console.error("Error fetching courses:", error);
        res.status(500).json({ message: "Failed to fetch courses" });
      }
}

exports.getCourseByTitle = async (req, res) => {
  const { title } = req.params;

  try {
    const course = await Course.findOne({ title });

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(course);
  } catch (error) {
    console.error("Error fetching course by title:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getEnrolledCourses = async (req, res) => {
  try {
    const userEmail = req.email;

    const enrolled = await Enrollment.find({ userEmail }).populate("courseId");

    const courses = enrolled.map((enroll) => ({
      id: enroll.courseId._id,
      name: enroll.courseId.title,
    }));

    res.status(200).json({ username: req.username, courses });
  } catch (error) {
    console.error("Error fetching enrolled courses:", error);
    res.status(500).json({ message: "Server error" });
  }
};



exports.enrollUser = async (req, res) => {
  const { courseId } = req.body;

  if (!courseId) return res.status(400).json({ message: "Course ID is required." });

  try {
    const alreadyEnrolled = await Enrollment.findOne({
      userEmail: req.email,
      courseId
    });

    if (alreadyEnrolled) {
      return res.status(400).json({ message: "User already enrolled in this course." });
    }

    await Enrollment.create({
      userEmail: req.email,
      courseId
    });

    res.status(200).json({ message: "Enrollment successful." });
  } catch (error) {
    console.error("Error during enrollment:", error);
    res.status(500).json({ message: "Server error during enrollment." });
  }
};


// GET: Check if user is enrolled in a cour
exports.checkEnrollmentStatus = async (req, res) => {
  const { courseId } = req.params;

  try {
    const enrollment = await Enrollment.findOne({
      userEmail: req.email,
      courseId
    });

    res.status(200).json({ enrolled: !!enrollment });
  } catch (error) {
    console.error("Error checking enrollment status:", error);
    res.status(500).json({ message: "Server error while checking enrollment status." });
  }
};




