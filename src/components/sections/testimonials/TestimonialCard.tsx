import { Testimonial } from "@/types/content";
import { Divider } from "@/components/common/Divider";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col h-full">
      <p className="editorial-quote text-xl md:text-2xl text-[var(--color-brown-dark)] flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <Divider className="my-6 max-w-16" />
      <p className="label-nav text-[var(--color-brown-dark)]">
        {testimonial.customerName}
      </p>
      <p className="editorial-body text-[var(--color-brown)] text-sm mt-0.5">
        {testimonial.customerRole}
        {testimonial.productName && ` · Wearing ${testimonial.productName}`}
      </p>
    </div>
  );
}
