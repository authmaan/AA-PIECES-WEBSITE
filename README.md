# AA PIECES — Phase 1

Luxury watch boutique website. Built with Next.js 15, TypeScript, Tailwind
CSS v4, Framer Motion, and a CMS-ready data layer (Sanity schema included,
running on local mock data for now).

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

To verify the production build:

```bash
npm run build
npm start
```

## What's in Phase 1

- **Global layout, navigation, footer** — fully responsive, WhatsApp-led contact
- **Full design system** — colors, typography, spacing, and motion tokens in `src/app/globals.css`
- **Homepage** — Hero, Brand Philosophy, Featured Collection, Spotlight, Time Talks, Watch Stories, Customer Experiences, Instagram, Newsletter
- **Product catalog architecture** — `/collections` (search + filter + sort), `/collections/[slug]`, `/product/[slug]` detail template
- **Content architecture** — `/time-talks`, `/watch-stories` with index + detail pages
- **WhatsApp ordering flow** — every "buy" action opens a pre-filled WhatsApp message instead of a cart/checkout
- **CMS-ready data layer** — see `src/lib/data/fetchers.ts` and `sanity/README.md` for how to connect real Sanity later
- **6 original sample products** — fictional names/specs, illustrated with custom-generated SVG watch graphics (see `public/products/`) as stand-ins until real photography is available

## Sample Content Notice

All product names, references, prices, and specs in `src/lib/data/products.ts`
are entirely original and fictional, created for development purposes only.
Swap them for real inventory via the CMS once Sanity is connected (see
`sanity/README.md`), or edit the file directly in the meantime.

## Known follow-ups for Phase 2

- Connect Sanity (schema is ready in `sanity/schemaTypes/`)
- Replace sample product imagery with real photography
- Wire the newsletter form to a real email provider
- Add remaining legal pages (`/legal/privacy`, `/legal/terms`) referenced in the footer
