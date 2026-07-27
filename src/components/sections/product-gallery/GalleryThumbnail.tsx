"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn, isSvgSrc } from "@/lib/utils";
import { ProductMedia } from "@/types/product";

interface GalleryThumbnailProps {
  media: ProductMedia;
  index: number;
  isActive: boolean;
  /** id of the hero region this thumbnail controls, for aria-controls */
  heroId: string;
  onSelect: () => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
}

/**
 * A single thumbnail in the gallery strip. Deliberately plain <Image>
 * rather than AnimatedImage here — AnimatedImage's hover-zoom is meant for
 * a large display image, not a small selector button, and would read as
 * a distracting flicker at that size. The hero image is where
 * AnimatedImage gets reused, per the PDP spec's reuse list.
 *
 * forwardRef exposes the underlying <button> DOM node so the parent
 * ProductGallery can move focus programmatically for arrow-key navigation.
 *
 * aria-current (not aria-pressed): this represents "the currently
 * displayed item in a set" — closer to a pagination "current page"
 * pattern than a toggle button's own on/off state. aria-controls links
 * each thumbnail to the hero region it updates.
 *
 * Not using role="tab"/aria-selected either: the full ARIA tablist pattern
 * expects a roving tabindex (only the selected tab in the Tab order),
 * which would conflict with every thumbnail staying independently
 * Tab-reachable — a deliberate choice, not an oversight.
 */
export const GalleryThumbnail = forwardRef<HTMLButtonElement, GalleryThumbnailProps>(
  function GalleryThumbnail({ media, index, isActive, heroId, onSelect, onKeyDown }, ref) {
    const thumbSrc = media.type === "video" ? media.poster : media.url;
    const label =
      media.type === "video"
        ? `Play video ${index + 1}`
        : `View image ${index + 1}`;

    return (
      <button
        ref={ref}
        type="button"
        onClick={onSelect}
        onKeyDown={onKeyDown}
        aria-label={label}
        aria-current={isActive ? "true" : undefined}
        aria-controls={heroId}
        className={cn(
          "relative flex-shrink-0 overflow-hidden transition-colors duration-300",
          // Fluid sizing: scales continuously with viewport width instead of
          // jumping between fixed breakpoint values, staying square and
          // landing between 64px and 96px across device sizes.
          "w-[clamp(4rem,11vw,6rem)] h-[clamp(4rem,11vw,6rem)]",
          "border",
          isActive
            ? "border-[var(--color-gold)]"
            : "border-[var(--color-border-subtle)] hover:border-[var(--color-brown)]"
        )}
      >
        <Image
          src={thumbSrc}
          alt={media.alt}
          fill
          unoptimized={isSvgSrc(thumbSrc)}
          sizes="96px"
          className="object-cover"
        />
        {media.type === "video" && (
          <span className="absolute inset-0 flex items-center justify-center bg-black/20">
            <Play className="w-4 h-4 text-white fill-white" strokeWidth={0} />
          </span>
        )}
        {/* Subtle overlay so the active state reads clearly even at a glance */}
        {!isActive && (
          <span className="absolute inset-0 bg-[var(--color-cream)]/10" />
        )}
      </button>
    );
  }
);
