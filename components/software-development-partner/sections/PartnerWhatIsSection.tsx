import { partnerLifecycle } from "../data/software-development-partner-data";

export default function PartnerWhatIsSection() {
  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Definition</div>
          </div>
          <h2 className="lt-h2" style={{ marginBottom: "1rem" }}>
            What Is a Software Development Partner?
          </h2>
          <p className="lt-lead">
            A software development partner is an external engineering company that takes shared
            responsibility for the success of your software — not just for the hours billed. A good
            partner works with you across the whole product lifecycle:
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {partnerLifecycle.map((item) => (
            <div key={item.title} className="lt-why-card">
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "0.86rem", color: "#6B7280", lineHeight: 1.7, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p
          className="lt-lead"
          style={{
            textAlign: "center",
            marginTop: "2.5rem",
            maxWidth: "720px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          In short, a technology partner for software development gives you the capabilities of a
          complete product team — product thinking, UX, engineering, QA, DevOps and data — without
          the time and cost of hiring each role yourself.
        </p>
      </div>
    </section>
  );
}
