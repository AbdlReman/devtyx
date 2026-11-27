import Link from "next/link";
import { chooseChecklist } from "../data/software-development-partner-data";

export default function PartnerChecklistSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Checklist</div>
          </div>
          <h2 className="lt-h2">How to Choose the Right Software Development Partner</h2>
          <p className="lt-lead">
            Whoever you hire, ask these questions before you sign.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1rem",
            maxWidth: "820px",
            margin: "0 auto",
          }}
        >
          {chooseChecklist.map((item, i) => (
            <div
              key={item.q}
              className="lt-why-card"
              style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "999px",
                  background: "rgba(108,76,255,0.1)",
                  color: "#6C4CFF",
                  fontWeight: 800,
                  fontSize: "0.85rem",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {i + 1}
              </span>
              <div>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.35rem" }}>
                  {item.q}
                </h3>
                <p style={{ fontSize: "0.86rem", color: "#6B7280", lineHeight: 1.7, margin: 0 }}>
                  {item.a}
                </p>
              </div>
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
          For a full checklist, read{" "}
          <Link href="/blog" style={{ color: "#6C4CFF", fontWeight: 600 }}>
            how to choose an enterprise app development company
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
