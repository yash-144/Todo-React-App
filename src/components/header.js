import React, { useState } from "react";
import { Link } from "react-router-dom";
import darkThemeIcon from "../images/night.png";
import lightThemeIcon from "../images/day.png";
import "../App.css";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.add("light-mode");
    }
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      navbar.classList.toggle("dark-mode");
    }
  };

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/Todo-React-App">
        Todos list
      </Link>

      {/* Hamburger for android View */}
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-expanded={!collapsed}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

        {/* Theme Switch */}
        <div className="theme-switch" onClick={toggleTheme}>
          <img
            src={darkMode ? lightThemeIcon : darkThemeIcon}
            alt="Theme switch"
          />
        </div>

      <div className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/Todo-React-App">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Todo-React-App/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
