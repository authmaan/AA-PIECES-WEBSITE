import { Camera } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { AnimatedImage } from "@/components/common/AnimatedImage";
import { SITE } from "@/lib/constants";
import { PRODUCTS } from "@/lib/data/products";

export function InstagramPreview() {
  const tiles = PRODUCTS.slice(0, 6);

  return (
    <section className="bg-[var(--color-cream)] py-24 md:py-32">
      <div className="container-boutique">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Follow Along"
            title="AA Pieces in the Wild"
          />
          <RevealOnScroll variant="fade">
            <a
              href={`https://instagram.com/${SITE.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="label-nav inline-flex items-center gap-2 text-[var(--color-brown-dark)] hover:text-[var(--color-gold)] transition-colors"
            >
              <Camera className="w-4 h-4" strokeWidth={1.75} />
              @{SITE.instagram}
            </a>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {tiles.map((product, i) => (
            <RevealOnScroll key={product._id} variant="scale" delay={i * 0.05}>
              <a
                href={`https://instagram.com/${SITE.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${product.name} on Instagram`}
              >
                <AnimatedImage
                  src={product.images[0].url}
                  alt={product.images[0].alt}
                  containerClassName="aspect-square bg-[var(--color-cream-dim)]"
                />
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
