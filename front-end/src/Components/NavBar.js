import React from "react";
import "./Components.css";

function Nav() {
  return (
    <nav className="navbar  navbar-light nav-custom bg-white border-bottom navbar-expand-md fade-in fixed-top">
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#collapser"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="collapser" className="collapse navbar-collapse">
        <ul className="ml-auto navbar-nav ">
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
      </div>
    </nav>
  );
}

export default Nav;
