import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [Text, setText] = useState("Enter text here");
  const [switchText, setswitchText] = useState("Disable Dark Mode");
  const [count, setCount] = useState(0);
  // const [Char, setChar] = useState(0);
  const handleupClick = () => {
    // console.log("UpperCase Handle Clicked" )
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    // console.log("UpperCase Handle Clicked" )
    let newText = Text.toLocaleLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("UpperCase Handle Clicked" )
    let newText = " ";
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [Mode, setMode] = useState({
    color: "dark",
    backgroundColor: "white",
  });
  const toggleMode = () => {
    if (Mode.color === "white") {
      setMode({
        color: "dark",
        backgroundColor: "white",
      });
      // setInterval(() => {
      //   document.title = "Text-Utils light mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Please install this App";
      // }, 1500);
      setswitchText("Enable Dark Mode");
    } else {
      setMode({
        color: "white",
        backgroundColor: "dark",
      });
      // setInterval(() => {
      //   document.title = "Text-Utils light mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Please install this App";
      // }, 1500);
      setswitchText("Disable Dark Mode");
    }
  };
  const wordCounter = () => {
    setCount(count++);
  };
  return (
    <>
      <div className={`container bg-${props.mode} text-${props.mode}`}>
        <h1 className={`bg-${props.mode} text-${props.mode}`}>
          {props.heading}
        </h1>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            onClick={toggleMode}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label
            className={`form-check-label text-${props.mode}`}
            htmlFor="flexSwitchCheckDefault"
          >
            {switchText}
          </label>
        </div>
        <div className="mb-3">
          <textarea
            className={`form-control bg-${Mode.backgroundColor} text-${Mode.color}`}
            value={Text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-2 " onClick={handleupClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-warning mx-1 " onClick={handleLowClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-danger mx-1 " onClick={handleClearClick}>
          Clear Text field
        </button>
      </div>
      <div
        className={`container my-3 bg-${Mode.backgroundColor} text-${Mode.color} my-3`}
      >
        <h1>Your text here</h1>
        <p>
          {Text.split(" ").length} words {Text.length} charector
        </p>
        <p>
          {(0.008 * Text.split(" ").length).toFixed(3)} Seconds needed to read
        </p>
        <h2 className="">Preview</h2>
        <p className="my-3">{Text}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
TextForm.defaultProps = {
  heading: "Please write something here",
};
