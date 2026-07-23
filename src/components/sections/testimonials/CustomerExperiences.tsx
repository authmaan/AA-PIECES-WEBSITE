import { SectionHeading } from "@/components/common/SectionHeading";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import { TestimonialCard } from "./TestimonialCard";
import { getTestimonials } from "@/lib/data/fetchers";

export async function CustomerExperiences() {
  const testimonials = await getTestimonials();

  return (
    <section className="bg-[var(--color-cream)] py-24 md:py-32">
      <div className="container-boutique">
        <SectionHeading
          eyebrow="Customer Experiences"
          title="Worn by People Who Notice Details"
          align="center"
          className="mx-auto mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={t._id} variant="fade-up" delay={i * 0.08}>
              <TestimonialCard testimonial={t} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
