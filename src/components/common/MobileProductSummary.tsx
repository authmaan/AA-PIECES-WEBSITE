"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { useProductVariant } from "./ProductVariantContext";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/types/product";

interface MobileProductSummaryProps {
  product: Product;
}

/**
 * UX Polish Sprint, Priority 1 — a compact, mobile-only summary rendered
 * directly beneath the gallery, so a shopper knows what they're looking
 * at (name, price, selected colour) without first scrolling past the
 * entire gallery and thumbnail strip. Desktop is untouched (`lg:hidden`)
 * — on desktop the gallery already sits beside the full Product
 * Information panel in the same viewport, so this has nothing to add
 * there.
 *
 * Reads the selected variant from ProductVariantContext — the same
 * source ProductColorSelector and the gallery itself already use —
 * rather than tracking its own. For products with no variants,
 * selectedVariant is simply null and the colour line is omitted.
 *
 * The "View Details" link is a plain anchor to #product-info. No new
 * scroll logic is needed: smooth scrolling is already a global CSS
 * behavior (html { scroll-behavior: smooth } in globals.css), so a
 * plain hash link is sufficient on its own.
 */
export function MobileProductSummary({ product }: MobileProductSummaryProps) {
  const { selectedVariant } = useProductVariant();

  return (
    <div className="lg:hidden flex items-center justify-between gap-4 py-5 border-b border-[var(--color-border-subtle)]">
      <div className="min-w-0">
        <h2 className="display-title text-lg text-[var(--color-brown-dark)] truncate">
          {product.name}
        </h2>
        <p className="label-nav text-sm text-[var(--color-brown)] mt-1">
          {formatPrice(product.price, product.currency)}
          {selectedVariant && (
            <span className="text-[var(--color-brown)]/70"> · {selectedVariant.name}</span>
          )}
        </p>
      </div>
      <Link
        href="#product-info"
        className="label-nav text-xs inline-flex items-center gap-1.5 text-[var(--color-brown-dark)] whitespace-nowrap flex-shrink-0"
      >
        View Details
        <ArrowDown className="w-3.5 h-3.5" strokeWidth={1.75} />
      </Link>
    </div>
  );
}
