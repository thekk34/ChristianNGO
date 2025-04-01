import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";

// Authentication Pages
import Welcome from "./LoginPage/Landingpage";
import LoginPage from "./LoginPage/Loginpage";
import Registerpage from "./LoginPage/Registerpage";
import ForgotPassword from "./LoginPage/Forgotpassword";
import ResetPassword from "./LoginPage/Resetpassword";
import OtpFormPage from "./LoginPage/Otpformpage";

// Landing Page Components
import Home from "./Landingpage/Home";
import Courses from "./Landingpage/Courses";
import Contact from "./Landingpage/Contact";
import About from "./Landingpage/About";
import Navbar from "./Landingpage/Navbar";
import DetailedCourses from "./Landingpage/DetailedCourses";
import Footer from "./Landingpage/Footer";
import Faqs from "./Landingpage/Faqs";
import CourseDetails from "./Landingpage/CourseDetails";

// Dashboard Components
import Dashboard from "./user/pages/Dashboard";
import UserProfile from "./user/pages/UserProfile";
import Sidebar from "./user/components/Sidebar";

const LandingPage = () => {
  const [showDetailedCourses, setShowDetailedCourses] = useState(false);
  const location = useLocation(); // Get current route

  // Hide Navbar when viewing detailed courses
  const shouldShowNavbar = location.pathname !== "/courses/detailed";

  const scrollToSection = (id) => {
    setShowDetailedCourses(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      {/* Conditionally Render Navbar */}
      {shouldShowNavbar && <Navbar scrollToSection={scrollToSection} />}

      {showDetailedCourses ? (
        <DetailedCourses goBack={() => setShowDetailedCourses(false)} scrollToSection={scrollToSection} />
      ) : (
        <>
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="courses"><Courses showDetailedCourses={() => setShowDetailedCourses(true)} /></section>
          <section id="contact"><Contact /></section>
          <section id="faqs"><Faqs /></section>
          <section id="footer"><Footer /></section>
        </>
      )}
    </>
  );
};

// Welcome Page with Navigation to Login
const WelcomePage = () => {
  const navigate = useNavigate();
  return <Welcome onLogin={() => navigate("/login")} />;
};

// Dashboard Layout with Sidebar
const DashboardLayout = () => {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      {/* Sidebar with Fixed Width */}
      <div style={{ width: "250px", backgroundColor: "#AE5264" }}>
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow-1 p-3">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  console.log("appworks");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Registerpage />}/>
        <Route path="/otp-verification" element={<OtpFormPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/dashboard/*" element={<DashboardLayout />} />
        <Route path="/courses/detailed" element={<DetailedCourses />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
