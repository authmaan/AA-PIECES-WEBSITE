import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { MagneticButton } from "@/components/common/MagneticButton";
import { ArticleCard } from "./ArticleCard";
import { getTimeTalksPreview } from "@/lib/data/fetchers";

export async function TimeTalksPreview() {
  const articles = await getTimeTalksPreview(3);

  return (
    <section className="bg-[var(--color-cream)] py-24 md:py-32">
      <div className="container-boutique">
        <SectionHeading
          eyebrow="Time Talks"
          title="Knowledge Before Purchase"
          subtitle="We believe an educated customer makes a better decision — and keeps the watch longer."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <RevealOnScroll key={article._id} variant="fade-up" delay={i * 0.1}>
              <ArticleCard article={article} />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll variant="fade" delay={0.3} className="mt-12">
          <MagneticButton href="/time-talks" variant="ghost">
            Read More on Time Talks →
          </MagneticButton>
        </RevealOnScroll>
      </div>
    </section>
  );
}
