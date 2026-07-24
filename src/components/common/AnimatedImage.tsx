"use client";

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
            className={cn("object-cover", className)}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
