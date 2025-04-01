import React from "react";

const CourseDetails = () => {
  return (
    <div className="container">
      <h2 className="mb-4">📖 Course Details</h2>
      <div className="card p-3 shadow">
        <h4>MERN Stack Development</h4>
        <p><strong>Description:</strong> Learn MongoDB, Express, React, and Node.js.</p>
        <p><strong>Instructor:</strong> John Doe</p>
        <p><strong>Duration:</strong> 8 weeks</p>
        <button className="btn btn-primary">Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseDetails;
