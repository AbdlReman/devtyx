import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/seo";

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: "1.25rem" }}>
      <ol
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "0.4rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
          fontSize: "0.82rem",
          color: "rgba(255,255,255,0.6)",
        }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              {index > 0 && <span aria-hidden="true">/</span>}
              {isLast ? (
                <span aria-current="page" style={{ color: "rgba(255,255,255,0.9)" }}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} style={{ color: "inherit", textDecoration: "none" }}>
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
