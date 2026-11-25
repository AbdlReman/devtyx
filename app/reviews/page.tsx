import ReviewsContent from "@/components/reviews/ReviewsContent";
import type { Metadata } from "next";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Client Reviews",
  description:
    "Read DEVTYX client reviews on Google, Clutch, and TechBehemoths — real feedback from teams we've shipped with worldwide.",
  path: "/reviews",
  keywords: ["DEVTYX reviews", "client testimonials", "Clutch", "Google reviews", "TechBehemoths"],
});

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ])}
      />
      <ReviewsContent />
    </>
  );
}
