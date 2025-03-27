import { useState, useEffect } from "react";

const useViewportWidth = () => {
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateViewportWidth);
    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

  return viewportWidth;
};

export default useViewportWidth;
