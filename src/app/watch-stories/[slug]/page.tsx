import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { ARTICLES } from "@/lib/data/content";
import { isSvgSrc } from "@/lib/utils";

export async function generateStaticParams() {
  return ARTICLES.filter((a) => a.type === "watch-stories").map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug && a.type === "watch-stories");
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function TimeTalksArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug && a.type === "watch-stories");
  if (!article) notFound();

  return (
    <article className="pt-32 pb-24 md:pt-36 md:pb-32">
      <div className="container-boutique max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 label-nav text-xs text-[var(--color-brown)]">
            <li><Link href="/watch-stories" className="hover:text-[var(--color-gold)]">Watch Stories</Link></li>
            <li><ChevronRight className="w-3 h-3" /></li>
            <li className="text-[var(--color-brown-dark)] truncate max-w-[200px]">{article.title}</li>
          </ol>
        </nav>

        <RevealOnScroll variant="fade-up">
          <p className="label-nav text-[var(--color-gold)] text-xs mb-4">
            {article.readingMinutes} min read · {article.author}
          </p>
          <h1 className="display-hero text-[var(--color-brown-dark)] text-4xl md:text-5xl leading-tight mb-8">
            {article.title}
          </h1>
        </RevealOnScroll>

        <RevealOnScroll variant="fade" delay={0.1}>
          <div className="relative aspect-[16/9] mb-10 bg-[var(--color-cream-dim)]">
            <Image src={article.coverImage.url} alt={article.coverImage.alt} fill unoptimized={isSvgSrc(article.coverImage.url)} className="object-cover" />
          </div>
        </RevealOnScroll>

        <RevealOnScroll variant="fade-up" delay={0.15}>
          <p className="editorial-body text-xl text-[var(--color-brown)] italic mb-6">
            {article.excerpt}
          </p>
          <p className="editorial-body text-lg text-[var(--color-brown-dark)]/85 leading-relaxed">
            {article.body}
          </p>
        </RevealOnScroll>
      </div>
    </article>
  );
}
