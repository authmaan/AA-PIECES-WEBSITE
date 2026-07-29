"use client";

import { cn } from "@/lib/utils";

interface ColorOption {
  name: string;
  swatch: string;
}

interface ColorSelectorProps {
  colors: ColorOption[];
  /** Name of the currently selected colour, owned by the parent */
  selected: string;
  /** Called with a colour's name when the user selects it (click, Enter/Space, or arrow-key navigation) */
  onSelect: (name: string) => void;
}

/**
 * PDP Colour Selector (Spec v1.0) — UI only, as scoped for this step.
 * Selecting a swatch calls `onSelect`; this component does not own or
 * track which colour is selected itself, and by itself still does not
 * change the gallery, price, or any other product data — the parent
 * decides what `onSelect` actually does with that information. That
 * wiring (colour-specific media, per the spec's gallery-behaviour rules)
 * is deliberately out of scope until a later step.
 *
 * Controlled rather than self-contained: `selected` and `onSelect` are
 * owned by the parent. Kept as its own dedicated, presentation-focused
 * client component rather than inlined into the page — the Product model
 * has no colour/variant field yet, but when the page wires real variant
 * data through, only its props change; this file's internals don't need
 * to.
 *
 * Uses role="radiogroup" / role="radio" / aria-checked rather than a set
 * of independent toggle buttons: colour selection is a true
 * mutually-exclusive single choice, which is exactly what the ARIA radio
 * pattern models — arrow keys move selection between options, matching
 * native <input type="radio"> behavior.
 */
export function ColorSelector({ colors, selected, onSelect }: ColorSelectorProps) {
  if (colors.length === 0) return null;

  function selectByOffset(currentIndex: number, offset: number) {
    const nextIndex = (currentIndex + offset + colors.length) % colors.length;
    onSelect(colors[nextIndex].name);
  }

  function handleKeyDown(event: React.KeyboardEvent, index: number) {
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        selectByOffset(index, 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        selectByOffset(index, -1);
        break;
    }
  }

  return (
    <div>
      <p className="label-nav text-xs text-[var(--color-brown)] mb-3">
        Colour{selected ? ` — ${selected}` : ""}
      </p>
      <div role="radiogroup" aria-label="Colour" className="flex gap-3">
        {colors.map((color, index) => {
          const isSelected = selected === color.name;
          return (
            <button
              key={color.name}
              type="button"
              role="radio"
              aria-checked={isSelected}
              aria-label={color.name}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => onSelect(color.name)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={cn(
                "w-9 h-9 rounded-full flex items-center justify-center border transition-colors duration-300",
                isSelected
                  ? "border-[var(--color-gold)]"
                  : "border-transparent hover:border-[var(--color-border-subtle)]"
              )}
            >
              {/*
                border-black/25 (up from /10): the previous border was too
                faint against light placeholder swatches like silver —
                the swatch shape itself needs to stay legible regardless
                of how light or dark a given colour is, including real
                variant colours later (pale gold, cream straps, etc).
              */}
              <span
                className="block w-6 h-6 rounded-full border border-black/25"
                style={{ backgroundColor: color.swatch }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
