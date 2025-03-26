import { useState, useEffect } from "react";

const useViewportHeight = () => {
  const [viewportHeight, setViewportHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("resize", updateViewportHeight);
    return () => {
      window.removeEventListener("resize", updateViewportHeight);
    };
  }, []);

  return viewportHeight;
};

export default useViewportHeight;
