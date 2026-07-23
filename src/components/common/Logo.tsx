import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "horizontal" | "vertical" | "monogram";
  tone?: "darkbrown" | "gold" | "offwhite" | "lightyellow";
  className?: string;
  priority?: boolean;
}

const SOURCES: Record<string, string> = {
  "horizontal-darkbrown": "/brand/logo/aa-pieces-horizontal-darkbrown.png",
  "vertical-darkbrown": "/brand/logo/aa-pieces-vertical-darkbrown.png",
  "vertical-gold": "/brand/logo/aa-pieces-vertical-gold.png",
  "vertical-offwhite": "/brand/logo/aa-pieces-vertical-offwhite.png",
  "vertical-lightyellow": "/brand/logo/aa-pieces-vertical-lightyellow.png",
  "monogram-darkbrown": "/brand/monogram/monogram-darkbrown.png",
  "monogram-offwhite": "/brand/monogram/monogram-offwhite.png",
  "monogram-lightyellow": "/brand/monogram/monogram-light-yellow.png",
};

export function Logo({
  variant = "horizontal",
  tone = "darkbrown",
  className,
  priority,
}: LogoProps) {
  const key = `${variant}-${tone}`;
  const src = SOURCES[key] ?? SOURCES["horizontal-darkbrown"];

  return (
    <Link href="/" className={cn("inline-flex items-center", className)} aria-label="AA PIECES — home">
      <Image
        src={src}
        alt="AA PIECES"
        width={variant === "monogram" ? 44 : 200}
        height={variant === "monogram" ? 44 : 56}
        priority={priority}
        className="h-auto w-auto object-contain"
      />
    </Link>
  );
}
