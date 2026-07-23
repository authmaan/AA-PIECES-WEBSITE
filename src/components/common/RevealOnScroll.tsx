"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp, fadeIn, scaleIn, slideFromLeft } from "@/lib/animations/variants";

type RevealVariant = "fade-up" | "fade" | "scale" | "slide-left";

const variantMap = {
  "fade-up": fadeUp,
  fade: fadeIn,
  scale: scaleIn,
  "slide-left": slideFromLeft,
};

interface RevealOnScrollProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  once?: boolean;
  id?: string;
}

export function RevealOnScroll({
  children,
  variant = "fade-up",
  delay = 0,
  className,
  once = true,
  id,
}: RevealOnScrollProps) {
  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variantMap[variant]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
