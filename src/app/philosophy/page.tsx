import { Metadata } from "next";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { Divider } from "@/components/common/Divider";

export const metadata: Metadata = {
  title: "Our Philosophy",
  description:
    "Time is the only thing money cannot buy, yet the only thing worth investing in. The philosophy behind AA PIECES.",
};

const VALUES = [
  { name: "Luxury", copy: "Not loud, not logo-forward — luxury that reveals itself on closer inspection." },
  { name: "Authenticity", copy: "Every piece and every claim we make about it is exactly what it says it is." },
  { name: "Elegance", copy: "Restraint is a design choice. We'd rather leave something out than crowd it in." },
  { name: "Simplicity", copy: "A watch has one job. Ours are built to do it beautifully, for decades." },
  { name: "Trust", copy: "We're building relationships that outlast any single sale." },
  { name: "Value of Time", copy: "The only resource no one can buy more of — worth marking properly." },
];

export default function PhilosophyPage() {
  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="container-boutique">
        <RevealOnScroll variant="fade-up" className="max-w-3xl">
          <p className="eyebrow mb-6">Our Philosophy</p>
          <h1 className="display-hero text-[var(--color-brown-dark)] text-5xl md:text-7xl leading-[1.02] mb-8">
            Time is<span className="text-[var(--color-gold)]">...</span>
          </h1>
          <p className="editorial-quote text-2xl md:text-3xl text-[var(--color-brown)]">
            the only thing money cannot buy, yet the only thing worth
            investing in.
          </p>
        </RevealOnScroll>

        <RevealOnScroll variant="fade-up" delay={0.1} className="max-w-2xl mt-14">
          <p className="editorial-body text-lg text-[var(--color-brown-dark)]/85 leading-relaxed">
            We don&apos;t simply display watches. We tell stories, we
            educate, and we build trust — because a watch is one of the few
            purchases a person makes that&apos;s meant to outlive the
            moment it was bought in. AA PIECES exists to help you find the
            timepiece that actually fits the life you&apos;re living, not
            the one a showroom is trying to move.
          </p>
        </RevealOnScroll>

        <Divider className="my-20" />

        <RevealOnScroll variant="fade-up">
          <h2 className="display-title text-3xl md:text-4xl text-[var(--color-brown-dark)] mb-12">
            What We Stand On
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {VALUES.map((v, i) => (
            <RevealOnScroll key={v.name} variant="fade-up" delay={i * 0.06}>
              <p className="label-nav text-[var(--color-gold)] mb-3">{v.name}</p>
              <p className="editorial-body text-[var(--color-brown-dark)]/80">{v.copy}</p>
            </RevealOnScroll>
          ))}
        </div>

        <Divider className="my-20" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <RevealOnScroll variant="fade-up" id="authenticity">
            <h2 className="display-title text-2xl text-[var(--color-brown-dark)] mb-4">
              On Authenticity
            </h2>
            <p className="editorial-body text-[var(--color-brown-dark)]/80 leading-relaxed">
              Every piece we carry is described exactly as it is — its
              materials, its movement, its origin. We&apos;d rather tell you
              plainly what a watch is than let ambiguity do the selling.
              Every purchase comes with our 2-year AA PIECES guarantee.
            </p>
          </RevealOnScroll>

          <RevealOnScroll variant="fade-up" delay={0.1} id="care">
            <h2 className="display-title text-2xl text-[var(--color-brown-dark)] mb-4">
              Care Guide
            </h2>
            <p className="editorial-body text-[var(--color-brown-dark)]/80 leading-relaxed">
              Keep your piece away from prolonged direct sunlight and
              extreme temperature swings. Wipe the case and strap after
              wear. Have automatic movements serviced roughly every 3–5
              years to keep timing accurate over decades of wear.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
