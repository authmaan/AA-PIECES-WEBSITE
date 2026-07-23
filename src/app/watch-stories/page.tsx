import { Metadata } from "next";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { ArticleCard } from "@/components/sections/time-talks/ArticleCard";
import { ARTICLES } from "@/lib/data/content";

export const metadata: Metadata = {
  title: "Watch Stories",
  description: "Real stories of how AA PIECES timepieces become part of our customers' lives.",
};

export default function WatchStoriesIndexPage() {
  const stories = ARTICLES.filter((a) => a.type === "watch-stories");

  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="container-boutique">
        <RevealOnScroll variant="fade-up" className="max-w-2xl mb-16">
          <p className="eyebrow mb-5">Watch Stories</p>
          <h1 className="display-hero text-[var(--color-brown-dark)] text-5xl md:text-6xl leading-[1.02]">
            Every Piece Carries a Story
          </h1>
          <p className="editorial-body text-lg text-[var(--color-brown)] mt-6">
            From the moment it&apos;s chosen to the moment it&apos;s handed
            down.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {stories.map((story, i) => (
            <RevealOnScroll key={story._id} variant="fade-up" delay={(i % 3) * 0.08}>
              <ArticleCard article={story} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
