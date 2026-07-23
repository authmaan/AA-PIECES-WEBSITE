import Link from "next/link";
import { AnimatedImage } from "@/components/common/AnimatedImage";
import { Article } from "@/types/content";

export function ArticleCard({ article }: { article: Article }) {
  const basePath = article.type === "time-talks" ? "/time-talks" : "/watch-stories";
  return (
    <Link href={`${basePath}/${article.slug}`} className="group block">
      <AnimatedImage
        src={article.coverImage.url}
        alt={article.coverImage.alt}
        containerClassName="aspect-[4/3] bg-[var(--color-cream-dim)]"
      />
      <div className="mt-5">
        <p className="label-nav text-[var(--color-gold)] text-xs mb-2">
          {article.readingMinutes} min read
        </p>
        <h3 className="display-title text-xl text-[var(--color-brown-dark)] group-hover:text-[var(--color-brown)] transition-colors leading-snug">
          {article.title}
        </h3>
        <p className="editorial-body text-[var(--color-brown)] mt-2">
          {article.excerpt}
        </p>
      </div>
    </Link>
  );
}
