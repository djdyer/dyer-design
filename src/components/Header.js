import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const logo = require("../../src/assets/images/logos/dd_logo.png");

  return (
    <header>
      <div id="header">
        <nav>
          <div id="logolockup">
            <a
              href="https://dyer.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img id="logo" src={logo} alt="Dyer Design Lettermark" />
            </a>
            <div>
              <h1 id="name">DYER</h1>
              <h1 id="name2">DESIGN</h1>
            </div>
          </div>

          <div id="header-nav">
            <NavLink
              to="/work"
              className={({ isActive }) => (isActive ? "h1active" : "")}
            >
              <h1>WORK</h1>
            </NavLink>

            <NavLink
              to="/resume"
              className={({ isActive }) => (isActive ? "h1active" : "")}
            >
              <h1>RESUME</h1>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "h1active" : "")}
            >
              <h1>ABOUT</h1>
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "h1active" : "")}
            >
              <h1>CONTACT</h1>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
