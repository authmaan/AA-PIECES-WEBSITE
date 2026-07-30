"use client";

import { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Volume2,
  VolumeX,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { AnimatedImage } from "@/components/common/AnimatedImage";
import { GalleryThumbnail } from "./GalleryThumbnail";
import { ProductMedia } from "@/types/product";
import { EASE_PREMIUM } from "@/lib/animations/variants";

interface GalleryLightboxProps {
  media: ProductMedia[];
  activeIndex: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: (index: number) => void;
  ariaLabel: string;
}

/**
 * Fullscreen gallery viewer — Phase 3A. Fully controlled: this component
 * owns no persistent selection state of its own (activeIndex/open live in
 * ProductGallery, which already tracks them for the inline view). Zoom
 * and mute are the only state local to this component, since neither
 * needs to persist outside the lightbox.
 *
 * Built on Radix Dialog (already an existing dependency, unused until
 * now) for focus trap, Escape-to-close, and portal rendering — all
 * handled for free rather than reimplemented. Radix's `forceMount` +
 * Framer Motion's AnimatePresence is the standard way to animate a Radix
 * primitive's open/close rather than relying on Radix's own CSS-based
 * animation hooks, which is what makes the crossfade/scale entrance here
 * consistent with the rest of the site's motion language.
 *
 * Keyboard: Escape closes (native to Radix). Left/Right directly change
 * the active image — a deliberate difference from the inline thumbnail
 * strip, where arrow keys only move focus and Enter/Space selects. That
 * distinction is intentional: the inline strip is a selection control
 * (radio-like), while this is an immersive viewer, where arrow-keys-page
 * directly is the standard convention (native OS photo viewers, virtually
 * every lightbox implementation).
 *
 * Zoom is click-to-toggle (not a continuous cursor-following magnifier),
 * anchored to the click point via transform-origin — simpler, and unlike
 * a hover-magnifier, works the same way regardless of pointer type. Only
 * available here, not on the inline hero, per this phase's scope.
 *
 * Video gets custom play/pause + mute controls here instead of the
 * native browser chrome the inline gallery still uses — a deliberate,
 * scoped difference; the inline video is untouched.
 */
export function GalleryLightbox({
  media,
  activeIndex,
  open,
  onOpenChange,
  onNavigate,
  ariaLabel,
}: GalleryLightboxProps) {
  const [zoomed, setZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState("50% 50%");
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const active = media[activeIndex];

  function goTo(index: number) {
    setZoomed(false);
    setVideoPlaying(false);
    onNavigate((index + media.length) % media.length);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(activeIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(activeIndex - 1);
    }
  }

  function handleImageClick(event: React.MouseEvent<HTMLDivElement>) {
    if (!zoomed) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      setZoomOrigin(`${x}% ${y}%`);
    }
    setZoomed((z) => !z);
  }

  function toggleVideoPlayback() {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setVideoPlaying(true);
    } else {
      el.pause();
      setVideoPlaying(false);
    }
  }

  if (!active) return null;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                className="fixed inset-0 z-[70] bg-black/95"
              />
            </Dialog.Overlay>

            <Dialog.Content
              asChild
              forceMount
              onKeyDown={handleKeyDown}
              aria-label={ariaLabel}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                className="fixed inset-0 z-[71] flex flex-col outline-none"
              >
                <Dialog.Title className="sr-only">{ariaLabel}</Dialog.Title>

                {/* Top bar: counter + close */}
                <div className="flex items-center justify-between px-6 py-5">
                  <p className="label-nav text-xs text-[var(--color-cream)]/70">
                    {activeIndex + 1} / {media.length}
                  </p>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Close"
                      className="text-[var(--color-cream)] hover:text-[var(--color-gold)] transition-colors"
                    >
                      <X className="w-6 h-6" strokeWidth={1.5} />
                    </button>
                  </Dialog.Close>
                </div>

                {/* Stage */}
                <div className="relative flex-1 flex items-center justify-center px-4 pb-4 overflow-hidden">
                  {media.length > 1 && (
                    <button
                      type="button"
                      onClick={() => goTo(activeIndex - 1)}
                      aria-label="Previous"
                      className="absolute left-2 sm:left-6 z-10 text-[var(--color-cream)]/70 hover:text-[var(--color-gold)] transition-colors"
                    >
                      <ChevronLeft className="w-8 h-8" strokeWidth={1.5} />
                    </button>
                  )}

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.28, ease: EASE_PREMIUM }}
                      className="relative w-full h-full max-w-5xl max-h-full flex items-center justify-center"
                    >
                      {active.type === "video" ? (
                        <div className="relative w-full max-h-full aspect-square max-w-[min(90vw,80vh)]">
                          <video
                            ref={videoRef}
                            src={active.url}
                            poster={active.poster}
                            playsInline
                            muted={videoMuted}
                            className="h-full w-full object-contain"
                            aria-label={active.alt}
                            onPlay={() => setVideoPlaying(true)}
                            onPause={() => setVideoPlaying(false)}
                          />
                          <button
                            type="button"
                            onClick={toggleVideoPlayback}
                            aria-label={videoPlaying ? "Pause video" : "Play video"}
                            className="absolute inset-0 flex items-center justify-center group"
                          >
                            {!videoPlaying && (
                              <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-cream)]/90 group-hover:bg-[var(--color-cream)] transition-colors">
                                <Play className="w-6 h-6 text-[var(--color-black)] fill-[var(--color-black)] ml-1" strokeWidth={0} />
                              </span>
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => setVideoMuted((m) => !m)}
                            aria-label={videoMuted ? "Unmute" : "Mute"}
                            className="absolute bottom-3 right-3 text-[var(--color-cream)] hover:text-[var(--color-gold)] transition-colors"
                          >
                            {videoMuted ? (
                              <VolumeX className="w-5 h-5" strokeWidth={1.5} />
                            ) : (
                              <Volume2 className="w-5 h-5" strokeWidth={1.5} />
                            )}
                          </button>
                        </div>
                      ) : (
                        <div
                          onClick={handleImageClick}
                          className={zoomed ? "cursor-zoom-out" : "cursor-zoom-in"}
                          style={{ width: "100%", height: "100%" }}
                        >
                          <motion.div
                            animate={{ scale: zoomed ? 2 : 1 }}
                            transition={{ duration: 0.35, ease: EASE_PREMIUM }}
                            style={{ transformOrigin: zoomOrigin, width: "100%", height: "100%" }}
                          >
                            <AnimatedImage
                              src={active.url}
                              alt={active.alt}
                              containerClassName="h-full w-full"
                              className="object-contain"
                            />
                          </motion.div>
                          <span className="absolute bottom-3 right-3 flex items-center gap-1.5 label-nav text-[10px] text-[var(--color-cream)]/60 pointer-events-none">
                            {zoomed ? (
                              <ZoomOut className="w-3.5 h-3.5" strokeWidth={1.5} />
                            ) : (
                              <ZoomIn className="w-3.5 h-3.5" strokeWidth={1.5} />
                            )}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {media.length > 1 && (
                    <button
                      type="button"
                      onClick={() => goTo(activeIndex + 1)}
                      aria-label="Next"
                      className="absolute right-2 sm:right-6 z-10 text-[var(--color-cream)]/70 hover:text-[var(--color-gold)] transition-colors"
                    >
                      <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
                    </button>
                  )}
                </div>

                {/* Thumbnail strip */}
                {media.length > 1 && (
                  <div className="flex gap-3 justify-center px-6 py-5 overflow-x-auto" role="group" aria-label={ariaLabel}>
                    {media.map((item, index) => (
                      <GalleryThumbnail
                        key={item.url + index}
                        media={item}
                        index={index}
                        isActive={index === activeIndex}
                        heroId="lightbox-stage"
                        onSelect={() => goTo(index)}
                        onKeyDown={() => {}}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
