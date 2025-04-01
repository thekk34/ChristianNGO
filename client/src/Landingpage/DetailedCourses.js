import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaStar, FaClock } from "react-icons/fa";
import MeanImg from "../assets/images/MeanImg.jpg";
import MernImg from "../assets/images/MernImg.jpg";
import JavaImg from "../assets/images/JavaImg.jpg";
import AndroidImg from "../assets/images/AndroidImg.jpg";
import AWSimg from "../assets/images/AWSimg.jpg";
import AzureImg from "../assets/images/AzureImg.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";


const detailedCourses = [
  {
    title: "MEAN",
    description: "Learn a full-stack JavaScript framework that includes MongoDB, Express.js, Angular, and Node.js for building ...",
    duration: "50 hours",
    rating: 4.9,
    image: MeanImg,
  },
  {
    title: "MERN",
    description: "Learn MERN Stack (MongoDB, Express, React, Node.js) to build full-stack web applications efficiently.",
    duration: "45 hours",
    rating: 4.8,
    image: MernImg,
  },
  {
    title: "AWS",
    description: "Learn AWS to build, deploy, and manage scalable cloud applications with Amazon Web Services.",
    duration: "30 hours",
    rating: 4.7,
    image: AWSimg,
  },
  {
    title: "Azure",
    description: "Learn Microsoft Azure to build, deploy, and manage cloud applications and services securely.",
    duration: "28 hours",
    rating: 4.6,
    image: AzureImg,
  },
  {
    title: "Android",
    description: "Learn to develop mobile apps using Android Studio, Java, and Kotlin.",
    duration: "40 hours",
    rating: 4.8,
    image: AndroidImg,
  },
  {
    title: "Java",
    description: "Learn Java programming for web, mobile, and enterprise applications.",
    duration: "55 hours",
    rating: 4.9,
    image: JavaImg,
  },
];
const DetailedCourses = ({ goBack, scrollToSection }) =>  {
  const navigate = useNavigate();

  const handleViewCourse = (course) => {
    navigate(`/course-details`, { state: { course } });
  };
  
  return (
    <div>
   
      {/* <Navbar scrollToSection={scrollToSection} /> */}
   
    <section style={{ backgroundColor: "#e3f2fd", padding: "60px 0" }}>
    <Button className="btn btn-secondary m-2" onClick={() => navigate("/home")}>
                ← Back to Home
            </Button>
      <Container className="text-center">

        <h2 className="fw-bold text-primary">All Courses</h2>
        <p className="text-muted">Browse our collection of courses to enhance your skills</p>
        <Row className="mt-4">
          {detailedCourses.map((course, index) => (
            <Col md={6} lg={3} key={index} className="mb-4">
              <Card className="shadow-sm border-0 p-3" style={{ backgroundColor: "#ffffff" }}>
                {course.image && (
                  <Card.Img 
                    variant="top" 
                    src={course.image} 
                    alt={course.title} 
                    style={{ width: "100%", height: "180px", objectFit: "cover" ,borderRadius: "10px" }} 
                  />
                )}
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
        {/* <Button variant="light" className="mt-3 border" onClick={() => navigate("/home")}>
        Back to Home
      </Button> */}




      </Container>
    </section>
    <Footer />
    </div>
  );
};

export default DetailedCourses;