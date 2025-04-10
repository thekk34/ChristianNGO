const Course = require("../../Model/Course");
const Chapter = require("../../Model/chapter");
const mongoose = require('mongoose');


const getFileUrl = (filename) => {
  if (!filename) return null;

  const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 5000}`;
  if (filename.endsWith(".pdf")) {
    return `${baseUrl}/Uploads/chapter_pdfs/${filename}`;
  }
  else if (filename.endsWith(".png") || filename.endsWith(".jpg"))
    return `${baseUrl}/Uploads/course_images/${filename}`;
};



const getCourseWithChapters = async (courseId) => {
  const results = await Course.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(courseId) } }, 
    {
      $lookup: {
        from: "chapters", 
        localField: "_id",
        foreignField: "courseId",
        as: "chapters" 
      }
    },
    { $limit: 1 } 
  ]);

  if (!results || results.length === 0) {
    return null;
  }

  const course = results[0];

  return {
    ...course,
    
    image: getFileUrl(course.image),
    chapters: (course.chapters || []).map(chapter => ({
      ...chapter,
      url: getFileUrl(chapter.pdf),
      title: chapter.title, // Already present
      id: chapter._id, // Frontend might use 'id'
      _id: chapter._id,
      size: null, // Not stored in current schema
      // Use chapter's createdAt as uploadDate (requires timestamps: true in schema)
      uploadDate: chapter.createdAt || null,
      // Remove fields frontend doesn't need if any (e.g., __v, courseId internal field)
      // pdf: undefined, // Optionally remove raw filename if URL is provided
    }))
  };
};


// Add Course
const addCourse = async (req, res) => {
  try {
    const { title, description, duration } = req.body;
    // Use req.file from multer (ensure multer middleware is correctly setup for 'image' field)
    const imageFilename = req.file ? req.file.filename : null;

    if (!title || !description || !duration || !imageFilename) {
      // Make sure image validation is correct based on whether it's mandatory
      return res.status(400).json({ message: "Title, description, duration, and image file are required" });
    }

    const course = new Course({
      title,
      description,
      duration,
      image: imageFilename // Store only the filename
    });
    await course.save();

    // Fetch the newly created course WITH chapters (which will be empty initially)
    const courseWithDetails = await getCourseWithChapters(course._id);

    res.status(201).json(courseWithDetails); // Send the detailed course object

  } catch (err) {
    console.error("Error adding course:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Add Chapter
const addChapter = async (req, res) => {
  try {
    // Ensure multer middleware is setup for 'pdf' field
    const { courseId, chapterTitle } = req.body;
    const pdfFilename = req.file ? req.file.filename : null;

    if (!courseId || !chapterTitle || !pdfFilename) {
      // Check if pdf is mandatory based on your requirements
      return res.status(400).json({ message: "Course ID, chapter title, and PDF file are required" });
    }

    // Validate courseId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({ message: "Invalid Course ID format" });
    }

    // Check if course exists
    const courseExists = await Course.findById(courseId);
    if (!courseExists) {
      return res.status(404).json({ message: "Course not found" });
    }


    const chapter = new Chapter({
      courseId: courseId,
      title: chapterTitle,
      pdf: pdfFilename // Store only the filename
    });
    await chapter.save();

    // Instead of returning just the chapter, return the updated course
    const updatedCourseWithDetails = await getCourseWithChapters(courseId);

    res.status(201).json(updatedCourseWithDetails); // Send the updated course object

  } catch (err) {
    console.error("Error adding chapter:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Show all courses (Now includes chapters)
const showCourse = async (req, res) => {
  try {
    const coursesWithChapters = await Course.aggregate([
      {
        $lookup: {
          from: "chapters", // Collection name for Chapters
          localField: "_id", // Field from the Course collection (_id)
          foreignField: "courseId", // Field from the Chapter collection
          as: "chapters" // Output array field name
        }
      },
      {
        $sort: { createdAt: -1 } // Optional: Sort courses by creation date, newest first
      }
      // You can add more stages like $match, $project here if needed
    ]);

    // --- Map results to add full URLs and match frontend expectations ---
    const coursesFormatted = coursesWithChapters.map(course => ({
      ...course,
      // Construct full image URL
      image: getFileUrl(course.image),
      chapters: (course.chapters || []).map(chapter => ({
        ...chapter,
        // Construct full PDF URL
        url: getFileUrl(chapter.pdf),
        // Add fields frontend might expect
        id: chapter._id, // Frontend might use 'id'
        _id: chapter._id,
        size: null, // Provide defaults if needed
        uploadDate: chapter.createdAt || null, // Use createdAt if available
        // pdf: undefined, // Optionally remove raw filename
      }))
    }));

    res.status(200).json(coursesFormatted);

  } catch (err) {
    console.error("Server error in showCourse:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get course details by ID (No longer needed if showCourse includes details, but keep if used elsewhere)
// Modify it to use the helper function for consistency
const editCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({ message: "Invalid Course ID format" });
    }

    const course = await getCourseWithChapters(courseId); // Use helper

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(course);
  } catch (err) {
    console.error("Error fetching course for edit:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};



const updateCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({ message: "Invalid Course ID format" });
    }
    if (!req.body || !req.body.title || !req.body.description || !req.body.duration) {
      return res.status(400).json({ message: "Title, description, and duration are required in the request body." });
    }
    const { title, description, duration } = req.body;
    const imageFilename = req.file ? req.file.filename : undefined;

    const updatedFields = { title, description, duration };
    if (imageFilename) {
      updatedFields.image = imageFilename;
    } else {
      return res.json({message:"No new image file provided. Image field not updated."})
    }

    const updatedCourseDoc = await Course.findByIdAndUpdate(
      courseId,
      updatedFields,
      {
        new: true,
        runValidators: true
      }
    );
  
    if (!updatedCourseDoc) {
      return res.status(404).json({ message: "Course not found" });
    }
    const courseWithDetails = await getCourseWithChapters(courseId);
    if (!courseWithDetails) {
      return res.status(404).json({ message: "Course could not be retrieved after update." });
    }
    res.status(200).json(courseWithDetails);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: "Validation Error: " + err.message, error: err });
    }
    res.status(500).json({ message: "Server error during course update.", error: err.message });
  }
};

// Delete Course (Remains largely the same, ensures chapters are deleted)
const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(courseId)) {
      return res.status(400).json({ message: "Invalid Course ID format" });
    }

    // Find the course to potentially get filenames for deletion from storage
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Find associated chapters BEFORE deleting the course (to get PDF filenames)
    const chaptersToDelete = await Chapter.find({ courseId: course._id });

    // Delete the course document
    await Course.findByIdAndDelete(courseId);

    // Delete associated chapter documents
    await Chapter.deleteMany({ courseId: course._id });

    // --- TODO: Delete actual files from storage ---
    // Delete course image file
    // if (course.image) { deleteFileFromStorage(course.image); }
    // Delete chapter PDF files
    // chaptersToDelete.forEach(chapter => {
    //     if(chapter.pdf) { deleteFileFromStorage(chapter.pdf); }
    // });
    // Implement `deleteFileFromStorage` using `fs.unlink` or your cloud storage SDK

    res.status(200).json({ message: "Course and associated chapters deleted" });
  } catch (err) {
    console.error("Error deleting course:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = {
  addCourse,
  addChapter,
  showCourse,
  editCourse, // Kept for potential direct use, now returns full details
  updateCourse,
  deleteCourse,
};