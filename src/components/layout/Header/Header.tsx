"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { NAV_LINKS } from "@/lib/constants";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";
import { EASE_PREMIUM } from "@/lib/animations/variants";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrolled } = useScrollDirection(24);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE_PREMIUM }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[var(--color-cream)]/95 backdrop-blur-sm shadow-[0_1px_0_0_var(--color-border-subtle)]"
            : "bg-transparent"
        )}
      >
        <div className="container-boutique flex items-center justify-between py-5">
          <Logo variant="monogram" tone="darkbrown" priority className="h-6" />

          <DesktopNav links={NAV_LINKS} />

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="lg:hidden text-[var(--color-brown-dark)]"
          >
            <Menu className="w-6 h-6" strokeWidth={1.75} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
