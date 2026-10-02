import packagesJson from "./packages.json";
import type { ServicePackage } from "@/lib/models/package";

export const staticPackages: ServicePackage[] = (packagesJson as Omit<ServicePackage, "serviceId">[]).map(
  (pkg) => ({ ...pkg, serviceId: pkg.serviceSlug })
);

export function getAllPackages(): ServicePackage[] {
  return staticPackages;
}

export function getPackagesByServiceSlug(slug: string): ServicePackage[] {
  return staticPackages.filter((pkg) => pkg.serviceSlug === slug);
}
