import Link from "next/link";
import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { industries } from "../data/mobile-app-consultation-data";

export default function ConsultIndustriesSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Industries</div>
          </div>
          <h2 className="lt-h2">Mobile App Consulting for Every Industry</h2>
          <p className="lt-lead">
            Each industry has its own users, rules and risks. We tailor our advice to yours.
          </p>
        </div>

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}
          className="lt-why-grid">
          {industries.map((item) => (
            <div key={item.title} className="lt-why-card" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                {item.title}
              </div>
              <p style={{ fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.7, flex: 1 }}>{item.desc}</p>
              {item.link && (
                <Link href={item.link.href} style={{ fontSize: "0.78rem", color: "#6C4CFF", fontWeight: 600, textDecoration: "none", marginTop: "0.75rem" }}>
                  {item.link.label} →
                </Link>
              )}
              <div style={{ marginTop: "1rem" }}>
                <QuickInquiryButton
                  className="lt-card-read"
                  style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                  source="Mobile App Consultation"
                  serviceName={item.title}
                  defaultMessage={`I'm interested in mobile app consulting for ${item.title}. `}
                >
                  View More →
                </QuickInquiryButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
