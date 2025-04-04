"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// Custom Hooks & Components
import Loader from "../components/loading";
import Dropdown from "@/components/dropdown";
import ScrollTracker from "../components/scroll";
import useViewportHeight from "../components/viewportHeight";
import useViewportWidth from "@/components/viewportWidth";


// Landing Page
export default function LandingPage() {
  const [open, setOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
  const viewportHeight = useViewportHeight();
  const viewportWidth = useViewportWidth();

  const sections = {
    first: 0,
    second: 0.96 * viewportHeight,
    third: 1.96 * viewportHeight,
    fourth: 2.96 * viewportHeight,
    fifth: 4 * viewportHeight,
  } as const;

  const scrollToSection = useCallback((section: keyof typeof sections) => {
    const position = sections[section];
    if (position !== undefined) {
      window.scrollTo({ top: position, behavior: "smooth" });
    }
  }, [sections]);

  return (
    <div className="page">
      {/* Scroll Tracking */}
      <ScrollTracker onScrollChange={setScrollDirection} />

      {/* Header */}
      <header className="landing-header galka">
        <button className="header-logo" onClick={() => scrollToSection("first")}>
          elias
        </button>
        <Dropdown />
      </header>

      {/* Sections */}
      <main className="landing-page-1">Here is landing page 1</main>
      <main className="landing-page-2">Here is landing page 2</main>
      <main className="landing-page-3">Here is landing page 3</main>

      {/* Footer */}
      <footer className="landing-footer">Here is the footer</footer>
    </div>
  );
}
