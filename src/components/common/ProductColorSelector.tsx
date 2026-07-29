"use client";

import { ColorSelector } from "./ColorSelector";
import { useProductVariant } from "./ProductVariantContext";
import { ProductVariant } from "@/types/product";

interface ProductColorSelectorProps {
  colors: ProductVariant[];
}

/**
 * Wires the presentation-only ColorSelector to the shared
 * ProductVariantContext instead of holding its own local state — this is
 * what "exposes the selected variant to the product page" actually means
 * given page.tsx can't hold state itself. ColorSelector's own props
 * (colors, selected, onSelect) and everything it renders are unchanged;
 * only where `selected` physically lives changed, from a local useState
 * to this shared context.
 *
 * `colors` is typed as ProductVariant[] now (previously a bare
 * {name, swatch} shape) since selecting an option needs to resolve to a
 * real variant object to push into context — but ProductVariant already
 * structurally satisfies everything ColorSelector's own prop type
 * expects, so ColorSelector itself required no changes at all.
 */
export function ProductColorSelector({ colors }: ProductColorSelectorProps) {
  const { selectedVariant, selectVariant } = useProductVariant();
  const selected = selectedVariant?.name ?? colors[0]?.name ?? "";

  function handleSelect(name: string) {
    const variant = colors.find((c) => c.name === name);
    if (variant) selectVariant(variant);
  }

  return (
    <ColorSelector colors={colors} selected={selected} onSelect={handleSelect} />
  );
}
