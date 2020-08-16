import React from "react";
import "./Components.css";

function Nav() {
  return (
    <nav className="navbar  navbar-expand fade-in nav-custom fixed-top">
      <a className="brand"></a>
      <ul className="ml-auto navbar-nav border border-success shadow">
        <li className="nav-item">
          <a className="nav-link  text-warning">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-danger">Tech</a>
        </li>
        <li className="nav-item red">
          <a className="nav-link text-secondary">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
