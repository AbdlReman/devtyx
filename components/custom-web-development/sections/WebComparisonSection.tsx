import { comparisonRows } from "../data/custom-web-development-data";

export default function WebComparisonSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Compare</div>
          </div>
          <h2 className="lt-h2">Custom Website vs Custom Web Application vs Template</h2>
          <p className="lt-lead">
            &ldquo;Custom&rdquo; means different things to different vendors. This comparison shows where each
            approach fits so you can compare quotes fairly.
          </p>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "760px",
              background: "#fff",
              borderRadius: "1rem",
              overflow: "hidden",
              border: "1px solid #E5E7EB",
            }}
          >
            <thead>
              <tr style={{ background: "#F9FAFB", textAlign: "left" }}>
                {["", "Template or page builder", "Custom website", "Custom web application"].map((h) => (
                  <th
                    key={h || "aspect"}
                    style={{
                      padding: "1rem 1.1rem",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: h.startsWith("Custom") ? "#6C4CFF" : "#6B7280",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      borderBottom: "1px solid #E5E7EB",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.aspect}>
                  <td
                    style={{
                      padding: "1rem 1.1rem",
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      color: "#111827",
                      borderBottom: "1px solid #F3F4F6",
                      verticalAlign: "top",
                      width: "16%",
                    }}
                  >
                    {row.aspect}
                  </td>
                  {[row.template, row.website, row.webApp].map((cell, i) => (
                    <td
                      key={i}
                      style={{
                        padding: "1rem 1.1rem",
                        fontSize: "0.85rem",
                        color: i === 0 ? "#4B5563" : "#111827",
                        fontWeight: i === 0 ? 400 : 600,
                        lineHeight: 1.65,
                        borderBottom: "1px solid #F3F4F6",
                        verticalAlign: "top",
                        background: i > 0 ? "rgba(108,76,255,0.03)" : undefined,
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
