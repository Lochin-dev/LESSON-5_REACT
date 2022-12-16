import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
const index = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav className="nav">
            <h2 className="nav__logo">REACT.JS</h2>
            <ul className="nav__ul">
              <li className="nav__ul_list">
                <NavLink
                  className={({ isActive }) => (isActive ? "text-warning" : "")}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav__ul_list">
                <NavLink
                  className={({ isActive }) => (isActive ? "text-warning" : "")}
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav__ul_list">
                <NavLink
                  className={({ isActive }) => (isActive ? "text-warning" : "")}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default index;
