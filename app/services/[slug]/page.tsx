import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ServiceDetailContent from "@/components/services/ServiceDetailContent";
import { getAllServices, getServiceBySlug } from "@/lib/data/services";
import { getPackagesByServiceSlug } from "@/lib/data/packages";
import { breadcrumbJsonLd, buildMetadata, serviceJsonLd } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return getAllServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    image: service.image,
    keywords: [service.category, service.title],
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const packages = getPackagesByServiceSlug(service.slug);
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ];
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      <JsonLd data={serviceJsonLd(service)} />
      <ServiceDetailContent service={service} packages={packages} breadcrumbItems={breadcrumbItems} />
    </>
  );
}
