import { comparisonTable } from "../data/music-app-developers-data";

const complexityColor: Record<string, string> = {
  Medium: "#0EA5E9",
  High: "#6C4CFF",
  "Very High": "#DB2777",
};

export default function MusicComparisonSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Compare</div>
          </div>
          <h2 className="lt-h2">Which type of music app do you need?</h2>
          <p className="lt-lead">
            Different music products serve different users, business models and technical
            requirements. Here&apos;s how the main categories we build compare.
          </p>
        </div>

        <div style={{ overflowX: "auto", border: "1px solid #E5E7EB", borderRadius: "1.25rem", background: "#FFFFFF" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "760px" }}>
            <thead>
              <tr style={{ background: "#F0FBFF" }}>
                {["App Type", "Primary User", "Monetization Model", "Key Tech Requirement", "Build Complexity"].map((h) => (
                  <th key={h} style={{ textAlign: "left", padding: "1rem 1.25rem", fontSize: "0.72rem", fontWeight: 700, color: "#6C4CFF", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, i) => (
                <tr key={row.type} style={{ borderTop: i === 0 ? "none" : "1px solid #F3F4F6" }}>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.85rem", fontWeight: 700, color: "#111827" }}>{row.type}</td>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.82rem", color: "#6B7280" }}>{row.user}</td>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.82rem", color: "#6B7280" }}>{row.monetization}</td>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.82rem", color: "#6B7280" }}>{row.tech}</td>
                  <td style={{ padding: "1rem 1.25rem" }}>
                    <span style={{
                      display: "inline-block",
                      padding: "0.3rem 0.7rem",
                      borderRadius: "999px",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      background: complexityColor[row.complexity] ?? "#6C4CFF",
                    }}>
                      {row.complexity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
