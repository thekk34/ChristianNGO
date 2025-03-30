import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import coursesBanner from "../assets/images/home-image.jpg";

const Home = () => {
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-5 mt-5 " style={{ backgroundColor: "#e3f2fd" }}>
      <Container>
        <Row className="align-items-center">
       
          <Col lg={6} md={12} className="text-start">
            <h1 className="fw-bold display-5 mb-3" style={{ fontSize: "4rem" ,color: "#4a148c" }}>
              Learn Without Limits
            </h1>
            <p className="text-secondary fs-5" style={{ color: "#37474f" }}>
              Discover thousands of courses taught by expert instructors. Expand your skills and achieve your personal and professional goals.
            </p>
            <div className="d-flex gap-3 mb-4">
              <Button variant="dark" className="px-4 py-2" 
              style={{ backgroundColor: "#388e3c", border: "none", color: "#fff" }}
              onClick={() => scrollToSection("courses")}>
                Explore Courses
              </Button>
              
            </div>

           
            <Row className="mt-4 g-1">
              <Col xs="auto" className="text-center px-2">
                <h4 className="fw-bold mb-1"  style={{ color: "#1e88e5" }}>10K+</h4>
                <p className="text-secondary small mb-0">Courses</p>
              </Col>
              <Col xs="auto" className="text-center px-2">
                <h4 className="fw-bold mb-1"  style={{ color: "#2e7d32" }}>200+</h4>
                <p className="text-secondary small mb-0">Instructors</p>
              </Col>
              <Col xs="auto" className="text-center px-2">
                <h4 className="fw-bold mb-1" style={{ color: "#d84315" }}>50K+</h4>
                <p className="text-secondary small mb-0">Students</p>
              </Col>
            </Row>
          </Col>

          
          <Col lg={6} md={12} className="text-center mt-5">
            <img
              src={coursesBanner}
              alt="Courses Banner"
              className="img-fluid rounded shadow"
              style={{ width: "80%", height: "350px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;