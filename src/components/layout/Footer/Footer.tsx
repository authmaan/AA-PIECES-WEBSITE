import { MessageCircle, Camera, Mail } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { Divider } from "@/components/common/Divider";
import { FOOTER_LINKS, SITE } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";

export function Footer() {
  const whatsappHref = buildWhatsAppLink(
    SITE.whatsappNumber,
    "Hi AA PIECES, I'd like to know more about your collection."
  );
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-black)] text-[var(--color-cream)]">
      <div className="container-boutique pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12 lg:gap-8">
          {/* Brand column */}
          <div>
            <Logo variant="vertical" tone="offwhite" className="mb-6" />
            <p className="editorial-body text-lg italic text-[var(--color-cream)]/80 max-w-xs">
              {SITE.philosophy}
            </p>
          </div>

          {/* Shop links */}
          <div>
            <p className="eyebrow mb-5 text-[var(--color-gold)]">Shop</p>
            <ul className="space-y-3">
              {FOOTER_LINKS.shop.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="label-nav text-[var(--color-cream)]/75 hover:text-[var(--color-gold)] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand links */}
          <div>
            <p className="eyebrow mb-5 text-[var(--color-gold)]">The Brand</p>
            <ul className="space-y-3">
              {FOOTER_LINKS.brand.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="label-nav text-[var(--color-cream)]/75 hover:text-[var(--color-gold)] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — WhatsApp led */}
          <div>
            <p className="eyebrow mb-5 text-[var(--color-gold)]">Reach Us</p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="label-nav inline-flex items-center gap-2 px-5 py-3 bg-[#3a7d44] text-[var(--color-cream)] mb-5 hover:bg-[#2f6838] transition-colors"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={2} />
              Chat on WhatsApp
            </a>
            <div className="flex flex-col gap-3">
              <a href={`mailto:${SITE.email}`} className="label-nav text-[var(--color-cream)]/75 hover:text-[var(--color-gold)] inline-flex items-center gap-2 transition-colors">
                <Mail className="w-3.5 h-3.5" /> {SITE.email}
              </a>
              <a href={`https://instagram.com/${SITE.instagram}`} target="_blank" rel="noopener noreferrer" className="label-nav text-[var(--color-cream)]/75 hover:text-[var(--color-gold)] inline-flex items-center gap-2 transition-colors">
                <Camera className="w-3.5 h-3.5" /> @{SITE.instagram}
              </a>
            </div>
          </div>
        </div>

        <Divider className="my-12 opacity-30" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="label-nav text-[var(--color-cream)]/50 text-xs">
            © {year} {SITE.name}. {SITE.motto}
          </p>
          <div className="flex gap-6">
            <a href="/legal/privacy" className="label-nav text-[var(--color-cream)]/50 text-xs hover:text-[var(--color-gold)] transition-colors">Privacy</a>
            <a href="/legal/terms" className="label-nav text-[var(--color-cream)]/50 text-xs hover:text-[var(--color-gold)] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
