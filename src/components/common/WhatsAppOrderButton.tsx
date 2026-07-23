"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { buildWhatsAppLink, formatPrice, cn } from "@/lib/utils";
import { Product } from "@/types/product";
import { buttonHover } from "@/lib/animations/variants";

interface WhatsAppOrderButtonProps {
  product: Product;
  className?: string;
  fullWidth?: boolean;
}

/**
 * The primary "purchase" action across the site. AA PIECES doesn't run a
 * cart/checkout — every order routes to a WhatsApp conversation, pre-filled
 * with the product name, reference, and price so the customer never has to
 * type it themselves. This matches how the brand already operates (see
 * business card / print collateral, which lead with WhatsApp as the
 * primary contact channel).
 */
export function WhatsAppOrderButton({
  product,
  className,
  fullWidth,
}: WhatsAppOrderButtonProps) {
  const message = `Hi AA PIECES, I'm interested in the ${product.name} (Ref. ${product.reference}) — ${formatPrice(product.price, product.currency)}. Is it available?`;
  const href = buildWhatsAppLink(SITE.whatsappNumber, message);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={buttonHover}
      className={cn(
        "label-nav inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#3a7d44] text-[var(--color-cream)] transition-colors duration-500 hover:bg-[#2f6838]",
        fullWidth && "w-full",
        className
      )}
    >
      <MessageCircle className="w-4 h-4" strokeWidth={2} />
      Order via WhatsApp
    </motion.a>
  );
}

/** Compact icon-only variant, used on product cards */
export function WhatsAppOrderIconButton({ product }: { product: Product }) {
  const message = `Hi AA PIECES, I'm interested in the ${product.name} (Ref. ${product.reference}) — ${formatPrice(product.price, product.currency)}. Is it available?`;
  const href = buildWhatsAppLink(SITE.whatsappNumber, message);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Order ${product.name} via WhatsApp`}
      onClick={(e) => e.stopPropagation()}
      className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#3a7d44] text-[var(--color-cream)] hover:bg-[#2f6838] transition-colors duration-500"
    >
      <MessageCircle className="w-4.5 h-4.5" strokeWidth={2} />
    </a>
  );
}
