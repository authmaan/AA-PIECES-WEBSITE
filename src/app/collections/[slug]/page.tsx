import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CollectionCard } from "@/components/sections/collection/CollectionCard";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { getAllCollections, getCollectionBySlug, getProductsByCollection } from "@/lib/data/fetchers";

export async function generateStaticParams() {
  const collections = await getAllCollections();
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = await getCollectionBySlug(slug);
  if (!collection) return {};
  return { title: collection.name, description: collection.description };
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = await getCollectionBySlug(slug);
  if (!collection) notFound();

  const products = await getProductsByCollection(slug);

  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="container-boutique">
        <RevealOnScroll variant="fade-up" className="max-w-2xl mb-16">
          <p className="eyebrow mb-5">Collection</p>
          <h1 className="display-hero text-[var(--color-brown-dark)] text-5xl md:text-6xl leading-[1.02]">
            {collection.name}
          </h1>
          <p className="editorial-body text-lg text-[var(--color-brown)] mt-6">
            {collection.description}
          </p>
        </RevealOnScroll>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {products.map((product, i) => (
              <RevealOnScroll key={product._id} variant="fade-up" delay={(i % 3) * 0.08}>
                <CollectionCard product={product} />
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <p className="editorial-body text-[var(--color-brown)]">
            New pieces for this collection are on the way.
          </p>
        )}
      </div>
    </div>
  );
}
