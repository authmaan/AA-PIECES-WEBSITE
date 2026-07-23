import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { AnimatedImage } from "@/components/common/AnimatedImage";
import { MagneticButton } from "@/components/common/MagneticButton";
import { getFeaturedProducts } from "@/lib/data/fetchers";
import { formatPrice } from "@/lib/utils";

export async function SpotlightPreview() {
  const products = await getFeaturedProducts();
  const spotlight = products[1] ?? products[0];
  if (!spotlight) return null;

  return (
    <section className="bg-[var(--color-black)] py-24 md:py-32 overflow-hidden">
      <div className="container-boutique grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        <RevealOnScroll variant="scale">
          <AnimatedImage
            src={spotlight.images[0].url}
            alt={spotlight.images[0].alt}
            containerClassName="aspect-[4/5] bg-[var(--color-brown-dark)]/20"
          />
        </RevealOnScroll>

        <RevealOnScroll variant="slide-left" delay={0.15}>
          <p className="eyebrow text-[var(--color-gold)] mb-6">Spotlight</p>
          <h2 className="display-title text-[var(--color-cream)] text-4xl md:text-6xl leading-tight mb-6">
            {spotlight.name}
          </h2>
          <p className="editorial-body text-[var(--color-cream)]/75 text-lg md:text-xl mb-8 max-w-lg">
            {spotlight.description}
          </p>
          <p className="label-nav text-[var(--color-gold)] text-lg mb-10">
            {formatPrice(spotlight.price, spotlight.currency)}
          </p>
          <MagneticButton
            href={`/product/${spotlight.slug}`}
            variant="outline"
            className="border-[var(--color-cream)]/40 text-[var(--color-cream)] hover:bg-[var(--color-cream)] hover:text-[var(--color-black)]"
          >
            Discover the Story
          </MagneticButton>
        </RevealOnScroll>
      </div>
    </section>
  );
}
