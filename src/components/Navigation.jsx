import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

function Navigation() {
  return (
    <nav>
      <ul className="nav-wrap">
        <li className="nav-options">
          <NavLink className="nav-style" to="/" exact="true">
            About Me
          </NavLink>
        </li>
        <li className="nav-options">
          <NavLink className="nav-style" to="/projects">
            Projects
          </NavLink>
        </li>
        <li className="nav-options">
          <NavLink className="nav-style" to="/skills">
            Skills
          </NavLink>
        </li>
        <li className="nav-options">
          <NavLink className="nav-style" to="/contact">
            Contact
          </NavLink>
        </li>
        <li className="nav-options">
          <NavLink className="nav-style" to="/resume">
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;