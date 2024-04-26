import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../images/logo.png";
import { useSelector } from "react-redux";

const AdminNavbar = () => {
  const location = useLocation();
  const { auth } = useSelector((store) => store);

  const RenderMenu = () => {
    if (auth?.user) {
      return (
        <>
          <li
            className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
          >
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/shop" ? "active" : ""
            }`}
          >
            <NavLink className="nav-link" to="/adoption">
              Adoption
            </NavLink>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>

          <li
            className={`nav-item ${
              location.pathname === "/logout" ? "active" : ""
            }`}
          >
            <NavLink className="nav-link" to="/logout">
              Logout
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li
            className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
          >
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/adoption" ? "active" : ""
            }`}
          >
            <NavLink className="nav-link" to="/shop">
              Adoption
            </NavLink>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/login" ? "active" : ""
            }`}
          >
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/signup" ? "active" : ""
            }`}
          >
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#007bff" }}
    >
      <a className="navbar-brand" href="/">
        PAWFECT FINDS
      </a>
      <img
        src={logo}
        alt="logo"
        style={{ maxWidth: "100px", maxHeight: "50px" }}
      />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <RenderMenu />
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
