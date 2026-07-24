import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Next.js blocks optimizing local SVGs by default (a real security guard —
 * see GHSA-q8wf-6r8g-63ch). Sample product art here is SVG; used to decide
 * when <Image> needs `unoptimized` so the file loads instead of erroring.
 */
export function isSvgSrc(src: string) {
  return src.toLowerCase().endsWith(".svg");
}

/** Formats a price in Naira, e.g. 1250000 -> "₦1,250,000" */
export function formatPrice(amount: number, currency: "NGN" | "USD" = "NGN") {
  const symbol = currency === "NGN" ? "₦" : "$";
  return `${symbol}${amount.toLocaleString("en-US")}`;
}

/** Builds a wa.me deep link pre-filled with a message */
export function buildWhatsAppLink(phone: string, message: string) {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
