import Image from "next/image";
import QuickInquiryButton from "@/components/contact/QuickInquiryButton";
import { benefits } from "../data/mobile-app-consultation-data";

export default function ConsultBenefitsSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ display: "grid", gap: "3rem", alignItems: "center", marginBottom: "3.5rem" }}
          className="lt-split-heading">
          <div>
            <div className="lt-kicker">Benefits</div>
            <h2 className="lt-h2">Benefits of Mobile App Consultation</h2>
            <p className="lt-lead" style={{ margin: 0 }}>
              A few weeks of expert planning can save months of rework. Here&apos;s what consulting gives
              you before development starts — including a documented app blueprint you walk away with.
            </p>
          </div>
          <Image
            src="/images/app-consultation-images/03-app-blueprint-deliverable-transparent.webp"
            alt="A DEVTYX app blueprint: cost estimate, feature priority, timeline and roadmap, and recommended tech stack"
            width={1600}
            height={820}
            className="object-contain"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}
          className="lt-why-grid">
          {benefits.map((item) => (
            <div key={item.title} className="lt-why-card">
              <div className="lt-why-icon">
                <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
              </div>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                {item.title}
              </div>
              <p style={{ fontSize: "0.82rem", color: "#6B7280", lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
          <QuickInquiryButton
            className="lt-btn"
            source="Mobile App Consultation"
            defaultMessage="I'd like to discuss my app idea. "
          >
            Discuss Your Idea Today →
          </QuickInquiryButton>
        </div>
      </div>
    </section>
  );
}
