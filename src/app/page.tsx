"use client";
// From React/Next.js
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, Scroll } from "lucide-react";

// From my functions
import Loader from "../components/loading";
import ScrollTracker from "../components/scroll";
import Resize from "../components/resize";

// Misc.
import { motion } from "framer-motion";


export default function LandingPage() {
  const [open, setOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);

  const viewportHeight = window.innerHeight;

  // Records the section positions based on the y level of the user's viewing screen
  type SectionKeys = "first" | "second" | "third" | "fourth" | "fifth";
  const sections: Record<SectionKeys, number> = {
    first: 0,
    second: 0.96 * viewportHeight,
    third: 1.96 * viewportHeight,
    fourth: 2.96 * viewportHeight,
    fifth: 4 * viewportHeight,
  };

  const scrollToSection = (section: SectionKeys) => {
    const position = sections[section];
    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  const dropdownState = () => {
    setOpen(!open);
  }

  return (
    <div className='page'>
      <ScrollTracker onScrollChange={setScrollDirection} />
      <header className='landing-header galka'>
        <a className="header-logo" href="HOMEPAGEHOMEPAGEHOMEPAGEHOMEPAGEHOMEPAGEHOMEPAGE">
          elias
        </a>
        <button className='dropdown' onClick={() => scrollToSection("second")}>
          <div className="top-line"></div>
          <div className="bottom-line"></div>
        </button>
      </header>

      <main className='landing-page-1'>
        Here is landing page 1
      </main>

      <main className='landing-page-2'>
        Here is landing page 2
      </main>

      <main className='landing-page-3'>
        Here is landing page 3
      </main>

      <footer className='landing-footer'>
        Here is the footer
      </footer>
    </div>
  );
}
