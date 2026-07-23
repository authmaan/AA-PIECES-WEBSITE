"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { X, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE, SOCIAL_LINKS } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";
import { Logo } from "@/components/common/Logo";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { EASE_PREMIUM, staggerContainer, fadeUp } from "@/lib/animations/variants";

export function MobileNav({ onClose }: { onClose: () => void }) {
  useLockBodyScroll(true);

  const whatsappHref = buildWhatsAppLink(
    SITE.whatsappNumber,
    "Hi AA PIECES, I'd like to know more about your collection."
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: EASE_PREMIUM }}
      className="fixed inset-0 z-[60] bg-[var(--color-cream)] lg:hidden flex flex-col"
    >
      <div className="container-boutique flex items-center justify-between py-5">
        <Logo variant="horizontal" tone="darkbrown" className="h-9" />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="text-[var(--color-brown-dark)]"
        >
          <X className="w-6 h-6" strokeWidth={1.75} />
        </button>
      </div>

      <motion.nav
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="container-boutique flex-1 flex flex-col justify-center gap-6"
      >
        {NAV_LINKS.map((link) => (
          <motion.div key={link.href} variants={fadeUp}>
            <Link
              href={link.href}
              onClick={onClose}
              className="display-title text-4xl text-[var(--color-brown-dark)]"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="container-boutique pb-10 flex flex-col gap-6"
      >
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="label-nav inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#3a7d44] text-[var(--color-cream)]"
        >
          <MessageCircle className="w-4 h-4" strokeWidth={2} />
          Order via WhatsApp
        </a>
        <div className="flex gap-6 justify-center">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="label-nav text-[var(--color-brown)]"
            >
              {s.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
