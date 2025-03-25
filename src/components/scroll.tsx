// Function to scroll direction based on y-level difference
import { useState, useEffect } from "react";

interface ScrollTrackerProps {
  onScrollChange: (direction: "up" | "down" | null) => void;
}

export default function ScrollTracker({ onScrollChange }: ScrollTrackerProps) {
  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      const direction = event.deltaY > 0 ? "down" : "up";
      onScrollChange(direction);
    };
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [onScrollChange]);

  return null;
}

