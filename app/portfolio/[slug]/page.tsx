import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import PortfolioDetailContent from "@/components/portfolio/PortfolioDetailContent";
import { getProjectBySlug } from "@/lib/models/project";
import { breadcrumbJsonLd, buildMetadata, creativeWorkJsonLd } from "@/lib/seo";
import { slugify } from "@/lib/slugify";
import JsonLd from "@/components/seo/JsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  const canonicalSlug = slugify(project.slug);
  return buildMetadata({
    title: project.title,
    description: project.description,
    path: `/portfolio/${canonicalSlug}`,
    image: project.image,
    keywords: [project.category, project.title, ...project.tech],
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const canonicalSlug = slugify(project.slug);
  if (slug !== canonicalSlug) {
    redirect(`/portfolio/${canonicalSlug}`);
  }

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: project.title, path: `/portfolio/${canonicalSlug}` },
  ];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      <JsonLd
        data={creativeWorkJsonLd({
          ...project,
          slug: canonicalSlug,
        })}
      />
      <PortfolioDetailContent
        project={{ ...project, slug: canonicalSlug }}
        breadcrumbItems={breadcrumbItems}
      />
    </>
  );
}
