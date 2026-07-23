import { MagneticButton } from "@/components/common/MagneticButton";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-24">
      <div className="container-boutique text-center max-w-lg">
        <p className="eyebrow mb-6">404</p>
        <h1 className="display-hero text-[var(--color-brown-dark)] text-5xl md:text-6xl mb-6">
          This Page Has Run Out of Time
        </h1>
        <p className="editorial-body text-lg text-[var(--color-brown)] mb-10">
          The page you&apos;re looking for doesn&apos;t exist, or has moved.
          Let&apos;s get you back to the collection.
        </p>
        <MagneticButton href="/">Return Home</MagneticButton>
      </div>
    </div>
  );
}
