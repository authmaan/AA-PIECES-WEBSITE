import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Gem, Truck, ShieldCheck } from "lucide-react";
import { WhatsAppOrderButton } from "@/components/common/WhatsAppOrderButton";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { Divider } from "@/components/common/Divider";
import { ProductColorSelector } from "@/components/common/ProductColorSelector";
import { ProductVariantProvider } from "@/components/common/ProductVariantContext";
import { ProductVariantGallery } from "@/components/sections/product-gallery/ProductVariantGallery";
import { CollectionCard } from "@/components/sections/collection/CollectionCard";
import { getAllProducts, getProductBySlug, getRelatedProducts } from "@/lib/data/fetchers";
import { formatPrice } from "@/lib/utils";
import { ProductMedia } from "@/types/product";

const TRUST_BADGES = [
  { label: "Carefully Selected", icon: Gem },
  { label: "Nationwide Delivery", icon: Truck },
  { label: "Secure Payments", icon: ShieldCheck },
];

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

        <ProductVariantProvider variants={product.variants} defaultMedia={media}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
            {/* Gallery */}
            <RevealOnScroll variant="fade">
              <div className="lg:sticky lg:top-28">
                <ProductVariantGallery
                  ariaLabel={`${product.name} media`}
                  priority
                />
              </div>
            </RevealOnScroll>

          {/* Details */}
          <div>
            <RevealOnScroll variant="fade-up">
              {/* 1. Product Name */}
              <h1 className="display-hero text-[var(--color-brown-dark)] text-4xl md:text-5xl leading-tight mb-4">
                {product.name}
              </h1>

              {/* 2. Selling Price — bumped text-2xl -> text-3xl for prominence, still within the existing type scale */}
              <p className="label-nav text-3xl text-[var(--color-brown-dark)] mb-4">
                {formatPrice(product.price, product.currency)}
              </p>

              {/* 3. One-line Statement */}
              <p className="editorial-quote text-xl text-[var(--color-brown)] mb-8">
                {product.tagline}
              </p>

              {/* 4. Colour Selector — only rendered when the product actually
                  has colour variants; UI-only placeholder colours with no
                  real media behind them would be misleading now that
                  selecting one actually does something */}
              {product.variants && product.variants.length > 0 && (
                <div className="mb-8">
                  <ProductColorSelector colors={product.variants} />
                </div>
              )}

              {/* 5. Primary CTA */}
              <WhatsAppOrderButton product={product} fullWidth className="mb-2" />
              <p className="editorial-body text-sm text-[var(--color-brown)]/70 text-center mt-3">
                Ordering here starts a WhatsApp conversation with our team —
                no cart, no checkout, just a direct line to us.
              </p>

              {/* 6. Trust Badges — reuses the existing Divider rather than a
                  one-off border; gap tightens below `sm` so labels like
                  "Nationwide Delivery" have room to wrap cleanly at
                  320–375px instead of crowding a wide gap-4 */}
              <Divider className="mt-10 mb-8" />
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {TRUST_BADGES.map((badge) => (
                  <div key={badge.label} className="flex flex-col items-center text-center gap-2">
                    <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-gold)]" strokeWidth={1.5} />
                    <p className="label-nav text-xs text-[var(--color-brown-dark)] leading-tight">
                      {badge.label}
                    </p>
                  </div>
                ))}
              </div>
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
        </ProductVariantProvider>

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
