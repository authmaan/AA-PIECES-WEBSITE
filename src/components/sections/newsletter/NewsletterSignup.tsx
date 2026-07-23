"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { buttonHover } from "@/lib/animations/variants";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    // Phase 2: wire to real email provider (Resend / Mailchimp / Klaviyo).
    setStatus("submitted");
  }

  return (
    <section className="bg-[var(--color-brown-dark)] py-20 md:py-28">
      <div className="container-boutique">
        <div className="max-w-xl mx-auto text-center">
          <RevealOnScroll variant="fade-up">
            <p className="eyebrow text-[var(--color-gold)] mb-5">Stay Informed</p>
            <h2 className="display-title text-3xl md:text-4xl text-[var(--color-cream)] mb-4">
              Join the Circle
            </h2>
            <p className="editorial-body text-[var(--color-cream)]/70 text-lg mb-10">
              New arrivals, Time Talks essays, and quiet updates from the
              boutique. No noise, no spam — just what&apos;s worth your time.
            </p>
          </RevealOnScroll>

          <RevealOnScroll variant="fade-up" delay={0.1}>
            {status === "idle" ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 bg-transparent border-b border-[var(--color-cream)]/30 text-[var(--color-cream)] placeholder:text-[var(--color-cream)]/40 py-3 px-1 focus:border-[var(--color-gold)] outline-none transition-colors editorial-body text-lg"
                />
                <motion.button
                  type="submit"
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonHover}
                  className="label-nav inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--color-gold)] text-[var(--color-black)] whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </motion.button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 text-[var(--color-gold)] label-nav py-3">
                <Check className="w-5 h-5" strokeWidth={2} />
                Welcome to the circle. Check your inbox.
              </div>
            )}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
