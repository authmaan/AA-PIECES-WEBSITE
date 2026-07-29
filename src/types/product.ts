export type ProductCategory = "mens" | "womens" | "unisex";
export type ProductMovement = "automatic" | "quartz" | "manual-wind";
export type ProductAvailability = "in-stock" | "made-to-order" | "sold-out";

export interface ProductImage {
  url: string;
  alt: string;
}

/**
 * PDP Gallery media model (PDP Spec v1.0, "Media Architecture").
 * A discriminated union rather than separate images[]/videos[] arrays, so
 * ProductGallery can preserve display order and switch on one `.type`
 * check per item.
 */
export interface ProductMediaImage {
  type: "image";
  url: string;
  alt: string;
}

export interface ProductMediaVideo {
  type: "video";
  url: string;
  /** Used as the <video> poster attribute and as the thumbnail before playback */
  poster: string;
  alt: string;
}

export type ProductMedia = ProductMediaImage | ProductMediaVideo;

/**
 * A single colour/variant option (PDP Spec v1.0, "Colour Selector" +
 * "Gallery Behaviour"). Each variant carries its own media array rather
 * than just a name/swatch, because the spec's gallery-behaviour rules are
 * explicit: a colour may have its own dedicated hero image, or may only
 * have supporting images (in which case the default hero stays and only
 * the supporting gallery images change). Giving each variant a full
 * `media: ProductMedia[]` is what makes that distinction representable —
 * a variant that reuses the default hero simply won't include one in its
 * own array, versus a variant that overrides it explicitly. Interpreting
 * that rule is UI/wiring work for a later step; this type just needs to
 * be able to express it.
 */
export interface ProductVariant {
  name: string; // e.g. "Gold", "Black", "Silver"
  swatch: string; // hex color for the swatch UI, e.g. "#D0AC3D"
  media: ProductMedia[];
}

export interface ProductSpec {
  label: string;
  value: string;
}

/**
 * Shape returned by the Sanity `product` document once connected.
 * Local mock data in lib/data/products.ts conforms to this exact interface,
 * so swapping the fetcher's data source later requires no component changes.
 */
export interface Product {
  _id: string;
  slug: string;
  name: string;
  reference: string; // internal reference code, e.g. "AAP-MC-102"
  category: ProductCategory;
  collection: string; // collection slug this piece belongs to
  price: number;
  currency: "NGN" | "USD";
  availability: ProductAvailability;
  tagline: string; // one-line editorial hook
  description: string; // longer editorial story paragraph
  movement: ProductMovement;
  caseMaterial: string;
  strapMaterial: string;
  caseDiameterMm: number;
  waterResistance: string;
  specs: ProductSpec[];
  images: ProductImage[];
  /**
   * PDP gallery media (images + videos, in order). Optional — unused
   * until real per-product data exists; every existing field above is
   * untouched.
   */
  gallery?: ProductMedia[];
  /**
   * Colour/variant options, each with its own media. Optional and unused
   * until real variant data and the components that consume it exist —
   * every existing field above is untouched. When absent, a product has
   * no colour choices, which is the correct default for current sample
   * data (none of it has real variants yet).
   */
  variants?: ProductVariant[];
  isFeatured: boolean;
  isNewArrival: boolean;
}
