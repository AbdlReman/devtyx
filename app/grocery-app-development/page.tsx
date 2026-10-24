import type { Metadata } from "next";
import GroceryAppDevelopmentContent from "@/components/grocery-app-development/GroceryAppDevelopmentContent";
import { faqCategories } from "@/components/grocery-app-development/data/grocery-app-development-data";
import { getAllBlogPosts } from "@/lib/models/blog";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Grocery App Development",
  description:
    "DEVTYX designs, builds and scales grocery apps — on-demand delivery, dark stores, supermarket, wholesale and more — for iOS, Android and web.",
  path: "/grocery-app-development",
  keywords: [
    "grocery app development",
    "grocery delivery app developers",
    "supermarket app development",
    "quick commerce app development",
    "on-demand grocery app",
  ],
});

const RELATED_KEYWORDS = ["grocery", "retail", "delivery", "ecommerce", "e-commerce", "marketplace", "food"];

export default async function GroceryAppDevelopmentPage() {
  const allFaqs = faqCategories.flatMap((cat) => cat.items);
  const allPosts = await getAllBlogPosts().catch(() => []);
  const relatedPosts = allPosts.filter((post) =>
    RELATED_KEYWORDS.some((kw) => post.slug.includes(kw) || post.title.toLowerCase().includes(kw))
  );

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Grocery App Development", path: "/grocery-app-development" }])} />
      <JsonLd data={faqJsonLd(allFaqs)} />
      <GroceryAppDevelopmentContent relatedPosts={relatedPosts} />
    </>
  );
}
