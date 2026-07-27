"use client";

import { useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedImage } from "@/components/common/AnimatedImage";
import { GalleryThumbnail } from "./GalleryThumbnail";
import { ProductMedia } from "@/types/product";
import { EASE_PREMIUM } from "@/lib/animations/variants";

interface ProductGalleryProps {
  media: ProductMedia[];
  /**
   * Accessible label for the thumbnail strip, e.g. "Meridian Classic media".
   * A plain string rather than a `product` prop — the gallery only ever
   * renders media it's handed; it has no dependency on the Product model.
   */
  ariaLabel: string;
  /**
   * Whether the hero image should be eagerly loaded (Next's `priority`).
   * Defaults to false — a reusable gallery can't assume it's always the
   * page's LCP element. The real Product Detail Page (Step 2) will pass
   * `priority` explicitly, since that instance is.
   */
  priority?: boolean;
}

/**
 * PDP Gallery (Spec v1.0) — built as the permanent, reusable gallery for
 * every future AA Pieces product, not just this one page.
 *
 * - Hero media on top, thumbnail strip beneath — used for both desktop and
 *   mobile. The spec allows beneath or beside on desktop; beneath was
 *   chosen so one layout serves both breakpoints.
 * - Clicking (or Enter/Space-activating) a thumbnail crossfades the hero
 *   (~280ms, simultaneous crossfade, not sequential) — matches "smooth
 *   fade transitions... avoid excessive animation."
 * - Video items render natively (<video controls playsInline poster>) in
 *   the hero slot when selected — no lightbox, per spec.
 * - Keyboard: every thumbnail is independently Tab-reachable (native
 *   <button>), Enter/Space activates the focused one (also native),
 *   Left/Right/Home/End move focus between thumbnails without changing
 *   selection.
 * - A visually-hidden live region announces the current selection so
 *   screen reader users get feedback when it changes.
 * - Not wired into the live Product Detail Page yet — that's Step 2.
 */
export function ProductGallery({ media, ariaLabel, priority = false }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const heroId = useId();
  const active = media[activeIndex];

  function handleThumbnailKeyDown(
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) {
    let nextIndex: number | null = null;

    switch (event.key) {
      case "ArrowRight":
        nextIndex = (index + 1) % media.length;
        break;
      case "ArrowLeft":
        nextIndex = (index - 1 + media.length) % media.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = media.length - 1;
        break;
      default:
        return;
    }

    // Arrow/Home/End move focus only — they don't select. Enter/Space
    // (native button behavior) is what actually changes the active media.
    event.preventDefault();
    thumbnailRefs.current[nextIndex]?.focus();
  }

  if (!active) return null;

  return (
    <div>
      {/* Hero */}
      <div
        id={heroId}
        className="aspect-square bg-[var(--color-cream-dim)] relative overflow-hidden"
      >
        <AnimatePresence>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: EASE_PREMIUM }}
            className="absolute inset-0"
          >
            {active.type === "video" ? (
              <video
                src={active.url}
                poster={active.poster}
                controls
                playsInline
                className="h-full w-full object-cover"
                aria-label={active.alt}
              />
            ) : (
              <AnimatedImage
                src={active.url}
                alt={active.alt}
                containerClassName="h-full w-full"
                priority={priority}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Visually-hidden announcement for screen reader users when selection changes */}
      <p aria-live="polite" className="sr-only">
        Showing {activeIndex + 1} of {media.length}
      </p>

      {/* Thumbnail strip */}
      {media.length > 1 && (
        <div
          className="flex gap-3 mt-4 overflow-x-auto pb-1"
          role="group"
          aria-label={ariaLabel}
        >
          {media.map((item, index) => (
            <GalleryThumbnail
              key={item.url + index}
              ref={(el) => {
                thumbnailRefs.current[index] = el;
              }}
              media={item}
              index={index}
              isActive={index === activeIndex}
              heroId={heroId}
              onSelect={() => setActiveIndex(index)}
              onKeyDown={(event) => handleThumbnailKeyDown(event, index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
