import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Description from "./components/Description";
import Cards from "./components/Cards";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Navbar2 from "./components2/Navbar2";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Modal from "./components/Modal";

function App() {
  const [mode, setmode] = useState({
    backgroundColor: "dark",
    color: "light",
  });

  const [pageMode, setpageMode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
  };
  const togglemode = () => {
    if (mode.color === "dark") {
      setmode({
        backgroundColor: "dark",
        color: "light",
      });
    } else {
      setmode({
        backgroundColor: "light",
        color: "dark",
      });
    }
  };
  const pageToggle = () => {};

  return (
    <>
    <Modal/>
    <Router>
      <Navbar
        title={"Antik"}
        aboutText="About"
        mode={mode}
        togglemode={togglemode}
      />
      
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={
        <TextForm
          heading="Enter your complain here"
          pageMode={pageMode}
          alert={alert}
          mode={mode}
          togglemode={togglemode}
        />}>
          </Route>
          <Route exact path="/cards" element={<Cards />} ></Route>
          <Route exact path="/modal" element={<Modal/>} ></Route>
          
        
        </Routes>
        
      </div>
      </Router>
      
    </>
  );
}

export default App;
