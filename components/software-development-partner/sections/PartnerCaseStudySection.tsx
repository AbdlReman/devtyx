import Link from "next/link";

export default function PartnerCaseStudySection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Case Study</div>
          </div>
          <h2 className="lt-h2">Long-term partnership in production</h2>
        </div>

        <div className="lt-why-card" style={{ maxWidth: "820px", margin: "0 auto", padding: "2rem" }}>
          <div
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: "#6C4CFF",
              marginBottom: "0.75rem",
              textTransform: "uppercase",
            }}
          >
            Real Estate · PropTech
          </div>
          <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#111827", marginBottom: "0.85rem" }}>
            Node PropTech — Compliance-native real estate tokenization platform
          </h3>
          <p style={{ fontSize: "0.95rem", color: "#4B5563", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            DEVTYX engineered a real estate technology platform providing compliance-native
            infrastructure for tokenized assets, including KYC/AML identity verification, accredited
            investor verification, SPV-based asset structuring, automated capital flows, investor
            management and digital cap table management.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/portfolio" className="lt-btn">
              Explore Portfolio →
            </Link>
            <Link href="/reviews" className="lt-svc-link" style={{ alignSelf: "center" }}>
              See all client reviews →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
