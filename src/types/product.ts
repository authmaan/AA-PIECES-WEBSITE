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
  isFeatured: boolean;
  isNewArrival: boolean;
}
