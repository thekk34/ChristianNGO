import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import coursesBanner from "../../assets/images/home-image.jpg";

const Home = () => {
   const navigate = useNavigate();
  return (
    <section id="#home" className="py-5 mt-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12} className="text-start">
            <h1 className="fw-bold display-5 mb-3 text-primary">Learn Without Limits</h1>
            <p className="text-secondary fs-5">
              Discover thousands of courses taught by expert instructors. Expand your skills and achieve your personal and professional goals.
            </p>
            <Button variant="success" className="px-4 py-2" onClick={() => navigate("/courses")}>
              Explore Courses
            </Button>
          </Col>

          <Col lg={6} md={12} className="text-center mt-5">
            <img src={coursesBanner} alt="Courses Banner" className="img-fluid rounded shadow" style={{ width: "80%", height: "350px", objectFit: "cover" }} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
