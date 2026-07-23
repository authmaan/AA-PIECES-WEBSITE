import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
}

export function DesktopNav({ links }: { links: NavLink[] }) {
  const whatsappHref = buildWhatsAppLink(
    SITE.whatsappNumber,
    "Hi AA PIECES, I'd like to know more about your collection."
  );

  return (
    <nav className="hidden lg:flex items-center gap-10">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="label-nav relative text-[var(--color-brown-dark)] group"
        >
          {link.label}
          <span className="absolute left-0 -bottom-1.5 h-0.5 w-full scale-x-0 origin-bottom-right bg-[var(--color-gold)] transition-transform ease-[cubic-bezier(0.16,1,0.3,1)] duration-500 group-hover:scale-x-100 group-hover:origin-bottom-left" />
        </Link>
      ))}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="label-nav inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--color-brown-dark)] text-[var(--color-brown-dark)] hover:bg-[var(--color-brown-dark)] hover:text-[var(--color-cream)] transition-colors duration-500"
      >
        <MessageCircle className="w-3.5 h-3.5" strokeWidth={2} />
        Order
      </a>
    </nav>
  );
}
