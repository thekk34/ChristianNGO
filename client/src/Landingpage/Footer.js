import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="mb-4 mt-4">
       
          <Col md={6}>
            <h5 className="text-primary">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Home</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Career</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Courses</a></li>
              <li><a href="#" className="text-dark text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Advanced Courses</a></li>
            </ul>
          </Col>

      
          <Col md={6}>
            <h5 className="text-primary">ChristianNGO</h5>
            <p className="text-dark">
              Empowering learners worldwide with high-quality online education. Learn at your own pace, anytime, anywhere.
            </p>
            <div className="d-flex gap-3">
              <FaFacebook className="text-primary" style={{ fontSize: "1.5rem", cursor: "pointer" }} />
              <FaTwitter className="text-info" style={{ fontSize: "1.5rem", cursor: "pointer" }} />
              <FaInstagram className="text-danger" style={{ fontSize: "1.5rem", cursor: "pointer" }} />
              <FaYoutube className="text-danger" style={{ fontSize: "1.5rem", cursor: "pointer" }} />
            </div>
          </Col>
        </Row>

        <hr className="text-primary" />
        <div className="text-center text-dark">
          <p>&copy; 2025 <span className="text-primary">ChristianNGO</span>. All rights reserved.</p>
          <p>Terms of Service | Privacy Policy | Cookie Policy</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
