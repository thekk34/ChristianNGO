import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const HomeContact = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#e3f2fd" }}>
      <Container>
        <h2 className="fw-bold text-primary text-center mb-4">Contact Us</h2>
        <Row className="text-center">
         
          <Col xs={4} className="mb-3 d-flex align-items-center justify-content-center">
            <FaEnvelope className="text-primary me-2" style={{ fontSize: "1.8rem" }} />
            <h5 className="text-dark mb-0">Email: <span className="text-muted">info@christianngo.org</span></h5>
          </Col>

          
          <Col xs={4} className="mb-3 d-flex align-items-center justify-content-center">
            <FaPhone className="text-success me-2" style={{ fontSize: "1.8rem" }} />
            <h5 className="text-dark mb-0">Phone: <span className="text-muted">+123 456 7890</span></h5>
          </Col>

         
          <Col xs={4} className="d-flex align-items-center justify-content-center">
            <FaMapMarkerAlt className="text-danger me-2" style={{ fontSize: "1.8rem" }} />
            <h5 className="text-dark mb-0">Location: <span className="text-muted">123, Christian Street, City, Country</span></h5>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeContact;