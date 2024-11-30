import { useState, useEffect } from "react";

export function useWindowSize() {
  const isSSR = typeof window === "undefined";

  const [windowSize, setWindowSize] = useState({
    width: isSSR ? 0 : window.innerWidth,
    height: isSSR ? 0 : window.innerHeight,
  });

  useEffect(() => {
    if (isSSR) return;

    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 100); // Debounce interval
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Update size on mount
    return () => window.removeEventListener("resize", handleResize);
  }, [isSSR]);

  return windowSize;
}
