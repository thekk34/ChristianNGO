import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";




const Dashboard = () => {

  const navigate = useNavigate();

  const handleViewCourse = (course) => {
    navigate(`/course-details`);
  };
  const [username, setUsername] = useState("Guest");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUsername(storedUser);
    }

    const storedCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [
        { id: 1, name: "MERN Stack", progress: 80 },
        { id: 2, name: "AWS", progress: 50 },
        { id: 3, name: "Python", progress: 100 },
        { id: 4, name: "React", progress: 70 },
      ];
      
    setEnrolledCourses(storedCourses);
  }, []);

  return (
    <div
      className="container"
      style={{
        backgroundColor: "#e3f2fd",
        minHeight: "100vh",
        padding: "20px",
        borderRadius: "8px",
        color: "#fff",
      }}
    >
      <h2 className="mb-4 text-dark">Welcome, {username}</h2>
      <p className="lead text-dark">Track your enrolled courses below.</p>

      <div
        className="card p-4 shadow-sm"
        style={{ backgroundColor: "#CCDCDB", color: "#000" }}
      >
        <h4>Enrolled Courses ({enrolledCourses.length})</h4>

        {enrolledCourses.length > 0 ? (
          <ul className="list-group">
            {enrolledCourses.map((course) => (
              <li
                key={course.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {course.name}
                <span className="badge bg-success">
                  {course.progress}% Completed
                </span>
                {/* <Link onClick={() => handleViewCourse(course)} className="btn btn-primary btn-sm">
                  Go to Course
                </Link> */}
                <Button  className="btn btn-primary btn-sm" onClick={() => handleViewCourse(course)}>
                      Go To Course
                    </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">No courses enrolled yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
