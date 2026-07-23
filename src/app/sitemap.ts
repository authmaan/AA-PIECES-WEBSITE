import { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { PRODUCTS } from "@/lib/data/products";
import { ARTICLES, COLLECTIONS } from "@/lib/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/collections",
    "/philosophy",
    "/spotlight",
    "/time-talks",
    "/watch-stories",
  ].map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
  }));

  const productRoutes = PRODUCTS.map((p) => ({
    url: `${SITE.url}/product/${p.slug}`,
    lastModified: new Date(),
  }));

  const collectionRoutes = COLLECTIONS.map((c) => ({
    url: `${SITE.url}/collections/${c.slug}`,
    lastModified: new Date(),
  }));

  const articleRoutes = ARTICLES.map((a) => ({
    url: `${SITE.url}/${a.type}/${a.slug}`,
    lastModified: new Date(a.publishedAt),
  }));

  return [...staticRoutes, ...productRoutes, ...collectionRoutes, ...articleRoutes];
}
