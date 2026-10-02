import Link from "next/link";
import type { Project } from "@/lib/models/project";

export default function ConsultCaseStudiesSection({ projects }: { projects: Project[] }) {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Case Studies</div>
          </div>
          <h2 className="lt-h2">Apps Shaped by DEVTYX Consulting</h2>
          <p className="lt-lead">
            See how our strategy, technology advice and planning helped clients launch better apps, faster.
          </p>
        </div>

        {projects.length > 0 ? (
          <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}
            className="lt-why-grid">
            {projects.slice(0, 3).map((project) => (
              <div key={project.slug} className="lt-why-card" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#6C4CFF", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
                  {project.category}
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                  {project.title}
                </div>
                <p style={{ fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.7, flex: 1 }}>
                  {project.tagline || project.description}
                </p>
                {project.highlight && (
                  <p style={{ fontSize: "0.78rem", color: "#374151", lineHeight: 1.6, fontStyle: "italic", marginTop: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid #F3F4F6" }}>
                    &ldquo;{project.highlight}&rdquo;
                  </p>
                )}
                <Link href={`/portfolio/${project.slug}`} className="lt-card-read" style={{ marginTop: "1rem" }}>
                  View Case Study →
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <p className="lt-lead" style={{ marginBottom: "1.5rem" }}>
              Explore our full portfolio of real client projects.
            </p>
            <Link href="/portfolio" className="lt-btn" style={{ justifyContent: "center", display: "inline-flex" }}>
              See Our Work →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
