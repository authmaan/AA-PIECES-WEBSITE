# AA PIECES — Sanity CMS (Phase 1: source-ready, not yet connected)

The schema files in `schemaTypes/` are complete and deploy-ready, but this
project currently runs on local mock data (`src/lib/data/`) so it works
immediately without any external account. To go live with Sanity:

1. Run `npm install sanity next-sanity @sanity/image-url`
2. Create a project at sanity.io, note your **Project ID**
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
4. Create `sanity.config.ts` at the project root pointing to `schemaTypes/index.ts`
5. In `src/lib/data/fetchers.ts`, replace each function body with a
   `client.fetch(query)` call — the function names, arguments, and return
   types are already correct, so no other file in the app needs to change.
6. Run `npm run dev` and visit `/studio` to start entering real inventory.

This is intentionally the *only* file that needs to change when you're
ready to manage content yourself instead of through code.
