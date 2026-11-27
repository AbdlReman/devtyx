import { appTypes } from "../data/enterprise-app-development-data";

export default function EnterpriseTypesSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Applications</div>
          </div>
          <h2 className="lt-h2">Types of Enterprise Applications We Build</h2>
          <p className="lt-lead">
            From ERP extensions and portals to AI assistants and field workforce apps — platforms that
            run the business day to day.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "0.85rem",
            gridTemplateColumns: "repeat(2, minmax(0,1fr))",
            maxWidth: "960px",
            margin: "0 auto",
          }}
          className="lt-why-grid"
        >
          {appTypes.map((type) => (
            <div
              key={type}
              style={{
                display: "flex",
                gap: "0.75rem",
                alignItems: "flex-start",
                padding: "1rem 1.15rem",
                borderRadius: "1rem",
                border: "1px solid #E5E7EB",
                background: "#fff",
              }}
            >
              <span style={{ color: "#6C4CFF", fontWeight: 700, flexShrink: 0 }}>→</span>
              <span style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.6 }}>{type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
