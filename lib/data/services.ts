import servicesJson from "./services.json";
import type { ServiceDetail } from "@/lib/models/service";

export const staticServices: ServiceDetail[] = servicesJson as ServiceDetail[];

export function getAllServices(): ServiceDetail[] {
  return staticServices;
}

export function getServiceBySlug(slug: string): ServiceDetail | null {
  return staticServices.find((service) => service.slug === slug) ?? null;
}
