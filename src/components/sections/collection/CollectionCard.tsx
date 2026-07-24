import Link from "next/link";
import { AnimatedImage } from "@/components/common/AnimatedImage";
import { WhatsAppOrderIconButton } from "@/components/common/WhatsAppOrderButton";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/types/product";

/**
 * Card is intentionally NOT one big <Link> wrapping everything — the
 * WhatsApp button also renders an <a target="_blank">, and an anchor
 * nested inside another anchor is invalid HTML. Browsers silently close
 * the outer <a> early when parsing that markup, which produces a DOM
 * that doesn't match what React rendered, causing a hydration mismatch.
 *
 * Instead: one real <Link> around the product name (correct semantics,
 * accessible name), stretched to cover the whole card via an absolutely
 * positioned overlay (the standard "block link" pattern). The WhatsApp
 * button sits on top of that overlay via z-index and stays independently
 * clickable — it's a sibling, never a descendant of the Link.
 */
export function CollectionCard({ product }: { product: Product }) {
  return (
    <div className="group relative">
      <div className="relative">
        <AnimatedImage
          src={product.images[0].url}
          alt={product.images[0].alt}
          containerClassName="aspect-square bg-[var(--color-cream-dim)]"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <WhatsAppOrderIconButton product={product} />
        </div>
        {product.isNewArrival && (
          <span className="absolute top-4 left-4 eyebrow bg-[var(--color-brown-dark)] text-[var(--color-cream)] px-3 py-1.5">
            New
          </span>
        )}
      </div>

      <div className="mt-5">
        <p className="label-nav text-[var(--color-brown)] text-xs mb-1.5">
          {product.reference}
        </p>
        <h3 className="display-title text-xl text-[var(--color-brown-dark)] group-hover:text-[var(--color-brown)] transition-colors">
          <Link href={`/product/${product.slug}`}>
            <span className="absolute inset-0" />
            {product.name}
          </Link>
        </h3>
        <p className="editorial-body text-[var(--color-brown)] italic mt-1">
          {product.tagline}
        </p>
        <p className="label-nav text-[var(--color-brown-dark)] mt-3">
          {formatPrice(product.price, product.currency)}
        </p>
      </div>
    </div>
  );
}
