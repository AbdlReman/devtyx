import { comparisonRows } from "../data/software-development-partner-data";

export default function PartnerComparisonSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Compare</div>
          </div>
          <h2 className="lt-h2">Software Development Partner vs Vendor vs Freelancer</h2>
          <p className="lt-lead">
            Companies often compare three ways to get software built. Each has a place, but they
            carry very different levels of risk and accountability.
          </p>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "720px",
              background: "#fff",
              borderRadius: "1rem",
              overflow: "hidden",
              border: "1px solid #E5E7EB",
            }}
          >
            <thead>
              <tr style={{ background: "#F9FAFB", textAlign: "left" }}>
                {["", "Freelancer", "Software vendor", "Software development partner"].map((h) => (
                  <th
                    key={h || "aspect"}
                    style={{
                      padding: "1rem 1.15rem",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: h.includes("partner") ? "#6C4CFF" : "#6B7280",
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
                      padding: "1rem 1.15rem",
                      fontSize: "0.88rem",
                      fontWeight: 700,
                      color: "#111827",
                      borderBottom: "1px solid #F3F4F6",
                      verticalAlign: "top",
                      width: "18%",
                    }}
                  >
                    {row.aspect}
                  </td>
                  {[row.freelancer, row.vendor, row.partner].map((cell, i) => (
                    <td
                      key={i}
                      style={{
                        padding: "1rem 1.15rem",
                        fontSize: "0.86rem",
                        color: i === 2 ? "#111827" : "#4B5563",
                        fontWeight: i === 2 ? 600 : 400,
                        lineHeight: 1.65,
                        borderBottom: "1px solid #F3F4F6",
                        verticalAlign: "top",
                        background: i === 2 ? "rgba(108,76,255,0.04)" : undefined,
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

        <p
          className="lt-lead"
          style={{
            textAlign: "center",
            marginTop: "2.25rem",
            maxWidth: "680px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          If the software is core to how you sell, operate or serve customers, you need a partner
          that understands the business behind the code. That is the role DEVTYX plays.
        </p>
      </div>
    </section>
  );
}
