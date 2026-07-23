import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { Divider } from "@/components/common/Divider";

const VALUES = ["Luxury", "Authenticity", "Elegance", "Simplicity", "Trust"];

export function BrandPhilosophy() {
  return (
    <section className="bg-[var(--color-cream)] py-24 md:py-36">
      <div className="container-boutique">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          <RevealOnScroll variant="fade-up" className="lg:col-span-8">
            <p className="eyebrow mb-6">Our Philosophy</p>
            <h2 className="display-hero text-[var(--color-brown-dark)] text-5xl md:text-7xl leading-[1.02]">
              Time is
              <span className="text-[var(--color-gold)]">...</span>
            </h2>
            <p className="editorial-quote text-2xl md:text-4xl text-[var(--color-brown)] mt-6 max-w-2xl">
              the only thing money cannot buy, yet the only thing worth
              investing in.
            </p>
          </RevealOnScroll>

          <RevealOnScroll variant="fade-up" delay={0.15} className="lg:col-span-4 lg:pt-6">
            <Divider className="mb-6 lg:hidden" />
            <p className="editorial-body text-lg text-[var(--color-brown-dark)]/85">
              We don&apos;t just sell watches. We sell history on your
              wrist — stories etched in steel and gold, the legacy of every
              second, and the comfort of knowing your time is yours.
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll variant="fade" delay={0.2}>
          <ul className="flex flex-wrap gap-x-10 gap-y-4 mt-16 pt-10 border-t border-[var(--color-border-subtle)]">
            {VALUES.map((value) => (
              <li key={value} className="label-nav text-[var(--color-brown)]">
                {value}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
