"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsAppOrderButton } from "@/components/common/WhatsAppOrderButton";
import { useInView } from "@/hooks/useInView";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/types/product";
import { EASE_PREMIUM } from "@/lib/animations/variants";

interface StickyPurchasePanelProps {
  product: Product;
  /** The full Product Information block — passed through unchanged, wrapped only in a non-visual ref div */
  children: ReactNode;
}

/**
 * Mobile-only sticky purchase bar (Phase 3C).
 *
 * Wraps the existing Product Information block (children) in a plain,
 * unstyled ref div — purely instrumentation for IntersectionObserver via
 * useInView, no visual or layout change to that content at all. The bar
 * appears once the *entire* block (through the trust badges) has
 * scrolled out of view, and hides again automatically if the user
 * scrolls back up into it — one observer drives both directions, no
 * separate "scrolled to top" logic needed.
 *
 * Hidden entirely on desktop via `lg:hidden` — plain responsive CSS,
 * no JS device detection needed here (unlike Phase 3B's swipe gating,
 * there's no gesture conflict to avoid, just visibility to control).
 *
 * Reuses WhatsAppOrderButton directly rather than duplicating the
 * WhatsApp link logic — only a compact className override for the bar's
 * constrained height.
 */
export function StickyPurchasePanel({ product, children }: StickyPurchasePanelProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const visible = !isInView;

  return (
    <>
      <div ref={ref}>{children}</div>

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_PREMIUM }}
            className="fixed bottom-0 left-0 right-0 z-[55] lg:hidden bg-[var(--color-cream)]/95 backdrop-blur-sm border-t border-[var(--color-border-subtle)]"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          >
            <div className="flex items-center gap-4 px-4 py-3">
              <div className="min-w-0 flex-1">
                <p className="label-nav text-xs text-[var(--color-brown-dark)] truncate">
                  {product.name}
                </p>
                <p className="label-nav text-sm text-[var(--color-brown)]">
                  {formatPrice(product.price, product.currency)}
                </p>
              </div>
              <WhatsAppOrderButton
                product={product}
                className="px-5 py-3 flex-shrink-0"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
