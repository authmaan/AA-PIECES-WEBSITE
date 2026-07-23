"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { CollectionCard } from "./CollectionCard";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { Product, ProductCategory } from "@/types/product";
import { cn } from "@/lib/utils";

type SortOption = "featured" | "price-asc" | "price-desc" | "newest";

const CATEGORY_LABELS: Record<ProductCategory | "all", string> = {
  all: "All",
  mens: "Men's",
  womens: "Women's",
  unisex: "Unisex",
};

const SORT_LABELS: Record<SortOption, string> = {
  featured: "Featured",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  newest: "Newest Arrivals",
};

export function ProductListing({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProductCategory | "all">("all");
  const [sort, setSort] = useState<SortOption>("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.reference.toLowerCase().includes(q)
      );
    }

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => Number(b.isNewArrival) - Number(a.isNewArrival));
        break;
      default:
        result.sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured));
    }

    return result;
  }, [products, query, category, sort]);

  return (
    <div>
      {/* Search + filter bar */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-brown)]" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or reference"
            aria-label="Search watches"
            className="w-full bg-transparent border-b border-[var(--color-border-subtle)] pl-6 py-2.5 editorial-body text-lg text-[var(--color-brown-dark)] placeholder:text-[var(--color-brown)]/50 focus:border-[var(--color-gold)] outline-none transition-colors"
          />
        </div>

        <button
          type="button"
          onClick={() => setFiltersOpen((v) => !v)}
          className="label-nav inline-flex items-center gap-2 text-[var(--color-brown-dark)] md:hidden"
        >
          <SlidersHorizontal className="w-4 h-4" strokeWidth={1.75} />
          Filter &amp; Sort
        </button>

        <div className={cn("flex-col md:flex-row md:flex gap-4 md:ml-auto", filtersOpen ? "flex" : "hidden")}>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as ProductCategory | "all")}
            aria-label="Filter by category"
            className="label-nav bg-transparent border border-[var(--color-border-subtle)] px-4 py-2.5 text-[var(--color-brown-dark)] outline-none focus:border-[var(--color-gold)]"
          >
            {(Object.keys(CATEGORY_LABELS) as (ProductCategory | "all")[]).map((key) => (
              <option key={key} value={key}>
                {CATEGORY_LABELS[key]}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            aria-label="Sort products"
            className="label-nav bg-transparent border border-[var(--color-border-subtle)] px-4 py-2.5 text-[var(--color-brown-dark)] outline-none focus:border-[var(--color-gold)]"
          >
            {(Object.keys(SORT_LABELS) as SortOption[]).map((key) => (
              <option key={key} value={key}>
                {SORT_LABELS[key]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Active query chip */}
      {query && (
        <div className="mb-8 flex items-center gap-2">
          <span className="label-nav text-xs text-[var(--color-brown)]">
            {filtered.length} result{filtered.length !== 1 && "s"} for &ldquo;{query}&rdquo;
          </span>
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="text-[var(--color-brown)] hover:text-[var(--color-gold)]"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filtered.map((product, i) => (
            <RevealOnScroll key={product._id} variant="fade-up" delay={(i % 3) * 0.08}>
              <CollectionCard product={product} />
            </RevealOnScroll>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          <p className="display-title text-2xl text-[var(--color-brown-dark)] mb-2">
            No pieces match your search
          </p>
          <p className="editorial-body text-[var(--color-brown)]">
            Try a different name, reference, or category.
          </p>
        </div>
      )}
    </div>
  );
}
