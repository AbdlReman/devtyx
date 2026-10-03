import type { Metadata } from "next";
import MusicAppDevelopersContent from "@/components/music-app-developers/MusicAppDevelopersContent";
import { faqCategories } from "@/components/music-app-developers/data/music-app-developers-data";
import { getAllBlogPosts } from "@/lib/models/blog";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Music App Developers",
  description:
    "DEVTYX designs, builds and scales music apps — streaming, podcast, fan, learning, karaoke, DJ and more — for iOS, Android and web.",
  path: "/music-app-developers",
  keywords: ["music app development", "music streaming app developers", "podcast app development", "music app developers"],
});

const RELATED_KEYWORDS = ["music", "spotify", "podcast", "karaoke", "radio", "streaming"];

export default async function MusicAppDevelopersPage() {
  const allFaqs = faqCategories.flatMap((cat) => cat.items);
  const allPosts = await getAllBlogPosts().catch(() => []);
  const relatedPosts = allPosts.filter((post) =>
    RELATED_KEYWORDS.some((kw) => post.slug.includes(kw) || post.title.toLowerCase().includes(kw))
  );

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Music App Developers", path: "/music-app-developers" }])} />
      <JsonLd data={faqJsonLd(allFaqs)} />
      <MusicAppDevelopersContent relatedPosts={relatedPosts} />
    </>
  );
}
