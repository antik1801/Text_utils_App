import React from "react";
import PropTypes from "prop-types";

function Dropdown(props) {
  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          About ME
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="/">
              {props.title}
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              {props.main}
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/">
              {props.blogs}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
Dropdown.propTypes = {
  title: PropTypes.string,
  main: PropTypes.string,
  blogs: PropTypes.string,
};
Dropdown.defaultProps = {
  title: "Titles Here",
  main: "Drag Main files",
  blogs: "Click to see Blogs",
};
export default Dropdown;
