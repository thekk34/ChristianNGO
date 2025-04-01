import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaStar, FaClock } from "react-icons/fa";
import MeanImg from "../assets/images/MeanImg.jpg";
import MernImg from "../assets/images/MernImg.jpg";
import AWSimg from "../assets/images/AWSimg.jpg";
import AzureImg from "../assets/images/AzureImg.jpg";

const courses = [
  {
    title: "MEAN",
    description: "Learn MongoDB, Express.js, Angular, and Node.js to web...",
    duration: "40 hours",
    rating: 4.8,
    image: MeanImg,
  },
  {
    title: "MERN",
    description: "Master MongoDB, Express, React, and Node.js for full-stack development.",
    duration: "35 hours",
    rating: 4.7,
    image: MernImg,
  },
  {
    title: "AWS",
    description: "Learn to build, deploy, and manage scalable applications on the cloud.",
    duration: "25 hours",
    rating: 4.9,
    image: AWSimg,
  },
  {
    title: "Azure",
    description: "Explore Microsoft Azure for cloud-based applications and services.",
    duration: "20 hours",
    rating: 4.6,
    image: AzureImg,
  },
];


const Courses = ({ showDetailedCourses }) => {
  const navigate = useNavigate();

  const handleViewCourse = (course) => {
    navigate(`/course-details`);
  };


  
  
    const handleViewDetailedCourse = (course) => {
      navigate(`/courses/detailed`);
    };
  return (
    <section style={{ backgroundColor: "#e3f2fd", padding: "50px 0" }}>
      <Container className="text-center" id="courses">
        <h2 className="fw-bold text-primary">Featured Courses</h2>
        <p className="text-muted">Explore our most popular courses and start your learning journey today.</p>
        <Row className="mt-4">
          {courses.map((course, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className="shadow-sm border-0 p-3" style={{ backgroundColor: "#ffffff" }}>
                <Card.Img 
                  variant="top" 
                  src={course.image} 
                  alt={course.title} 
                  style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "10px" }} 
                />
                <Card.Body>
                  <h5 className="fw-bold text-dark">{course.title}</h5>
                  <p className="text-muted small">{course.description}</p>
                  <p className="text-muted small">
                    <FaClock className="me-1 text-primary" /> {course.duration}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-warning">
                      <FaStar /> {course.rating}
                    </span>
                  </div>
                  {/* <Button variant="primary" className="w-100 mt-3">
                    View Course
                  </Button> */}
                  <Button variant="primary" className="w-100 mt-3" onClick={() => handleViewCourse(course)}>
                      View Course
                    </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Button variant="outline-primary" className="mt-3"onClick={() => handleViewDetailedCourse()}>
          View All Courses
        </Button>
      </Container>
    </section>
  );
};

export default Courses;
