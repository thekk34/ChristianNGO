import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { PeopleFill, ClockFill, BookFill } from "react-bootstrap-icons";
import Footer from "./Footer";


const About = () => {
  return (
    <>
      <section className="text-center py-5" style={{ backgroundColor: "#e3f2fd" }}>
        <Container>
          <h1 className="fw-bold text-primary mb-4">About Us</h1>
          <h2 className="fw-bold">Why Choose ChristianNGO?</h2>
          <p className="text-muted">
            Our platform offers a unique learning experience with expert instructors
            and cutting-edge content.
          </p>
          <Row className="justify-content-center mt-4">
            <Col md={3} className="mb-3">
              <Card className="border-0 shadow-sm p-3 tab-view" style={{ backgroundColor: "#ffffff" }}>
                <Card.Body>
                  <PeopleFill size={30} className="mb-2 text-primary" />
                  <Card.Title className="fw-bold text-dark">Expert Instructors</Card.Title>
                  <Card.Text className="text-muted">
                    Learn from industry professionals with years of experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-3">
              <Card className="border-0 shadow-sm p-3 tab-view" style={{ backgroundColor: "#ffffff" }}>
                <Card.Body>
                  <ClockFill size={30} className="mb-2 text-primary" />
                  <Card.Title className="fw-bold text-dark">Flexible Learning</Card.Title>
                  <Card.Text className="text-muted">
                    Study at your own pace, anytime and anywhere.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-3">
              <Card className="border-0 shadow-sm p-3 tab-view" style={{ backgroundColor: "#ffffff" }}>
                <Card.Body>
                  <BookFill size={30} className="mb-2 text-primary" />
                  <Card.Title className="fw-bold text-dark">Diverse Courses</Card.Title>
                  <Card.Text className="text-muted">
                    Explore a wide range of subjects to expand your knowledge.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>

  );
};

export default About;

// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { PeopleFill, ClockFill, BookFill } from "react-bootstrap-icons";
// import Footer from "./Footer";
// import "./Navbar.css";

// const About = () => {
//   return (
//     <>
//       <section className="text-center py-5" style={{ backgroundColor: "#e3f2fd" }}>
//         <Container>
//           <h1 className="fw-bold text-primary mb-4">About Us</h1>
//           <h2 className="fw-bold">Why Choose ChristianNGO?</h2>
//           <p className="text-muted">
//             Our platform offers a unique learning experience with expert instructors
//             and cutting-edge content.
//           </p>
//           <Row className="justify-content-center mt-4">
//             <Col md={3} className="mb-3">
//               <div className="tab-view">
//                 <Card className="border-0 shadow-sm p-3" style={{ backgroundColor: "#ffffff" }}>
//                   <Card.Body>
//                     <PeopleFill size={30} className="mb-2 text-primary" />
//                     <Card.Title className="fw-bold text-dark">Expert Instructors</Card.Title>
//                     <Card.Text className="text-muted">
//                       Learn from industry professionals with years of experience.
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </div>
//             </Col>
//             <Col md={3} className="mb-3">
//               <div className="tab-view">
//                 <Card className="border-0 shadow-sm p-3" style={{ backgroundColor: "#ffffff" }}>
//                   <Card.Body>
//                     <ClockFill size={30} className="mb-2 text-primary" />
//                     <Card.Title className="fw-bold text-dark">Flexible Learning</Card.Title>
//                     <Card.Text className="text-muted">
//                       Study at your own pace, anytime and anywhere.
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </div>
//             </Col>
//             <Col md={3} className="mb-3">
//               <div className="tab-view">
//                 <Card className="border-0 shadow-sm p-3" style={{ backgroundColor: "#ffffff" }}>
//                   <Card.Body>
//                     <BookFill size={30} className="mb-2 text-primary" />
//                     <Card.Title className="fw-bold text-dark">Diverse Courses</Card.Title>
//                     <Card.Text className="text-muted">
//                       Explore a wide range of subjects to expand your knowledge.
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default About;
