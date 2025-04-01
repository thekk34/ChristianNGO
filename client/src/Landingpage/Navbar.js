import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars } from "react-icons/fa";
import profileImage from "../assets/images/web-development.jpg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const user = { name: "John Doe" };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleHomeNavigation = () => {
    navigate("/home");
    scrollToSection("home");
    setMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: "rgba(211, 164, 234, 0.8)" }}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#" onClick={(e) => {
          e.preventDefault();
          handleHomeNavigation();
        }}>
          ChristianNGO
        </a>

        <button className="navbar-toggler" type="button" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto text-center fw-bold">
            <li className="nav-item">
              <Link to="/home" className="nav-link btn btn-link" onClick={handleHomeNavigation}>
                Home
              </Link>
            </li>
            {[
              { name: "About", section: "about" },
              { name: "Courses", section: "courses" },
              { name: "Contact", section: "contact" },
            ].map(({ name, section }) => (
              <li className="nav-item" key={section}>
                <a
                  href={`#${section}`}
                  className="nav-link btn btn-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                    setMenuOpen(false);
                  }}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div ref={dropdownRef} className="d-flex align-items-center position-relative">
          <button className="btn p-0 border-0 bg-transparent" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <img src={profileImage} alt="User Profile" className="rounded-circle" style={{ width: "40px", height: "40px", cursor: "pointer" }} />
          </button>

          {dropdownOpen && (
            <ul className="dropdown-menu dropdown-menu-end show position-absolute" style={{ right: "0px", top: "50px", backgroundColor: "#bbdefb" }}>
              <li className="dropdown-header fw-bold">{user.name}</li>
              <li><button className="dropdown-item" onClick={() => navigate("/dashboard/dashboard")}>Dashboard</button></li>
              <li><button className="dropdown-item" onClick={() => navigate("/dashboard/profile")}>Profile</button></li>
              <li><Link className="dropdown-item text-danger" to="/" onClick={() => navigate("/")}>Log Out</Link></li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
