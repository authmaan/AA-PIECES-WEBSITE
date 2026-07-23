import { Collection, Article, Testimonial } from "@/types/content";

export const COLLECTIONS: Collection[] = [
  {
    _id: "col-heritage",
    slug: "heritage",
    name: "The Heritage Collection",
    description:
      "Classic proportions and warm, traditional finishes — pieces built to be worn for decades, not seasons.",
    heroImage: { url: "/products/regal-heritage-gmt.svg", alt: "Heritage Collection hero" },
  },
  {
    _id: "col-modern",
    slug: "modern",
    name: "The Modern Edit",
    description:
      "Sharper lines, bolder cases, and complications built for a faster pace of life.",
    heroImage: { url: "/products/solstice-chronograph.svg", alt: "Modern Edit hero" },
  },
];

export const ARTICLES: Article[] = [
  {
    _id: "art-01",
    slug: "reading-a-dial-like-a-collector",
    type: "time-talks",
    title: "Reading a Dial Like a Collector",
    excerpt:
      "The five details that separate a watch you'll wear for a decade from one you'll replace in a year.",
    body: "Full article content would live here as portable text once connected to Sanity.",
    coverImage: { url: "/products/meridian-classic.svg", alt: "Close-up of a watch dial" },
    readingMinutes: 4,
    publishedAt: "2026-05-12",
    author: "AA PIECES Editorial",
  },
  {
    _id: "art-02",
    slug: "the-case-for-one-good-watch",
    type: "time-talks",
    title: "The Case for One Good Watch",
    excerpt:
      "Why a single, deliberate timepiece says more than a drawer full of options ever could.",
    body: "Full article content would live here as portable text once connected to Sanity.",
    coverImage: { url: "/products/aurum-slim.svg", alt: "A single elegant watch" },
    readingMinutes: 3,
    publishedAt: "2026-04-28",
    author: "AA PIECES Editorial",
  },
  {
    _id: "art-03",
    slug: "gmt-explained",
    type: "time-talks",
    title: "The GMT Complication, Explained",
    excerpt:
      "What that extra hand actually does, and who it's really for.",
    body: "Full article content would live here as portable text once connected to Sanity.",
    coverImage: { url: "/products/regal-heritage-gmt.svg", alt: "GMT watch complication" },
    readingMinutes: 5,
    publishedAt: "2026-04-02",
    author: "AA PIECES Editorial",
  },
  {
    _id: "story-01",
    slug: "usman-and-the-watch-that-waited",
    type: "watch-stories",
    title: "The Watch That Waited",
    excerpt:
      "A customer's Regal Heritage GMT, bought for a first promotion and worn to every one since.",
    body: "Full story content would live here as portable text once connected to Sanity.",
    coverImage: { url: "/products/regal-heritage-gmt.svg", alt: "Customer wearing a watch" },
    readingMinutes: 3,
    publishedAt: "2026-03-15",
    author: "AA PIECES Editorial",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    _id: "test-01",
    quote:
      "It doesn't feel like I bought a watch. It feels like I bought something I'll hand down.",
    customerName: "Adaeze O.",
    customerRole: "Business Owner, Lagos",
    productName: "Meridian Classic",
  },
  {
    _id: "test-02",
    quote:
      "I've worn a suit to work for twelve years. This is the first watch that's actually kept up.",
    customerName: "Tunde B.",
    customerRole: "Corporate Executive, Abuja",
    productName: "Solstice Chronograph",
  },
  {
    _id: "test-03",
    quote:
      "Ordering on WhatsApp felt personal, not transactional. That's rare for something this considered.",
    customerName: "Farida M.",
    customerRole: "Entrepreneur, Kano",
    productName: "Aurum Slim",
  },
  {
    _id: "test-04",
    quote:
      "I wear a kaftan most days. Regal Heritage is the first watch I've owned that actually fits the wardrobe.",
    customerName: "Ibrahim S.",
    customerRole: "Founder, Kaduna",
    productName: "Regal Heritage GMT",
  },
];
