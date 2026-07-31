"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether a referenced element is currently intersecting the
 * viewport, via the native IntersectionObserver API — not a library,
 * just a small wrapper around a browser API that already does exactly
 * this. Returns the ref to attach and the current boolean.
 *
 * Deliberately generic (no product/gallery knowledge) — this is a plain
 * visibility utility, reusable anywhere a "is this element on screen"
 * signal is needed.
 */
export function useInView<T extends HTMLElement>(rootMargin = "0px") {
  const ref = useRef<T | null>(null);
  // Defaults to true (assumed visible) rather than false — the observed
  // section IS visible on initial load/hydration before the observer's
  // first callback fires, so starting false would flash the sticky panel
  // on for a frame on every page load.
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, isInView };
}
