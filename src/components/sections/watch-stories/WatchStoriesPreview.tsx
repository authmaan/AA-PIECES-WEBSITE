import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { AnimatedImage } from "@/components/common/AnimatedImage";
import { MagneticButton } from "@/components/common/MagneticButton";
import { getWatchStoriesPreview } from "@/lib/data/fetchers";
import Link from "next/link";

export async function WatchStoriesPreview() {
  const stories = await getWatchStoriesPreview(1);
  const story = stories[0];
  if (!story) return null;

  return (
    <section className="bg-[var(--color-cream-dim)] py-24 md:py-32">
      <div className="container-boutique grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Watch Stories"
            title="Every Piece Carries a Story"
            subtitle="From the moment it's chosen to the moment it's handed down — we love hearing how AA PIECES becomes part of someone's life."
          />
          <RevealOnScroll variant="fade" delay={0.2} className="mt-8">
            <MagneticButton href="/watch-stories" variant="outline">
              Read the Stories
            </MagneticButton>
          </RevealOnScroll>
        </div>

        <RevealOnScroll variant="scale" delay={0.1} className="lg:col-span-7">
          <Link href={`/watch-stories/${story.slug}`} className="group block">
            <AnimatedImage
              src={story.coverImage.url}
              alt={story.coverImage.alt}
              containerClassName="aspect-[16/10]"
            />
            <div className="mt-6">
              <h3 className="display-title text-2xl md:text-3xl text-[var(--color-brown-dark)] group-hover:text-[var(--color-brown)] transition-colors">
                {story.title}
              </h3>
              <p className="editorial-body text-[var(--color-brown)] mt-2 max-w-lg">
                {story.excerpt}
              </p>
            </div>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
