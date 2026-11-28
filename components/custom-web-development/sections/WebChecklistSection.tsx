import Link from "next/link";
import { chooseQuestions, yesNoChecklist } from "../data/custom-web-development-data";

export default function WebChecklistSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Checklist</div>
          </div>
          <h2 className="lt-h2">Custom Web Development or Off-the-Shelf?</h2>
          <p className="lt-lead">
            Custom development is usually the right call if you answer yes to two or more of these:
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "0.85rem",
            maxWidth: "820px",
            margin: "0 auto 3rem",
          }}
        >
          {yesNoChecklist.map((item, i) => (
            <div
              key={item}
              className="lt-why-card"
              style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: "1.75rem",
                  height: "1.75rem",
                  borderRadius: "0.4rem",
                  border: "2px solid #6C4CFF",
                  color: "#6C4CFF",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {i + 1}
              </span>
              <p style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.65, margin: 0 }}>{item}</p>
            </div>
          ))}
        </div>

        <p
          className="lt-lead"
          style={{
            textAlign: "center",
            maxWidth: "640px",
            margin: "0 auto 3rem",
          }}
        >
          If you answered no to most of them, a template may serve you well today. We will tell you
          honestly if that is the case.
        </p>

        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 2.5rem" }}>
          <h2 className="lt-h2">How to Choose a Custom Web Development Company</h2>
          <p className="lt-lead">Ask every agency these questions before you sign.</p>
        </div>

        <div style={{ display: "grid", gap: "1rem", maxWidth: "820px", margin: "0 auto" }}>
          {chooseQuestions.map((item, i) => (
            <div key={item.q} className="lt-why-card" style={{ display: "flex", gap: "1rem" }}>
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

        <p style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.9rem", color: "#6B7280" }}>
          Prefer a long-term partner? Read{" "}
          <Link href="/software-development-partner" style={{ color: "#6C4CFF", fontWeight: 600 }}>
            software development partner
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
