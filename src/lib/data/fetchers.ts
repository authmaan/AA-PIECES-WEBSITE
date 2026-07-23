import { PRODUCTS } from "./products";
import { COLLECTIONS, ARTICLES, TESTIMONIALS } from "./content";
import { Product } from "@/types/product";

/**
 * ============================================================================
 * CMS FETCHER LAYER
 * ============================================================================
 * Every function here is written as if it were already async and hitting
 * Sanity's GROQ endpoint — because very soon, it will be. When the project
 * connects to a live Sanity dataset, only the function bodies in this file
 * change (from local array lookups to `sanityClient.fetch(query)` calls).
 * No page or component elsewhere in the app needs to change, because they
 * only ever import from here, never from lib/data/products.ts directly.
 *
 * Example of what a connected version of getFeaturedProducts looks like:
 *
 *   import { client } from "@/sanity/client";
 *   import { featuredProductsQuery } from "@/sanity/queries/products";
 *
 *   export async function getFeaturedProducts(): Promise<Product[]> {
 *     return client.fetch(featuredProductsQuery);
 *   }
 * ============================================================================
 */

export async function getAllProducts(): Promise<Product[]> {
  return PRODUCTS;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return PRODUCTS.filter((p) => p.isFeatured);
}

export async function getNewArrivals(): Promise<Product[]> {
  return PRODUCTS.filter((p) => p.isNewArrival);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return PRODUCTS.find((p) => p.slug === slug);
}

export async function getRelatedProducts(product: Product, limit = 3): Promise<Product[]> {
  return PRODUCTS.filter(
    (p) => p._id !== product._id && p.collection === product.collection
  ).slice(0, limit);
}

export async function getProductsByCollection(collectionSlug: string): Promise<Product[]> {
  return PRODUCTS.filter((p) => p.collection === collectionSlug);
}

export async function getAllCollections() {
  return COLLECTIONS;
}

export async function getCollectionBySlug(slug: string) {
  return COLLECTIONS.find((c) => c.slug === slug);
}

export async function getTimeTalksPreview(limit = 3) {
  return ARTICLES.filter((a) => a.type === "time-talks").slice(0, limit);
}

export async function getWatchStoriesPreview(limit = 2) {
  return ARTICLES.filter((a) => a.type === "watch-stories").slice(0, limit);
}

export async function getArticleBySlug(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export async function getTestimonials() {
  return TESTIMONIALS;
}
