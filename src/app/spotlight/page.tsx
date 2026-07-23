import { Metadata } from "next";
import Image from "next/image";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { WhatsAppOrderButton } from "@/components/common/WhatsAppOrderButton";
import { getFeaturedProducts } from "@/lib/data/fetchers";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Spotlight",
  description: "This season's spotlighted timepiece from AA PIECES.",
};

export default async function SpotlightPage() {
  const products = await getFeaturedProducts();
  const spotlight = products[1] ?? products[0];

  if (!spotlight) {
    return (
      <div className="pt-36 pb-24 container-boutique">
        <p className="editorial-body text-[var(--color-brown)]">
          No spotlight piece is currently set.
        </p>
      </div>
    );
  }

  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="container-boutique">
        <RevealOnScroll variant="fade-up" className="max-w-2xl mb-16">
          <p className="eyebrow mb-5">Spotlight</p>
          <h1 className="display-hero text-[var(--color-brown-dark)] text-5xl md:text-6xl leading-[1.02]">
            {spotlight.name}
          </h1>
          <p className="editorial-quote text-2xl text-[var(--color-brown)] mt-6">
            {spotlight.tagline}
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll variant="scale">
            <div className="relative aspect-square bg-[var(--color-cream-dim)]">
              <Image
                src={spotlight.images[0].url}
                alt={spotlight.images[0].alt}
                fill
                priority
                className="object-cover"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll variant="fade-up" delay={0.1}>
            <p className="editorial-body text-lg text-[var(--color-brown-dark)]/85 leading-relaxed mb-8">
              {spotlight.description}
            </p>
            <p className="label-nav text-2xl text-[var(--color-brown-dark)] mb-8">
              {formatPrice(spotlight.price, spotlight.currency)}
            </p>
            <WhatsAppOrderButton product={spotlight} />
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
