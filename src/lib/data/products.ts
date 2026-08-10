import { Product } from "@/types/product";

/**
 * SAMPLE CATALOG — Phase 1 placeholder content.
 *
 * These are entirely original, fictional pieces created for AA PIECES with
 * no reference to any third-party brand, model, or trademark. Names,
 * references, specs, and prices are illustrative.
 *
 * This file is a temporary data source. Every function that reads from it
 * lives in `lib/data/fetchers.ts` — once Sanity is connected, only that
 * fetcher file changes; no component in the app needs to be touched.
 */
export const PRODUCTS: Product[] = [
  {
    _id: "prod-meridian-classic",
    slug: "meridian-classic",
    name: "Meridian Classic",
    reference: "AAP-MC-102",
    category: "mens",
    collection: "heritage",
    price: 285000,
    currency: "NGN",
    availability: "in-stock",
    tagline: "The quiet confidence of a well-made decision.",
    description:
      "Meridian Classic is the piece we recommend to anyone building a case for their first serious watch. A gold-toned case wraps a deep umber dial, finished with a date window at three and a sunburst texture that shifts with the light. It sits low on the wrist and reads correctly in a boardroom or a kaftan sleeve alike — which is precisely the point.",
    movement: "quartz",
    caseMaterial: "Gold-toned stainless steel",
    strapMaterial: "Gold-toned stainless steel bracelet",
    caseDiameterMm: 40,
    waterResistance: "5 ATM",
    specs: [
      { label: "Movement", value: "Precision quartz" },
      { label: "Case", value: "40mm gold-toned stainless steel" },
      { label: "Dial", value: "Umber sunburst, date at 3 o'clock" },
      { label: "Water resistance", value: "5 ATM / 50m" },
      { label: "Warranty", value: "2-year AA PIECES guarantee" },
    ],
    images: [{ url: "/products/meridian-classic.svg", alt: "Meridian Classic watch with gold case and brown dial" }],
    // Placeholder colour variants. "Black" reuses the Obsidian Pilot
    // illustration as a stand-in — there's no separate black-case render
    // of Meridian Classic itself yet. Real per-colour photography will
    // replace both entries via the external product library integration;
    // this exists to exercise the variants data shape, not to be final
    // imagery.
    variants: [
      {
        name: "Gold",
        swatch: "#D0AC3D",
        media: [
          {
            type: "image",
            url: "/products/meridian-classic.svg",
            alt: "Meridian Classic watch with gold case and brown dial",
          },
        ],
      },
      {
        name: "Black",
        swatch: "#000000",
        media: [
          {
            type: "image",
            url: "/products/obsidian-pilot.svg",
            alt: "Meridian Classic watch, black case variant (placeholder image)",
          },
        ],
      },
    ],
    isFeatured: true,
    isNewArrival: false,
  },
  {
    _id: "prod-solstice-chronograph",
    slug: "solstice-chronograph",
    name: "Solstice Chronograph",
    reference: "AAP-SC-207",
    category: "mens",
    collection: "modern",
    price: 412000,
    currency: "NGN",
    availability: "in-stock",
    tagline: "Built for the days that move fast.",
    description:
      "Three subdials, a matte black face, and a case finished in deep bronze — Solstice Chronograph was designed for the entrepreneur who tracks everything and apologizes for nothing. The chronograph pushers are functional, not decorative, and the gold accenting keeps it from tipping into sport-watch territory.",
    movement: "quartz",
    caseMaterial: "Bronze-finished stainless steel",
    strapMaterial: "Genuine leather, chestnut brown",
    caseDiameterMm: 42,
    waterResistance: "10 ATM",
    specs: [
      { label: "Movement", value: "Chronograph quartz, 3 subdials" },
      { label: "Case", value: "42mm bronze-finished steel" },
      { label: "Strap", value: "Chestnut leather, gold buckle" },
      { label: "Water resistance", value: "10 ATM / 100m" },
      { label: "Warranty", value: "2-year AA PIECES guarantee" },
    ],
    images: [{ url: "/products/solstice-chronograph.svg", alt: "Solstice Chronograph watch with black dial and three subdials" }],
    isFeatured: true,
    isNewArrival: true,
  },
  {
    _id: "prod-regal-heritage-gmt",
    slug: "regal-heritage-gmt",
    name: "Regal Heritage GMT",
    reference: "AAP-RH-330",
    category: "mens",
    collection: "heritage",
    price: 468000,
    currency: "NGN",
    availability: "made-to-order",
    tagline: "For the second home, and the second timezone.",
    description:
      "A cream dial framed in warm brown, with a fourth hand tracking a second timezone — Regal Heritage GMT was built for the traveler who is never fully out of office. It's the piece that looks equally deliberate at a Lagos boardroom table or a London dinner.",
    movement: "automatic",
    caseMaterial: "Brushed stainless steel, brown PVD",
    strapMaterial: "Brown leather, contrast stitching",
    caseDiameterMm: 41,
    waterResistance: "5 ATM",
    specs: [
      { label: "Movement", value: "Automatic, 24h GMT complication" },
      { label: "Case", value: "41mm brown PVD steel" },
      { label: "Dial", value: "Cream, applied brown indices" },
      { label: "Power reserve", value: "42 hours" },
      { label: "Warranty", value: "2-year AA PIECES guarantee" },
    ],
    images: [{ url: "/products/regal-heritage-gmt.svg", alt: "Regal Heritage GMT watch with cream dial and brown case" }],
    // Placeholder colour variants — see the note on Meridian Classic above.
    // "Gold" reuses the Aurum Slim illustration as a stand-in.
    variants: [
      {
        name: "Brown",
        swatch: "#826929",
        media: [
          {
            type: "image",
            url: "/products/regal-heritage-gmt.svg",
            alt: "Regal Heritage GMT watch with cream dial and brown case",
          },
        ],
      },
      {
        name: "Gold",
        swatch: "#D0AC3D",
        media: [
          {
            type: "image",
            url: "/products/aurum-slim.svg",
            alt: "Regal Heritage GMT watch, gold case variant (placeholder image)",
          },
        ],
      },
    ],
    isFeatured: true,
    isNewArrival: false,
  },
  {
    _id: "prod-aurum-slim",
    slug: "aurum-slim",
    name: "Aurum Slim",
    reference: "AAP-AS-118",
    category: "womens",
    collection: "modern",
    price: 234000,
    currency: "NGN",
    availability: "in-stock",
    tagline: "Understated, until you look twice.",
    description:
      "Aurum Slim trades complications for proportion. A slender 34mm gold-toned case, a champagne dial with no date window to interrupt the symmetry, and a bracelet that sits close to the wrist. This is the watch that goes from desk to dinner without a second thought.",
    movement: "quartz",
    caseMaterial: "Gold-toned stainless steel",
    strapMaterial: "Gold-toned stainless steel bracelet",
    caseDiameterMm: 34,
    waterResistance: "3 ATM",
    specs: [
      { label: "Movement", value: "Precision quartz" },
      { label: "Case", value: "34mm gold-toned steel, slim profile" },
      { label: "Dial", value: "Champagne, no date window" },
      { label: "Water resistance", value: "3 ATM / 30m" },
      { label: "Warranty", value: "2-year AA PIECES guarantee" },
    ],
    images: [{ url: "/products/aurum-slim.svg", alt: "Aurum Slim watch with gold case and champagne dial" }],
    isFeatured: true,
    isNewArrival: true,
  },
  {
    _id: "prod-obsidian-pilot",
    slug: "obsidian-pilot",
    name: "Obsidian Pilot",
    reference: "AAP-OP-415",
    category: "mens",
    collection: "modern",
    price: 356000,
    currency: "NGN",
    availability: "in-stock",
    tagline: "All black, on purpose.",
    description:
      "Obsidian Pilot is the one piece in the collection that doesn't try to blend in. A fully blacked-out case and dial, oversized cream markers for legibility, and a date window that stays out of the way. Built for the wardrobe where every other piece is already deliberate.",
    movement: "quartz",
    caseMaterial: "Black-coated stainless steel",
    strapMaterial: "Black leather, cream stitching",
    caseDiameterMm: 43,
    waterResistance: "5 ATM",
    specs: [
      { label: "Movement", value: "Precision quartz" },
      { label: "Case", value: "43mm black-coated steel" },
      { label: "Dial", value: "Matte black, oversized cream indices" },
      { label: "Water resistance", value: "5 ATM / 50m" },
      { label: "Warranty", value: "2-year AA PIECES guarantee" },
    ],
    images: [{ url: "/products/obsidian-pilot.svg", alt: "Obsidian Pilot watch, fully black case and dial" }],
    isFeatured: false,
    isNewArrival: false,
  },
  {
    _id: "prod-cascade-diver",
    slug: "cascade-diver",
    name: "Cascade Diver",
    reference: "AAP-CD-521",
    category: "unisex",
    collection: "modern",
    price: 298000,
    currency: "NGN",
    availability: "in-stock",
    tagline: "A weekend piece with weekday manners.",
    description:
      "Cascade Diver takes the sport-watch silhouette and finishes it in the AA PIECES palette — a rotating gold bezel over a warm brown dial. It's rated for real water resistance but reads refined enough to wear well past the pool.",
    movement: "automatic",
    caseMaterial: "Stainless steel, brown PVD",
    strapMaterial: "Stainless steel bracelet",
    caseDiameterMm: 40,
    waterResistance: "20 ATM",
    specs: [
      { label: "Movement", value: "Automatic" },
      { label: "Case", value: "40mm brown PVD steel, rotating gold bezel" },
      { label: "Water resistance", value: "20 ATM / 200m" },
      { label: "Power reserve", value: "38 hours" },
      { label: "Warranty", value: "2-year AA PIECES guarantee" },
    ],
    images: [{ url: "/products/cascade-diver.svg", alt: "Cascade Diver watch with rotating gold bezel and brown dial" }],
    isFeatured: false,
    isNewArrival: true,
  },
  {
    // First real product, sourced from public/products/jf1603/product.txt
    // and the real photography/video committed alongside it — not
    // fictional sample data like the six above. Fields below are split
    // clearly into what came directly from product.txt vs. what had to
    // be inferred, since those shouldn't be mistaken for verified facts.
    _id: "prod-jf1603",
    slug: "jf1603",
    name: "Joefox JF1603",
    // Not provided in product.txt — derived from the brand + model
    // number as a placeholder reference code, not a verified internal SKU.
    reference: "AAP-JF-1603",
    // Not stated in product.txt (no gender indication in the copy) —
    // defaulting to unisex rather than assuming.
    category: "unisex",
    // Not stated in product.txt — "modern" chosen based on the actual
    // description ("bold hybrid... everyday performance"), not verified
    // against any real collection taxonomy.
    collection: "modern",
    price: 25000,
    currency: "NGN",
    // Not stated in product.txt — defaulting to in-stock.
    availability: "in-stock",
    tagline: "Bold hybrid chronograph for everyday performance.",
    description:
      "Sport chronograph with dual digital displays, luminous hands, stainless steel case and genuine leather strap.",
    movement: "quartz",
    caseMaterial: "Stainless Steel",
    strapMaterial: "Leather",
    // Not provided in product.txt (no case size given) — 42mm is a
    // placeholder typical of this watch style, not a real measurement.
    // Needs confirming against the physical product before launch.
    caseDiameterMm: 42,
    // product.txt lists "Water Splash Resistance" as a function, not a
    // specific ATM/meter rating — represented honestly as stated, rather
    // than inventing a specific rating that wasn't given.
    waterResistance: "Splash resistant",
    specs: [
      { label: "Movement", value: "Quartz" },
      { label: "Case", value: "Stainless steel" },
      { label: "Strap", value: "Genuine leather" },
      { label: "Display", value: "Analog / Digital / Hybrid" },
      { label: "Functions", value: "Time display, date display, chronograph, water splash resistance" },
      { label: "What's included", value: "Watch, premium box / branded package" },
    ],
    // product.txt also lists "Extra Features" (Premium Quality, Secure
    // Payments, Satisfaction Guarantee, Worldwide Shipping, Money Back
    // Guarantee) — deliberately not folded into specs above. These read
    // as generic trust messaging, not product specifications, and
    // overlap with the site's existing sitewide Trust Badges / "Why Shop
    // With AA Pieces" sections rather than being per-product facts the
    // Product type has a field for.
    images: [
      { url: "/products/jf1603/images/01-hero.jpg", alt: "Joefox JF1603 chronograph watch, hero view" },
    ],
    // Three real variants, each with its own real photo + real demo
    // video — image first, video second, since the photo is each
    // variant's primary/hero view and the video is supplementary. The
    // asset folders' own "01-" numbering doesn't establish an order
    // between images/ and videos/ (they're separate folders, each
    // independently numbered), so this ordering is a deliberate choice,
    // not a literal reading of file numbers. No dedicated poster image
    // was provided for the videos, so each variant's own photo doubles
    // as its video's poster — a common, reasonable pairing, not a
    // separate asset that needed to exist.
    variants: [
      {
        name: "Black",
        swatch: "#000000",
        media: [
          { type: "image", url: "/products/jf1603/variants/black/images/01-hand.jpg", alt: "Joefox JF1603, black variant, worn on wrist" },
          { type: "video", url: "/products/jf1603/variants/black/videos/01-demo.mp4", poster: "/products/jf1603/variants/black/images/01-hand.jpg", alt: "Joefox JF1603, black variant, demo video" },
        ],
      },
      {
        name: "Brown",
        swatch: "#826929",
        media: [
          { type: "image", url: "/products/jf1603/variants/brown/images/01-hand.jpg", alt: "Joefox JF1603, brown variant, worn on wrist" },
          { type: "video", url: "/products/jf1603/variants/brown/videos/01-demo.mp4", poster: "/products/jf1603/variants/brown/images/01-hand.jpg", alt: "Joefox JF1603, brown variant, demo video" },
        ],
      },
      {
        name: "Gold",
        swatch: "#D0AC3D",
        media: [
          { type: "image", url: "/products/jf1603/variants/gold/images/01-hand.jpg", alt: "Joefox JF1603, gold variant, worn on wrist" },
          { type: "video", url: "/products/jf1603/variants/gold/videos/01-demo.mp4", poster: "/products/jf1603/variants/gold/images/01-hand.jpg", alt: "Joefox JF1603, gold variant, demo video" },
        ],
      },
    ],
    // Judgment calls, not stated in product.txt: featured since it's the
    // first real product on the site, and genuinely new as of today.
    isFeatured: true,
    isNewArrival: true,
  },
  {
    // Second real product, sourced from public/products/af6208/product.txt
    // and the real photography/video committed alongside it.
    //
    // IMPORTANT DISCREPANCY: the asset folder is named "af6208", but
    // product.txt itself declares "Slug: alfaji-6208". Per the instruction
    // to treat product.txt as the single source of truth for product
    // information, `slug` below is "alfaji-6208" as stated — but every
    // media URL still correctly points at the real, physical
    // "/products/af6208/..." path, since that's where the files actually
    // live and isn't something this change can rename. This means slug
    // and asset-folder-name intentionally don't match; not an error.
    _id: "prod-alfaji-6208",
    slug: "alfaji-6208",
    name: "AL-FAJI Original 6208",
    // Not provided in product.txt — derived from the model number, not a
    // verified internal SKU.
    reference: "AAP-AF-6208",
    // Not stated in product.txt — defaulting to unisex, same as JF1603.
    category: "unisex",
    // Not stated in product.txt — "modern" chosen on the same basis as
    // JF1603 (a tech-forward hybrid piece: LED backlight, dual time,
    // language selection), not a verified taxonomy.
    collection: "modern",
    price: 118000,
    currency: "NGN",
    // Not stated in product.txt — defaulting to in-stock.
    availability: "in-stock",
    tagline: "Faith-inspired dual time watch with smart Islamic features.",
    description:
      "Designed for everyday wear while supporting your daily routines, the AL-FAJI 6208 combines classic analog styling with practical digital functionality. Featuring Islamic timekeeping tools, dual-time capability and a comfortable rubber strap, it offers reliability, convenience and distinctive style for work, travel and worship.",
    // product.txt says "Analog Quartz" — "Analog" describes the display,
    // not the movement type, so this maps directly to "quartz" (not a
    // guess, just normalized to the existing enum).
    movement: "quartz",
    caseMaterial: "Zinc Alloy",
    strapMaterial: "Rubber",
    // Not provided in product.txt (no case size given) — 40mm is a
    // placeholder, not a real measurement. Needs confirming against the
    // physical product before launch, same caveat as JF1603.
    caseDiameterMm: 40,
    // Not mentioned anywhere in product.txt — unlike JF1603, there's no
    // water-resistance-related function listed at all here. Rather than
    // invent a rating or reuse JF1603's, this states plainly that no
    // information was provided.
    waterResistance: "Not specified",
    specs: [
      { label: "Movement", value: "Analog quartz" },
      { label: "Case", value: "Zinc alloy" },
      { label: "Strap", value: "Rubber" },
      { label: "Display", value: "Analog / Digital hybrid" },
      // product.txt lists 19 individual functions — far more than
      // JF1603's 4. Cramming all 19 into a single right-aligned spec row
      // (the only formatting the existing UI supports, unchanged here)
      // would render as one very long wrapped line. Splitting them into
      // two thematically grouped rows is my own organizational choice
      // for readability, not a grouping product.txt itself specified —
      // still just the existing ProductSpec[] shape, no type or UI
      // change involved.
      {
        label: "Islamic Features",
        value: "Pilgrimage time reminder, Qibla name display, Qibla direction, Hijri calendar, religious month, religious day",
      },
      {
        label: "Functions",
        value: "Dual time display, Gregorian calendar, city time, alarm, LED backlight, date display, day display, 12/24 hour format, language selection, volume adjustment, battery indicator, summer time, bookmark function",
      },
      { label: "What's included", value: "Watch, premium box / branded package" },
    ],
    // product.txt also lists "Extra Features" (Premium Quality, Secure
    // Payments, Satisfaction Guarantee, Worldwide Shipping, Money Back
    // Guarantee) — deliberately not folded into specs, same reasoning as
    // JF1603: generic trust messaging, not product specifications,
    // already covered by the site's sitewide Trust Badges section.
    images: [
      { url: "/products/af6208/images/hero.jpg", alt: "AL-FAJI Original 6208 watch, hero view" },
    ],
    // gallery takes priority over images in the fallback chain
    // (product.gallery ?? product.images...), so it needs to be a
    // complete default view on its own, not just "extra" media: hero
    // first, then the group photo, then the group video — image before
    // video, matching the same ordering convention JF1603 established.
    // No dedicated poster exists for the group video, so the group photo
    // doubles as its poster, same pairing convention as JF1603.
    gallery: [
      { type: "image", url: "/products/af6208/images/hero.jpg", alt: "AL-FAJI Original 6208 watch, hero view" },
      { type: "image", url: "/products/af6208/gallery/group-image.jpg", alt: "AL-FAJI Original 6208, group view" },
      { type: "video", url: "/products/af6208/gallery/group-video.mp4", poster: "/products/af6208/gallery/group-image.jpg", alt: "AL-FAJI Original 6208, group video" },
    ],
    // Three real variants, in the order product.txt lists them (Silver,
    // Gold, Rose Gold) — not folder alphabetical order. Each variant's
    // own photo doubles as its video's poster, same as JF1603. Note:
    // the Silver variant's real filename on disk is "hand-sliver.jpg"
    // (typo for "silver") — referenced exactly as it exists, not
    // corrected, since renaming the actual asset file is outside this
    // change's scope.
    variants: [
      {
        name: "Silver",
        swatch: "#C7C7C7",
        media: [
          { type: "image", url: "/products/af6208/variants/silver/images/hand-sliver.jpg", alt: "AL-FAJI Original 6208, silver variant, worn on wrist" },
          { type: "video", url: "/products/af6208/variants/silver/videos/silver-video.mp4", poster: "/products/af6208/variants/silver/images/hand-sliver.jpg", alt: "AL-FAJI Original 6208, silver variant, demo video" },
        ],
      },
      {
        name: "Gold",
        swatch: "#D0AC3D",
        media: [
          { type: "image", url: "/products/af6208/variants/gold/images/hand-gold.jpg", alt: "AL-FAJI Original 6208, gold variant, worn on wrist" },
          { type: "video", url: "/products/af6208/variants/gold/videos/gold-video.mp4", poster: "/products/af6208/variants/gold/images/hand-gold.jpg", alt: "AL-FAJI Original 6208, gold variant, demo video" },
        ],
      },
      {
        name: "Rose Gold",
        // Not extracted from the actual photo — a standard, widely
        // recognized "rose gold" reference hue, representative rather
        // than verified against the physical product.
        swatch: "#B76E79",
        media: [
          { type: "image", url: "/products/af6208/variants/rosegold/images/hand-rosegold.jpg", alt: "AL-FAJI Original 6208, rose gold variant, worn on wrist" },
          { type: "video", url: "/products/af6208/variants/rosegold/videos/video-rosegold.mp4", poster: "/products/af6208/variants/rosegold/images/hand-rosegold.jpg", alt: "AL-FAJI Original 6208, rose gold variant, demo video" },
        ],
      },
    ],
    // Judgment calls, not stated in product.txt: genuinely new as of
    // today, but not marked featured this time — unlike JF1603 (the
    // site's first real product, a deliberate one-off milestone), every
    // new product being auto-featured would eventually crowd the
    // homepage's Featured Collection indefinitely.
    isFeatured: false,
    isNewArrival: true,
  },
];
