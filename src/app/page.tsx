import { HomeHero } from "@/components/sections/hero/HomeHero";
import { BrandPhilosophy } from "@/components/sections/philosophy/BrandPhilosophy";
import { FeaturedCollection } from "@/components/sections/collection/FeaturedCollection";
import { SpotlightPreview } from "@/components/sections/spotlight/SpotlightPreview";
import { TimeTalksPreview } from "@/components/sections/time-talks/TimeTalksPreview";
import { WatchStoriesPreview } from "@/components/sections/watch-stories/WatchStoriesPreview";
import { CustomerExperiences } from "@/components/sections/testimonials/CustomerExperiences";
import { InstagramPreview } from "@/components/sections/social/InstagramPreview";
import { NewsletterSignup } from "@/components/sections/newsletter/NewsletterSignup";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BrandPhilosophy />
      <FeaturedCollection />
      <SpotlightPreview />
      <TimeTalksPreview />
      <WatchStoriesPreview />
      <CustomerExperiences />
      <InstagramPreview />
      <NewsletterSignup />
    </>
  );
}
