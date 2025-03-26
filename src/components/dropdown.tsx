import React, { useState } from "react";
import { motion } from "framer-motion";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Toggle Dropdown
      </button>


      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, x: 10 }}
          animate={{ opacity: 1, y: 10, x: -10 }}
          exit={{ opacity: 0, y: -10, x: 10 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2"
        >
          <ul className="space-y-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 1</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 2</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 3</li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown;
