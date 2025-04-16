import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="mt-3">
      <div
        className="d-flex flex-column p-3 border-end shadow-sm mobile-side-bar"
        style={{
          width: "250px",
          height: "102vh",
          backgroundColor: "#1D2180",
          color: "#fff",
        }}
      >
        <h3 className="text-center text-light">Christiano NGO</h3>
        <ul className="nav flex-column mobile-nav">
          <li className="nav-item">
            <NavLink
              to="/user/dashboard"
              className={({ isActive }) =>
                `nav-link text-white ${isActive ? "bg-primary text-dark rounded px-2" : ""}`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/user/profile"
              className={({ isActive }) =>
                `nav-link text-white ${isActive ? "bg-primary text-dark rounded px-2" : ""}`
              }
            >
              User Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/course"
              className={({ isActive }) =>
                `nav-link text-white ${isActive ? "bg-primary text-dark rounded px-2" : ""}`
              }
              style={{
                textDecoration: "none",
                border: "none",
                background: "none",
              }}
            >
              Browse Courses
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

