import Link from "next/link";
import { specializedServices } from "@/lib/data/specialized-services";

export default function PortfolioRelatedServicesSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Related Services</div>
          </div>
          <h2 className="lt-h2">Need a similar product built?</h2>
          <p className="lt-lead">
            Browse specialized mobile and product offerings connected to the work in our portfolio.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.65rem",
          }}
        >
          {specializedServices.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="lt-tech-tag"
              style={{
                textDecoration: "none",
                padding: "0.55rem 1rem",
                fontSize: "0.82rem",
                fontWeight: 600,
              }}
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
