import Image from "next/image";
import { processSteps } from "../data/enterprise-app-development-data";

export default function EnterpriseProcessSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">How We Work</div>
          </div>
          <h2 className="lt-h2">Our Enterprise App Development Process</h2>
          <p className="lt-lead">
            An agile, milestone-driven process with two-week sprints and a demo at the end of every
            cycle — so you see working software before you see the invoice.
          </p>
        </div>

        <div
          style={{
            position: "relative",
            aspectRatio: "16/7",
            borderRadius: "1.5rem",
            overflow: "hidden",
            border: "1px solid #E5E7EB",
            boxShadow: "0 20px 50px rgba(108,76,255,0.12)",
            marginBottom: "3rem",
          }}
        >
          <Image
            src="/images/enterprise-app/enterprise-software-process-1.jpg"
            alt="DEVTYX enterprise app development process from discovery to support"
            fill
            className="object-cover object-center"
          />
        </div>

        <div
          style={{ display: "grid", gap: "1.25rem", gridTemplateColumns: "repeat(4, minmax(0,1fr))" }}
          className="lt-process-grid"
        >
          {processSteps.map((s) => (
            <div key={s.step} className="lt-process-card">
              <div className="lt-process-num">{s.step}</div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: "0.8rem", color: "#6B7280", lineHeight: 1.75 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <p className="lt-lead" style={{ textAlign: "center", marginTop: "2.5rem" }}>
          Most projects kick off within two weeks of our first conversation.
        </p>
      </div>
    </section>
  );
}
