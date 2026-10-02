import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { consultingServices } from "../data/mobile-app-consultation-data";

export default function ConsultServicesSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">What We Offer</div>
          </div>
          <h2 className="lt-h2">Our Mobile App Consulting Services</h2>
          <p className="lt-lead">
            Every engagement is shaped around your goals, whether you&apos;re validating a new idea or
            fixing an app that isn&apos;t performing. Choose one service or combine them into a complete
            app blueprint.
          </p>
        </div>

        <div style={{ display: "grid", gap: "1.25rem", gridTemplateColumns: "repeat(2, minmax(0,1fr))" }}
          className="lt-why-grid">
          {consultingServices.map((svc) => (
            <div key={svc.title} style={{ display: "flex", gap: "1rem", padding: "1.25rem", border: "1px solid #E5E7EB", borderRadius: "1rem" }}>
              <span style={{ color: "#6C4CFF", fontWeight: 700, flexShrink: 0 }}>→</span>
              <div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#111827", marginBottom: "0.35rem" }}>
                  {svc.title}
                </div>
                <p style={{ fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.6 }}>{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
          <QuickInquiryButton
            className="lt-btn"
            source="Mobile App Consultation"
            defaultMessage="I'm interested in getting started with your consultants. "
          >
            Get Started With Our Consultants →
          </QuickInquiryButton>
        </div>
      </div>
    </section>
  );
}
