"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn, isSvgSrc } from "@/lib/utils";
import { imageZoom } from "@/lib/animations/variants";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

/**
 * Phase 3D: loading-state handling lives entirely here, not in the
 * gallery components that use this component. A neutral placeholder
 * (the same cream-dim tone already used as the gallery's own background)
 * covers the image area and fades out once the real image's `onLoad`
 * fires — a deliberate blur-up *pattern*, not true per-image blurhash.
 * True content-derived blur placeholders need either static image
 * imports (a much bigger architectural change than this phase should
 * make) or real photography to derive them from (explicitly out of
 * scope this phase). Once real assets exist, this is the natural place
 * to upgrade to a real blurDataURL.
 *
 * `isLoaded` resets to false automatically whenever this component
 * remounts — every current usage either mounts once with a fixed `src`
 * (product cards, article cards) or is remounted via a parent `key`
 * (the gallery's `key={activeIndex}` pattern), so no explicit
 * reset-on-src-change effect is needed for anything that exists today.
 * Worth revisiting if a future usage ever changes `src` on an
 * already-mounted instance without a key change.
 */
export function AnimatedImage({
  src,
  alt,
  className,
  containerClassName,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  fill = true,
  width,
  height,
}: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Next.js blocks the optimizer on local SVGs by default (a real security
  // guard, not a bug) — our sample product art is SVG, so it must opt out
  // of optimization. Real photography (jpg/webp) will optimize normally.
  const unoptimized = isSvgSrc(src);

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className={cn("relative overflow-hidden", containerClassName)}
    >
      {/*
        `relative` here is required, not decorative: next/image's `fill`
        mode checks the computed position of the image's DIRECT parent
        (see next/dist/client/image-component.js) and warns in dev if it
        isn't relative/absolute/fixed. The outer wrapper above being
        relative isn't enough — this inner motion.div is the actual
        parent of the <img>, so it needs the position itself.
      */}
      <motion.div variants={imageZoom} className="relative h-full w-full">
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            unoptimized={unoptimized}
            sizes={sizes}
            onLoad={() => setIsLoaded(true)}
            className={cn("object-cover", className)}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            unoptimized={unoptimized}
            onLoad={() => setIsLoaded(true)}
            className={cn("object-cover", className)}
          />
        )}

        {/*
          Placeholder layer — deliberately AFTER the <Image> in DOM order
          so it stacks on top by default (no z-index needed), fully
          covering the image while it loads. Fades to opacity 0 on load,
          revealing the now-ready image underneath. pointer-events-none
          so it never blocks the hover-zoom this component already has,
          or click handlers a parent (e.g. the lightbox) attaches.
        */}
        <motion.div
          aria-hidden="true"
          initial={false}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-[var(--color-cream-dim)] pointer-events-none"
        />
      </motion.div>
    </motion.div>
  );
}
