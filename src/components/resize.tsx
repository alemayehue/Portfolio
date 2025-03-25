import React, { useState, useEffect } from "react";

const ViewportHeightComponent = () => {
  const [viewportHeight, setViewportHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight); // Update the height
    };

    window.addEventListener("resize", updateViewportHeight);

    return () => {
      window.removeEventListener("resize", updateViewportHeight);
    };
  }, []);

  return {viewportHeight};
};

export default ViewportHeightComponent;
