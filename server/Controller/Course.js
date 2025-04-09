const Course=require("../Model/Course");

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
