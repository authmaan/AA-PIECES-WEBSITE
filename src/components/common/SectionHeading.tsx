import { cn } from "@/lib/utils";
import { RevealOnScroll } from "./RevealOnScroll";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <RevealOnScroll
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="display-title text-4xl md:text-5xl text-[var(--color-brown-dark)]">
        {title}
      </h2>
      {subtitle && (
        <p className="editorial-body mt-5 text-lg md:text-xl text-[var(--color-brown)]">
          {subtitle}
        </p>
      )}
    </RevealOnScroll>
  );
}
