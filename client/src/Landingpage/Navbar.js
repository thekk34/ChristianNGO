import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { FaBars } from "react-icons/fa"; 
import profileImage from "../assets/images/web-development.jpg";

const Navbar = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const user = { name: "John Doe" }; 

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "#f8d7da" }}>
      <div className="container-fluid">
        
        <a className="navbar-brand fw-bold" href="#">
          ChristianNGO
        </a>

        <div className="d-flex align-items-center ms-auto gap-5">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setDropdownOpen(false); 
            }}
          >
            <FaBars />
          </button>
        </div>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto text-center fw-bold">
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollToSection("home")}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollToSection("about")}>
                About
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollToSection("courses")}>
                Courses
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollToSection("contact")}>
                Contact
              </button>
            </li>
          </ul>
        </div>

        {!menuOpen && (
          <div className="d-flex align-items-center position-relative">
            <button
              className="btn p-0 border-0 bg-transparent"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img
                src={profileImage}
                alt="User Profile"
                className="rounded-circle"
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
              />
            </button>

            {dropdownOpen && (
              <ul
                className="dropdown-menu dropdown-menu-end show position-absolute"
                style={{ right: "0px", top: "50px", backgroundColor: "#bbdefb" }}
              >
                <li className="dropdown-header fw-bold">{user.name}</li> 
                <li><a className="dropdown-item" href="#">Dashboard</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item text-danger" href="#">Log Out</a></li>
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;