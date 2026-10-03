import Image from "next/image";
import { processSteps } from "../data/mobile-app-consultation-data";

export default function ConsultProcessSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">How It Works</div>
          </div>
          <h2 className="lt-h2">How Our Mobile App Consulting Works</h2>
        </div>

        <div style={{ borderRadius: "1.5rem", overflow: "hidden", border: "1px solid #E5E7EB", boxShadow: "0 20px 50px rgba(108,76,255,0.12)", marginBottom: "3rem" }}>
          <Image
            src="/images/app-consultation-images/04-how-consulting-works.webp"
            alt="DEVTYX mobile app consulting process: free consultation, discovery, research, planning, blueprint and next steps"
            width={3200}
            height={1640}
            className="object-contain"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}
          className="lt-process-grid">
          {processSteps.map((s) => (
            <div key={s.step} className="lt-process-card">
              <div className="lt-process-icon">
                <span style={{ fontSize: "1.4rem" }}>{s.icon}</span>
              </div>
              <div className="lt-process-num">{s.step}</div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: "0.8rem", color: "#6B7280", lineHeight: 1.75 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
