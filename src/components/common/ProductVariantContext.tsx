"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ProductMedia, ProductVariant } from "@/types/product";

interface ProductVariantContextValue {
  media: ProductMedia[];
  selectedVariant: ProductVariant | null;
  selectVariant: (variant: ProductVariant) => void;
}

const ProductVariantContext = createContext<ProductVariantContextValue | null>(null);

interface ProductVariantProviderProps {
  /** Colour variants, if this product has any. Undefined/empty is the normal case for most sample products today. */
  variants?: ProductVariant[];
  /**
   * The already-resolved fallback (product.gallery ?? product.images…),
   * computed once in page.tsx. This Provider only adds the first tier of
   * the required fallback chain — a selected variant's own media — on
   * top of what's already resolved here.
   */
  defaultMedia: ProductMedia[];
  children: ReactNode;
}

/**
 * Shares the selected colour variant between two components that aren't
 * adjacent in the page — the gallery (left column) and the colour
 * selector (right column, nested inside the details block) — without
 * lifting state into page.tsx, which can't hold state at all (it's an
 * async Server Component).
 *
 * Server-rendered content passes straight through unaffected: only the
 * two leaf client components that call useProductVariant() actually read
 * from this context. Everything else on the page (name, price, story,
 * specs, related products) is untouched by this Provider's existence.
 *
 * Initial selection defaults to the first variant when one exists, so
 * the gallery and the colour selector's default highlighted swatch agree
 * from the very first render — not by coincidence of sample data, but
 * because this is the actual initial state.
 */
export function ProductVariantProvider({
  variants,
  defaultMedia,
  children,
}: ProductVariantProviderProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    variants?.[0] ?? null
  );

  const media = selectedVariant?.media ?? defaultMedia;

  return (
    <ProductVariantContext.Provider
      value={{ media, selectedVariant, selectVariant: setSelectedVariant }}
    >
      {children}
    </ProductVariantContext.Provider>
  );
}

export function useProductVariant() {
  const context = useContext(ProductVariantContext);
  if (!context) {
    throw new Error("useProductVariant must be used within a ProductVariantProvider");
  }
  return context;
}
