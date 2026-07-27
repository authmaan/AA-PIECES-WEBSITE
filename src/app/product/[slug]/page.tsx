import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { WhatsAppOrderButton } from "@/components/common/WhatsAppOrderButton";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { Divider } from "@/components/common/Divider";
import { ProductGallery } from "@/components/sections/product-gallery/ProductGallery";
import { CollectionCard } from "@/components/sections/collection/CollectionCard";
import { getAllProducts, getProductBySlug, getRelatedProducts } from "@/lib/data/fetchers";
import { formatPrice } from "@/lib/utils";
import { ProductMedia } from "@/types/product";

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.tagline,
    openGraph: { images: [product.images[0].url] },
  };
}

const AVAILABILITY_LABEL: Record<string, string> = {
  "in-stock": "In Stock",
  "made-to-order": "Made to Order",
  "sold-out": "Currently Sold Out",
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const related = await getRelatedProducts(product);

  // Existing sample data only has `images`, not the newer `gallery` field
  // yet (that's real per-product content, out of scope for this step) —
  // map it into the gallery's media shape so ProductGallery has something
  // real to render. Products with one image simply get a one-item
  // gallery with no thumbnail strip, which ProductGallery already
  // handles on its own.
  const media: ProductMedia[] =
    product.gallery ??
    product.images.map((img) => ({
      type: "image" as const,
      url: img.url,
      alt: img.alt,
    }));

  return (
    <div className="pt-32 pb-24 md:pt-36 md:pb-32">
      <div className="container-boutique">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 label-nav text-xs text-[var(--color-brown)]">
            <li><Link href="/collections" className="hover:text-[var(--color-gold)]">Collection</Link></li>
            <li><ChevronRight className="w-3 h-3" /></li>
            <li className="text-[var(--color-brown-dark)]">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Gallery */}
          <RevealOnScroll variant="fade">
            <div className="lg:sticky lg:top-28">
              <ProductGallery
                media={media}
                ariaLabel={`${product.name} media`}
                priority
              />
            </div>
          </RevealOnScroll>

          {/* Details */}
          <div>
            <RevealOnScroll variant="fade-up">
              <p className="label-nav text-[var(--color-gold)] text-xs mb-3">
                {product.reference} · {AVAILABILITY_LABEL[product.availability]}
              </p>
              <h1 className="display-hero text-[var(--color-brown-dark)] text-4xl md:text-5xl leading-tight mb-4">
                {product.name}
              </h1>
              <p className="editorial-quote text-xl text-[var(--color-brown)] mb-6">
                {product.tagline}
              </p>
              <p className="label-nav text-2xl text-[var(--color-brown-dark)] mb-8">
                {formatPrice(product.price, product.currency)}
              </p>

              <WhatsAppOrderButton product={product} fullWidth className="mb-2" />
              <p className="editorial-body text-sm text-[var(--color-brown)]/70 text-center mt-3">
                Ordering here starts a WhatsApp conversation with our team —
                no cart, no checkout, just a direct line to us.
              </p>
            </RevealOnScroll>

            <Divider className="my-10" />

            <RevealOnScroll variant="fade-up" delay={0.1}>
              <h2 className="display-title text-2xl text-[var(--color-brown-dark)] mb-4">
                The Story
              </h2>
              <p className="editorial-body text-lg text-[var(--color-brown-dark)]/85 leading-relaxed">
                {product.description}
              </p>
            </RevealOnScroll>

            <Divider className="my-10" />

            <RevealOnScroll variant="fade-up" delay={0.15}>
              <h2 className="display-title text-2xl text-[var(--color-brown-dark)] mb-6">
                Specifications
              </h2>
              <dl className="divide-y divide-[var(--color-border-subtle)]">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between py-3">
                    <dt className="label-nav text-[var(--color-brown)] text-xs">{spec.label}</dt>
                    <dd className="editorial-body text-[var(--color-brown-dark)] text-right">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </RevealOnScroll>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-32">
            <RevealOnScroll variant="fade-up">
              <h2 className="display-title text-3xl text-[var(--color-brown-dark)] mb-10">
                You May Also Consider
              </h2>
            </RevealOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {related.map((p, i) => (
                <RevealOnScroll key={p._id} variant="fade-up" delay={i * 0.1}>
                  <CollectionCard product={p} />
                </RevealOnScroll>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
