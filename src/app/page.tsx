"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Loader from "../components/ui/loading";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function LandingPage() {
  const [open, setOpen] = useState(false);

  const dropdownState = () => {
    setOpen(!open);
    console.log(open);
  }

  return (
    <div className='page'>
      <header className='landing-header galka'>
        <a className="header-logo" href="HOMEPAGEHOMEPAGEHOMEPAGE">
          elias
        </a>
        <button className='dropdown' onClick={dropdownState}>
          <div className="top-line"></div>
          <div className="bottom-line"></div>
        </button>
      </header>

      <main className='landing-main'>
        Here is the main
      </main>
      


 
{/*   <main className="flex flex-grow items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl p-10 bg-white/10 rounded-xl backdrop-blur-lg shadow-lg"
        >
          <h2 className="text-5xl font-extrabold mb-4 text-header">
            Elias Alemayehu
          </h2>
          <p className="text-lg text-gray-300">
            Full-stack developer with a passion for building modern web
            applications.
          </p>
        </motion.div>
      </main> */}

      {/* Footer
      <footer className="w-full bg-header text-white py-4">
        <div className="container mx-auto flex justify-center space-x-6">
          <a href="https://github.com/alemayehue" target="_blank">
            <Github className="w-6 h-6 hover:text-gray-300 transition" />
          </a>
          <a href="https://linkedin.com/in/alemayehue" target="_blank">
            <Linkedin className="w-6 h-6 hover:text-gray-300 transition" />
          </a>
          <a href="mailto:eliasalemayehu323@gmail.com">
            <Mail className="w-6 h-6 hover:text-gray-300 transition" />
          </a>
        </div>
      </footer> */}
    </div>
  );
}
