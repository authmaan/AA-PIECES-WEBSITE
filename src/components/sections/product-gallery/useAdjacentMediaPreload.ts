"use client";

import { useEffect } from "react";
import { ProductMedia } from "@/types/product";

/**
 * Preloads the previous and next media items (relative to the current
 * index) so navigating to them feels instant once the browser already
 * has them cached — the same shared-logic pattern already established by
 * useSwipeNavigation and useInView in earlier phases, since this exact
 * "preload neighbors of activeIndex" logic is identical in shape between
 * ProductGallery and GalleryLightbox.
 *
 * Uses the plain `new Image()` browser API to warm the HTTP cache — no
 * DOM rendering, no new dependency, just a background fetch. This is a
 * best-effort optimization (like any browser caching strategy), not a
 * guarantee the browser keeps it warm indefinitely.
 *
 * Images only — video preloading is explicitly out of scope this phase.
 * Skips gracefully at the ends of the array (no wraparound preload),
 * and when there's nothing to preload (single-item galleries).
 */
export function useAdjacentMediaPreload(media: ProductMedia[], activeIndex: number) {
  useEffect(() => {
    if (media.length <= 1) return;

    const neighborIndexes = [activeIndex - 1, activeIndex + 1].filter(
      (i) => i >= 0 && i < media.length
    );

    const preloaded: HTMLImageElement[] = [];

    for (const index of neighborIndexes) {
      const item = media[index];
      if (item.type !== "image") continue;

      const img = new window.Image();
      img.src = item.url;
      preloaded.push(img);
    }

    // Nothing to clean up beyond letting these fall out of scope — there's
    // no listener attached, just a fire-and-forget fetch to warm the cache.
    return () => {
      preloaded.length = 0;
    };
  }, [media, activeIndex]);
}
