"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
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
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className={cn("relative overflow-hidden", containerClassName)}
    >
      <motion.div variants={imageZoom} className="h-full w-full">
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
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
            className={cn("object-cover", className)}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
