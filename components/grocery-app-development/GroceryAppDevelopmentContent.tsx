import type { BlogPost } from "@/lib/models/blog";
import GroceryAudienceSection from "./sections/GroceryAudienceSection";
import GroceryCapabilitiesSection from "./sections/GroceryCapabilitiesSection";
import GroceryComparisonSection from "./sections/GroceryComparisonSection";
import GroceryCtaSection from "./sections/GroceryCtaSection";
import GroceryEndToEndSection from "./sections/GroceryEndToEndSection";
import GroceryFaqSection from "./sections/GroceryFaqSection";
import GroceryFeaturesSection from "./sections/GroceryFeaturesSection";
import GroceryHeroSection from "./sections/GroceryHeroSection";
import GroceryProcessSection from "./sections/GroceryProcessSection";
import GroceryRelatedBlogSection from "./sections/GroceryRelatedBlogSection";
import GroceryServicesSection from "./sections/GroceryServicesSection";
import GroceryStatsSection from "./sections/GroceryStatsSection";
import GroceryTechStackSection from "./sections/GroceryTechStackSection";
import GroceryTestimonialsSection from "./sections/GroceryTestimonialsSection";
import GroceryTypesSection from "./sections/GroceryTypesSection";
import GroceryWhyChooseSection from "./sections/GroceryWhyChooseSection";

export default function GroceryAppDevelopmentContent({ relatedPosts }: { relatedPosts: BlogPost[] }) {
  return (
    <div className="min-h-screen">
      <main>
        <GroceryHeroSection />
        <GroceryStatsSection />
        <GroceryTypesSection />
        <GroceryEndToEndSection />
        <GroceryCapabilitiesSection />
        <GroceryFeaturesSection />
        <GroceryServicesSection />
        <GroceryComparisonSection />
        <GroceryWhyChooseSection />
        <GroceryProcessSection />
        <GroceryTechStackSection />
        <GroceryAudienceSection />
        <GroceryTestimonialsSection />
        <GroceryFaqSection />
        <GroceryRelatedBlogSection posts={relatedPosts} />
        <GroceryCtaSection />
      </main>
    </div>
  );
}
