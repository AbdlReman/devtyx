import Link from "next/link";
import { googleReviewsUrl } from "@/components/about/data/about-data";

export default function MusicTestimonialsSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Client Stories</div>
          </div>
          <h2 className="lt-h2">Trusted by 120+ clients across 23+ countries.</h2>
          <p className="lt-lead" style={{ marginBottom: "2rem" }}>
            We let our work speak for itself — read genuine, unedited reviews from the clients we&apos;ve built for.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "999px",
                border: "1px solid #E5E7EB",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#111827",
                textDecoration: "none",
                background: "#FFFFFF",
              }}
            >
              <span style={{ color: "#F59E0B" }}>★★★★★</span>
              See our reviews on Google
            </a>
            <Link href="/about" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "999px",
              border: "1px solid #E5E7EB",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#111827",
              textDecoration: "none",
            }}>
              Read client stories →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
