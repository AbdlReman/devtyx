import BlogListingContent from "@/components/blog/BlogListingContent";
import type { Metadata } from "next";
import { getBlogPostsListing } from "@/lib/models/blog";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Engineering, AI & Product Delivery Insights",
  description:
    "Articles on web engineering, cloud-native delivery, AI in production, and design systems from DEVTYX.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getBlogPostsListing();
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />
      <BlogListingContent posts={posts} />
    </>
  );
}
