"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { buttonHover } from "@/lib/animations/variants";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit";
  icon?: ReactNode;
}

const variantStyles = {
  primary:
    "bg-[var(--color-brown-dark)] text-[var(--color-cream)] hover:bg-[var(--color-brown)]",
  outline:
    "border border-[var(--color-brown-dark)] text-[var(--color-brown-dark)] hover:bg-[var(--color-brown-dark)] hover:text-[var(--color-cream)]",
  ghost: "text-[var(--color-brown-dark)] hover:text-[var(--color-gold)]",
};

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  icon,
}: MagneticButtonProps) {
  const classes = cn(
    "label-nav inline-flex items-center justify-center gap-2 px-8 py-4 transition-colors duration-500",
    variantStyles[variant],
    className
  );

  const content = (
    <motion.span
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={buttonHover}
      className={classes}
    >
      {children}
      {icon}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block" onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}
