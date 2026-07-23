import { Metadata } from "next";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { ArticleCard } from "@/components/sections/time-talks/ArticleCard";
import { ARTICLES } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Time Talks",
  description: "Editorial essays on watches, craftsmanship, and how to choose a piece that lasts.",
};

export default function TimeTalksIndexPage() {
  const articles = ARTICLES.filter((a) => a.type === "time-talks");

  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="container-boutique">
        <RevealOnScroll variant="fade-up" className="max-w-2xl mb-16">
          <p className="eyebrow mb-5">Time Talks</p>
          <h1 className="display-hero text-[var(--color-brown-dark)] text-5xl md:text-6xl leading-[1.02]">
            Knowledge Before Purchase
          </h1>
          <p className="editorial-body text-lg text-[var(--color-brown)] mt-6">
            An educated customer makes a better decision, and keeps the
            watch longer.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {articles.map((article, i) => (
            <RevealOnScroll key={article._id} variant="fade-up" delay={(i % 3) * 0.08}>
              <ArticleCard article={article} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
