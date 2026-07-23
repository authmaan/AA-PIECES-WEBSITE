/**
 * Self-hosted brand typography via @fontsource.
 *
 * We deliberately use @fontsource (font files shipped as npm packages)
 * rather than next/font/google. Functionally both self-host the fonts in
 * production with zero layout shift and no runtime Google request — but
 * @fontsource has zero *build-time* network dependency too, which matters
 * for CI pipelines, offline dev environments, and any network-restricted
 * setup. It's a strictly more portable choice with no real downside here.
 *
 * Weights are hand-picked to match exactly what the design system uses
 * (see globals.css) — no unused weights are shipped.
 */
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/500-italic.css";

import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500-italic.css";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
