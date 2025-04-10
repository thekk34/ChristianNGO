import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {  Button } from "react-bootstrap";
// import { FaCalendarAlt, FaClock, FaUserFriends, FaUser } from "react-icons/fa";

// const initialBatches = [
//   {
//     id: 1,
//     title: "Web Development Basics",
//     status: "active",
//     date: "2024-04-01 - 2024-06-30",
//     time: "10:00 AM - 12:00 PM",
//     enrolled: "15 / 25 students enrolled",
//     instructor: "Nithish",
//   },
//   {
//     id: 2,
//     title: "Advanced JavaScript",
//     status: "upcoming",
//     date: "2024-05-01 - 2024-07-30",
//     time: "2:00 PM - 4:00 PM",
//     enrolled: "8 / 20 students enrolled",
//     instructor: "Hushnara",
//   },
// ];

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("Guest");
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  // const [batches, setBatches] = useState(initialBatches);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUsername(storedUser);
    }

    const storedCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(storedCourses);
  }, []);

  const handleViewCourse = (course) => {
    navigate(`/details/${course.name}`);
  };

  return (
    <div className="container" style={{ minHeight: "100vh", padding: "20px" }}>
      <h2 className="mb-4">Welcome, {username}</h2>
      <p className="lead">Track your enrolled courses below.</p>

      <div className="card p-4 mb-4">
        <h4>Enrolled Courses ({enrolledCourses.length})</h4>

        {enrolledCourses.length > 0 ? (
          <ul className="list-group">
            {enrolledCourses.map((course) => (
              <li
                key={course.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {course.name}
                {/* <span className="badge bg-success">
                  {course.progress || 0}% Completed
                </span> */}
                <Button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleViewCourse(course)}
                >
                  Go To Course
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">No courses enrolled yet.</p>
        )}
      </div>

      {/* Upcoming Courses Section */}
      {/* <h4 className="mt-4">Upcoming Courses</h4> */}
      {/* <div className="row">
        {batches.map((batch) => (
          <div key={batch.id} className="col-md-6 mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between mb-2">
                  <Card.Title>{batch.title}</Card.Title>
                  <span className={`badge ${batch.status === "active" ? "bg-success" : "bg-warning"}`}>
                    {batch.status.charAt(0).toUpperCase() + batch.status.slice(1)}
                  </span>
                </div>

                <div className="mb-2">
                  <div className="d-flex align-items-center">
                    <FaCalendarAlt className="me-2" />
                    <p className="mb-0">{batch.date}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaClock className="me-2" />
                    <p className="mb-0">{batch.time}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <FaUserFriends className="me-2" />
                    <p className="mb-0">{batch.enrolled}</p>
                  </div>
                </div>

                <div className="border-top my-2" />

                <div className="d-flex align-items-center">
                  <FaUser className="me-2" />
                  <div>
                    <p className="mb-0 fw-bold">{batch.instructor}</p>
                    <p className="text-muted mb-0">Instructor</p>
                  </div>
                </div>
                <Button className="btn btn-primary mt-2">Enroll Now</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Dashboard;
