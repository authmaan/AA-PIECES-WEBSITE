"use client";

import { useSyncExternalStore } from "react";

/**
 * SSR-safe media query hook using useSyncExternalStore, which avoids the
 * cascading-render issue of calling setState synchronously inside an effect.
 */
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false // server snapshot: assume false until hydrated
  );
}
