"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MagneticButton } from "@/components/common/MagneticButton";
import { ArrowDown } from "lucide-react";
import { SITE } from "@/lib/constants";
import { EASE_PREMIUM } from "@/lib/animations/variants";

export function HomeHero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-[var(--color-black)]">
      {/* Ambient background watch mark, oversized and faint — signature element */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 2.2, ease: EASE_PREMIUM }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <Image
          src="/brand/monogram/monogram-offwhite.png"
          alt=""
          width={900}
          height={900}
          priority
          className="w-[130vw] max-w-none md:w-[70vw] object-contain"
        />
      </motion.div>

      <div className="container-boutique relative z-10 pb-20 pt-40 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_PREMIUM, delay: 0.3 }}
          className="eyebrow text-[var(--color-gold)] mb-6"
        >
          {SITE.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE_PREMIUM, delay: 0.45 }}
          className="display-hero text-[var(--color-cream)] text-[13vw] leading-[0.95] sm:text-7xl md:text-8xl lg:text-[7.5rem] max-w-4xl"
        >
          Make Every
          <br />
          Second Count.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE_PREMIUM, delay: 0.75 }}
          className="editorial-body text-[var(--color-cream)]/75 text-lg md:text-xl max-w-md mt-8"
        >
          A boutique built around one belief — time is the only thing money
          cannot buy, yet the only thing worth investing in.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE_PREMIUM, delay: 0.95 }}
          className="mt-10"
        >
          <MagneticButton href="/collections" variant="primary" className="bg-[var(--color-gold)] text-[var(--color-black)] hover:bg-[var(--color-cream)]">
            Enter the Collection
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.4 },
          y: { duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
        }}
        className="absolute bottom-8 right-8 md:right-14 text-[var(--color-cream)]/60"
        aria-hidden="true"
      >
        <ArrowDown className="w-5 h-5" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
