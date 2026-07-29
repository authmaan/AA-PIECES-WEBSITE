"use client";

import { useState } from "react";
import { ColorSelector } from "./ColorSelector";

interface ColorOption {
  name: string;
  swatch: string;
}

interface ProductColorSelectorProps {
  colors: ColorOption[];
}

/**
 * Thin state-holding wrapper around the controlled ColorSelector. Exists
 * only because the Product Detail Page is an async Server Component and
 * can't hold `useState` itself — this is the minimal client boundary
 * needed to give ColorSelector a real `selected`/`onSelect` pair without
 * converting the whole page to a client component.
 *
 * Selection is still purely local/visual — nothing here wires into the
 * gallery or any other product data yet (that's a later step). Initial
 * selection defaults to the first colour, matching ColorSelector's prior
 * internal-state behavior exactly, so this introduces no visible change.
 */
export function ProductColorSelector({ colors }: ProductColorSelectorProps) {
  const [selected, setSelected] = useState(colors[0]?.name ?? "");

  return (
    <ColorSelector colors={colors} selected={selected} onSelect={setSelected} />
  );
}
