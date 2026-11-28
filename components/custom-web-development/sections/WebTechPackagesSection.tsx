import Link from "next/link";
import { packages, techStack } from "../data/custom-web-development-data";

export default function WebTechPackagesSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Stack & Pricing</div>
          </div>
          <h2 className="lt-h2">Technology We Use for Custom Web Development</h2>
          <p className="lt-lead">
            We choose technology for your goals, team and budget — not because it is fashionable.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            marginBottom: "3.5rem",
          }}
        >
          {techStack.map((row) => (
            <div key={row.label} className="lt-why-card">
              <div
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#6C4CFF",
                  marginBottom: "0.55rem",
                }}
              >
                {row.label}
              </div>
              <p style={{ fontSize: "0.88rem", color: "#374151", lineHeight: 1.6, margin: 0 }}>
                {row.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 2.5rem" }}>
          <h2 className="lt-h2">Packages and Pricing</h2>
          <p className="lt-lead">
            Clear starting points for many projects. Larger platforms are quoted after discovery
            with an itemised estimate.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          }}
        >
          {packages.map((pkg) => (
            <div key={pkg.name} className="lt-why-card" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#6C4CFF", marginBottom: "0.4rem" }}>
                {pkg.name}
              </div>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "#111827", marginBottom: "0.25rem" }}>
                {pkg.price}
              </div>
              <div style={{ fontSize: "0.82rem", color: "#9CA3AF", marginBottom: "1rem" }}>
                Typical delivery: {pkg.days}
              </div>
              <p style={{ fontSize: "0.86rem", color: "#6B7280", lineHeight: 1.7, margin: 0, flex: 1 }}>
                {pkg.includes}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "2rem",
            fontSize: "0.9rem",
            color: "#6B7280",
          }}
        >
          Also listed on{" "}
          <Link href="/services/web-custom-software" style={{ color: "#6C4CFF", fontWeight: 600 }}>
            Web &amp; Custom Software
          </Link>
          . For complex budgets, see our{" "}
          <Link href="/blog" style={{ color: "#6C4CFF", fontWeight: 600 }}>
            enterprise app development cost
          </Link>{" "}
          guide.
        </p>
      </div>
    </section>
  );
}
