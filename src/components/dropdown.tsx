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
        <div />
      ) : (
        /* Conditionally render the desktop dropdown */
        <div className={`dropdown-closed dropdown-closed z-3 ${isOpen ? "dropdown-open" : ""}`}>
            <div className="top-dd-elements dropdown-element">
              <a href="#" className={`home ${isOpen ? "active-cursor" : "remove-cursor"}`}> Home </a>
              <a href="#" className={`work ${isOpen ? "active-cursor" : "remove-cursor"}`}> My Work </a>
              <a href="#" className={`resume ${isOpen ? "active-cursor" : "remove-cursor"}`}> My Résumé </a>
              <a href="#" className={`contact ${isOpen ? "active-cursor" : "remove-cursor"}`}> Contact Me </a>
            </div>
          <div className="social-container">
            <div className={`divider-origin ${isOpen ? "divider-animation" : ""}`}/>
            <a href="#">
              <Mail className={`social-icon mail-icon ${isOpen ? "active-cursor" : "remove-cursor"}`}></Mail>
            </a>
            <a href="#">
              <Github className={`social-icon github-icon ${isOpen ? "active-cursor" : "remove-cursor"}`}></Github>
            </a>
            <a href="#">
              <Linkedin className={`social-icon linkedin-icon ${isOpen ? "active-cursor" : "remove-cursor"}`}></Linkedin>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
