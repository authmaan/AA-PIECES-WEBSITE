"use client";

import { ProductGallery } from "./ProductGallery";
import { useProductVariant } from "@/components/common/ProductVariantContext";

interface ProductVariantGalleryProps {
  ariaLabel: string;
  priority?: boolean;
}

/**
 * Thin variant-aware wrapper around the unaware, reusable ProductGallery —
 * the same pattern ProductColorSelector already establishes for
 * ColorSelector. Reads the currently-resolved media from
 * ProductVariantContext and passes it straight through as a plain prop;
 * ProductGallery itself has zero knowledge that variants — or products —
 * exist.
 *
 * `key={...}` forces a full remount of ProductGallery whenever the
 * selected variant changes, which resets its internal `activeIndex` back
 * to 0 for free, without touching ProductGallery's source. Without this,
 * switching to a variant with fewer media items than the previously
 * viewed index would leave ProductGallery trying to render
 * media[activeIndex] as undefined.
 */
export function ProductVariantGallery({ ariaLabel, priority }: ProductVariantGalleryProps) {
  const { media, selectedVariant } = useProductVariant();

  return (
    <ProductGallery
      key={selectedVariant?.name ?? "default"}
      media={media}
      ariaLabel={ariaLabel}
      priority={priority}
    />
  );
}
