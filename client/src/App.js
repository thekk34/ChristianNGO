import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Landingpage/Home";
import Courses from "./Landingpage/Courses";
import Contact from "./Landingpage/Contact";
import About from "./Landingpage/About";
import Navbar from "./Landingpage/Navbar";
import DetailedCourses from "./Landingpage/DetailedCourses";
import Footer from "./Landingpage/Footer";
import Faqs from "./Landingpage/Faqs";


const App = () => {
  const [showDetailedCourses, setShowDetailedCourses] = useState(false);

  // Function to scroll to sections
  const scrollToSection = (id) => {
    setShowDetailedCourses(false); // Ensure we switch back to the main page
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Timeout ensures smooth transition after changing state
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      {showDetailedCourses ? (
        <DetailedCourses goBack={() => setShowDetailedCourses(false)} scrollToSection={scrollToSection} />
      ) : (
        <>
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="courses">
            <Courses showDetailedCourses={() => setShowDetailedCourses(true)} />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <section id="faqs">
            <Faqs />
          </section>
          <section id="footer">
            <Footer />
          </section>

        </>
      )}
    </div>
  );
};

export default App;