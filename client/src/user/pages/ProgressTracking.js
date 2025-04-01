import React, { useState, useEffect } from "react";

const ProgressTracking = () => {
  const [courseProgress, setCourseProgress] = useState([]);

  useEffect(() => {
    const storedProgress = JSON.parse(localStorage.getItem("userProgress")) || [];
    setCourseProgress(storedProgress);
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="text-primary">Progress Tracking</h2>
          {courseProgress.length > 0 ? (
            <ul className="list-group">
              {courseProgress.map((course, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {course.name} 
                  <span className="badge bg-success">{course.progress}%</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">No progress tracked yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;
