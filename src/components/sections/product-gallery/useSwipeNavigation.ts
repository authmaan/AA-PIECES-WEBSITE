"use client";

import type { PanInfo } from "framer-motion";

const SWIPE_OFFSET_THRESHOLD = 50; // px
const SWIPE_VELOCITY_THRESHOLD = 500; // px/s

interface UseSwipeNavigationOptions {
  onPrevious: () => void;
  onNext: () => void;
  /**
   * Whether the drag gesture should be active at all. False on desktop
   * (coarse-pointer gating happens at the call site) and false while a
   * lightbox image is zoomed — panning a zoomed image is a distinct,
   * out-of-scope feature; swipe-to-navigate is deliberately suppressed
   * rather than fighting for the same gesture.
   */
  enabled: boolean;
}

/**
 * Drag-end threshold logic shared between the inline gallery hero and the
 * fullscreen lightbox stage — not a general carousel abstraction, just the
 * one piece (offset/velocity → navigate-or-snap-back decision) that would
 * otherwise be hand-duplicated identically in both places, with the risk
 * of the two thresholds silently drifting apart later.
 *
 * Deliberately does not animate anything itself. It calls the same
 * onPrevious/onNext functions each caller already uses for click and
 * keyboard navigation — so swipe becomes a third input into the exact
 * same state change, not a parallel system that needs to be kept in
 * sync. The existing crossfade transition (driven by the active index
 * changing) handles the actual visual paging either way.
 *
 * Returns Framer Motion drag props to spread onto a motion.div. When
 * `enabled` is false, returns `{ drag: false }` so callers don't need a
 * separate conditional — the JSX stays the same regardless.
 */
export function useSwipeNavigation({ onPrevious, onNext, enabled }: UseSwipeNavigationOptions) {
  function handleDragEnd(
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) {
    const { offset, velocity } = info;
    if (offset.x > SWIPE_OFFSET_THRESHOLD || velocity.x > SWIPE_VELOCITY_THRESHOLD) {
      onPrevious();
    } else if (offset.x < -SWIPE_OFFSET_THRESHOLD || velocity.x < -SWIPE_VELOCITY_THRESHOLD) {
      onNext();
    }
  }

  if (!enabled) {
    return { drag: false as const };
  }

  return {
    drag: "x" as const,
    dragConstraints: { left: 0, right: 0 },
    dragElastic: 0.2,
    onDragEnd: handleDragEnd,
  };
}
