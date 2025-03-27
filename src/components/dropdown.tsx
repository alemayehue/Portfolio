import React, { useState } from "react";
import { motion } from "framer-motion";

const DropdownButton = () => {
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

      <div className={`dropdown-closed z-3 ${isOpen ? "dropdown-open" : ""}`}>
        <button className="dropdown-element"> About Me </button>
        <button className="dropdown-element"> My Projects </button>
        <button className="dropdown-element"> My Resume </button>

        <button className="dropdown-element"> Contact Me </button>
      </div>
      



    </div>
  );
};

export default DropdownButton;
