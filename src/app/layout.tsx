import type { Metadata } from "next";
import "@/lib/fonts";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import { SITE } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description:
    "AA PIECES is a luxury watch boutique built on one belief: time is the only thing money cannot buy, yet the only thing worth investing in. Discover timepieces that fit your lifestyle.",
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.philosophy,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.philosophy,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/*
        suppressHydrationWarning on <body> only (never <html>, which would
        mask real issues) — this is React's documented fix for the most
        common false-positive hydration warning: browser extensions like
        Grammarly or DarkReader inject attributes into <body> before React
        hydrates, tripping a warning for a mismatch that isn't an app bug.
      */}
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
