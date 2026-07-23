"use client";

import { useEffect, useState } from "react";

/** Returns "up" | "down" and whether the page has scrolled past a threshold */
export function useScrollDirection(threshold = 10) {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    function onScroll() {
      const currentY = window.scrollY;
      setScrolled(currentY > threshold);
      if (Math.abs(currentY - lastY) > 4) {
        setDirection(currentY > lastY ? "down" : "up");
        lastY = currentY;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { direction, scrolled };
}
