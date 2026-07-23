import { Metadata } from "next";
import { ProductListing } from "@/components/sections/collection/ProductListing";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { getAllProducts } from "@/lib/data/fetchers";

export const metadata: Metadata = {
  title: "The Collection",
  description:
    "Browse the full AA PIECES collection — timepieces chosen for how well they'll wear a decade from now.",
};

export default async function CollectionsPage() {
  const products = await getAllProducts();

  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="container-boutique">
        <RevealOnScroll variant="fade-up" className="max-w-2xl mb-16">
          <p className="eyebrow mb-5">The Collection</p>
          <h1 className="display-hero text-[var(--color-brown-dark)] text-5xl md:text-6xl leading-[1.02]">
            Every Piece, Chosen Deliberately
          </h1>
          <p className="editorial-body text-lg text-[var(--color-brown)] mt-6">
            We don&apos;t carry everything. We carry what earns its place on
            a wrist for years, not seasons.
          </p>
        </RevealOnScroll>

        <ProductListing products={products} />
      </div>
    </div>
  );
}
