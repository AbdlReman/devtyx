import type { Metadata } from "next";
import SalonAppDevelopmentContent from "@/components/salon-app-development/SalonAppDevelopmentContent";
import { faqCategories } from "@/components/salon-app-development/data/salon-app-development-data";
import { getAllBlogPosts } from "@/lib/models/blog";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Salon App Development Company | Custom Beauty Booking Apps",
  description:
    "Build a custom salon booking app with Devtyx. Real-time scheduling, payments, staff management, loyalty & AI features. Senior-led team, 70+ products delivered, 98% client satisfaction. Get a free quote.",
  path: "/salon-app-development",
  image: "/images/salon-app/Multi-device-verview.jpg",
  keywords: [
    "salon app development company",
    "salon booking app",
    "beauty salon app development",
    "custom salon app",
    "on-demand salon app",
    "salon management app",
    "appointment booking app for salons",
  ],
});

const RELATED_KEYWORDS = [
  "salon",
  "beauty",
  "booking",
  "appointment",
  "mobile",
  "marketplace",
  "spa",
];

export default async function SalonAppDevelopmentPage() {
  const allFaqs = faqCategories.flatMap((cat) => cat.items);
  const allPosts = await getAllBlogPosts().catch(() => []);
  const relatedPosts = allPosts.filter((post) =>
    RELATED_KEYWORDS.some(
      (kw) => post.slug.includes(kw) || post.title.toLowerCase().includes(kw)
    )
  );

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Salon App Development", path: "/salon-app-development" },
        ])}
      />
      <JsonLd data={faqJsonLd(allFaqs)} />
      <SalonAppDevelopmentContent relatedPosts={relatedPosts} />
    </>
  );
}
