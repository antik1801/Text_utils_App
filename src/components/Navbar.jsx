import React, { useState } from "react";
import PropTypes from "prop-types";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-light text-dark`}>
      <div className="container-fluid">
        <Link className="navbar-brand text-dark" to="/">
          {props.title}
        </Link>
        <Dropdown title="Click Here" main="Models" blogs="blogs" />
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link
                className="nav-link active text-dark"
                aria-current="page"
                to="/about"
              >
                {props.aboutText}
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-dark" to="/cards">
                Cards
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-dark"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item " to="/modal">
                    Modal
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled text-dark">Disabled</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="form-check form-switch mx-3">
          <input
            className="form-check-input"
            onClick={props.togglemode}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label
            className="form-check-label text-dark"
            htmlFor="flexSwitchCheckDefault"
          >
            Enable Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set Props Here",
  aboutText: "About Text Here",
};
export default Navbar;
