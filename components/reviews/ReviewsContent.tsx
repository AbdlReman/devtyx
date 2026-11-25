import ReviewsCtaSection from "./sections/ReviewsCtaSection";
import ReviewsHeroSection from "./sections/ReviewsHeroSection";
import ReviewsPlatformsSection from "./sections/ReviewsPlatformsSection";
import ReviewsTestimonialsSection from "./sections/ReviewsTestimonialsSection";

export default function ReviewsContent() {
  return (
    <div className="min-h-screen">
      <main>
        <ReviewsHeroSection />
        <ReviewsPlatformsSection />
        <ReviewsTestimonialsSection />
        <ReviewsCtaSection />
      </main>
    </div>
  );
}
