export interface Collection {
  _id: string;
  slug: string;
  name: string;
  description: string;
  heroImage: { url: string; alt: string };
}

export type ArticleType = "time-talks" | "watch-stories";

export interface Article {
  _id: string;
  slug: string;
  type: ArticleType;
  title: string;
  excerpt: string;
  body: string; // simplified: single markdown-ish string for Phase 1
  coverImage: { url: string; alt: string };
  readingMinutes: number;
  publishedAt: string; // ISO date
  author: string;
}

export interface Testimonial {
  _id: string;
  quote: string;
  customerName: string;
  customerRole: string; // e.g. "Entrepreneur, Lagos"
  productName?: string;
}

export interface InstagramPost {
  _id: string;
  imageUrl: string;
  alt: string;
  permalink: string;
}
