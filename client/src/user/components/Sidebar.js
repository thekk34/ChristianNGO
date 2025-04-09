import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="mt-3">
        <div
          className="d-flex flex-column p-3 border-end shadow-sm"
          style={{
            width: "250px",
            height: "102vh",
            backgroundColor: "#1D2180",
            color: "#fff",
          }}
        >
          <h3 className="text-center text-light">Christiano NGO</h3>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/user/dashboard" className="nav-link text-white">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user/profile" className="nav-link text-white">
                User Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/course"
                className="nav-link btn btn-link text-start text-white"
                style={{
                  textDecoration: "none",
                  border: "none",
                  background: "none",
                  padding: 0,
                }}
              >
                Browse Courses
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
