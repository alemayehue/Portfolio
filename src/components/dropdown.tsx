import React, { useState } from "react";
import viewportWidth from "../components/viewportWidth";
import { motion } from "framer-motion";
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

      {/* Conditionally render the mobile or desktop dropdown */}
      {viewportWidth <= 480 ? (
        <div className={`dropdown-closed-mobile dropdown-container z-3 ${isOpen ? "dropdown-open-mobile" : ""}`}>
          <button className="dropdown-element"> About Me </button>
          <button className="dropdown-element"> My Projects </button>
          <button className="dropdown-element"> My Resume </button>
          <button className="dropdown-element"> Contact Me </button>
        </div>
      ) : (
        <div className={`dropdown-closed dropdown-container z-3 ${isOpen ? "dropdown-open" : ""}`}>
          <button className="dropdown-element"> About Me </button>
          <button className="dropdown-element"> My Projects </button>
          <button className="dropdown-element"> My Resume </button>
          <button className="dropdown-element"> Contact Me </button>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
