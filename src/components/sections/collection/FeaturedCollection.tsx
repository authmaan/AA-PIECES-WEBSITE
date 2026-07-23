import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { MagneticButton } from "@/components/common/MagneticButton";
import { CollectionCard } from "./CollectionCard";
import { getFeaturedProducts } from "@/lib/data/fetchers";

export async function FeaturedCollection() {
  const products = await getFeaturedProducts();

  return (
    <section className="bg-[var(--color-cream)] py-24 md:py-32">
      <div className="container-boutique">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <SectionHeading
            eyebrow="The Collection"
            title="Pieces Worth Investing In"
            subtitle="Every watch we carry is chosen for one reason: it will still mean something in twenty years."
          />
          <RevealOnScroll variant="fade" delay={0.2}>
            <MagneticButton href="/collections" variant="outline">
              View All Watches
            </MagneticButton>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
          {products.map((product, i) => (
            <RevealOnScroll key={product._id} variant="fade-up" delay={i * 0.08}>
              <CollectionCard product={product} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
