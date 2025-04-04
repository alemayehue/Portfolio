import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import useViewportWidth from "../components/viewportWidth";

const DropdownButton = () => {
  const viewportWidth = useViewportWidth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-button">
      <button className="dropdown-button z-5" onClick={toggleMenu}>
        <div className={`top-line ${isOpen ? "top-line-open" : ""}`}></div>
        <div className={`bottom-line ${isOpen ? "bottom-line-open" : ""}`}></div>
      </button>

      {viewportWidth <= 480 ? (
        /* Conditionally render the mobile dropdown */
        <div className={`dropdown-closed-mobile z-3 ${isOpen ? "dropdown-open-mobile" : ""}`}>
          <button className={`dropdown-element" ${isOpen ? "active-cursor" : "remove-cursor"}`}> Home </button>
          <button className={`dropdown-element" ${isOpen ? "active-cursor" : "remove-cursor"}`}> My Work </button>
          <button className={`dropdown-element" ${isOpen ? "active-cursor" : "remove-cursor"}`}> My Resume </button>
          <div className="divider"></div>
          <button className={`dropdown-element ${isOpen ? "active-cursor" : "remove-cursor"}`}> Contact Me </button>
        </div>
      ) : (
        /* Conditionally render the desktop dropdown */
        <div className={`dropdown-closed dropdown-open z-3 ${isOpen ? "dropdown-open" : ""}`}>
          <button className={`dropdown-element ${isOpen ? "active-cursor" : "remove-cursor"}`}> Home </button>
          <button className={`dropdown-element ${isOpen ? "active-cursor" : "remove-cursor"}`}> My Work </button>
          <button className={`dropdown-element ${isOpen ? "active-cursor" : "remove-cursor"}`}> My Resume </button>
          <button className={`dropdown-element ${isOpen ? "active-cursor" : "remove-cursor"}`}> Contact Me </button>
          <div className="social-container">
            <div className="divider"/>
            <button>
              <Mail className={`"social-icon" ${isOpen ? "active-cursor" : "remove-cursor"}`}></Mail>
            </button>
            <button>
              <Github className={`"social-icon" ${isOpen ? "active-cursor" : "remove-cursor"}`}></Github>
            </button>
            <button>
              <Linkedin className={`"social-icon" ${isOpen ? "active-cursor" : "remove-cursor"}`}></Linkedin>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
