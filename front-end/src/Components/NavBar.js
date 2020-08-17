import React from "react";
import "./Components.css";

function Nav() {
  return (
    <nav className="navbar  navbar-expand fade-in nav-custom fixed-top">
      <ul className="ml-auto navbar-nav border border-success shadow">
        <li className="nav-item">
          <a href="#about" className="nav-link  text-warning">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-danger" href="#stack">
            Tech
          </a>
        </li>
        <li className="nav-item red">
          <a className="nav-link text-secondary" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
