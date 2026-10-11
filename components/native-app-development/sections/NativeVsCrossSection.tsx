import Image from "next/image";
import { comparisonTable } from "../data/native-app-development-data";

export default function NativeVsCrossSection() {
  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 2.5rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">Compare</div>
          </div>
          <h2 className="lt-h2">Native vs cross platform app development, at a glance.</h2>
          <p className="lt-lead">
            Not sure which fits? We recommend the right approach on your discovery call, not the one that
            bills more hours.
          </p>
        </div>

        <div style={{ position: "relative", aspectRatio: "16/9", borderRadius: "1.5rem", overflow: "hidden", border: "1px solid #E5E7EB", boxShadow: "0 20px 50px rgba(108,76,255,0.12)", marginBottom: "3rem" }}>
          <Image
            src="/images/native-app/02-native-vs-cross-platform.webp"
            alt="Native vs cross platform app development: Swift and Kotlin compared with React Native and Flutter on performance, device access, codebase and time to market"
            fill
            className="object-cover object-center"
          />
        </div>

        <div style={{ overflowX: "auto", border: "1px solid #E5E7EB", borderRadius: "1.25rem", background: "#FFFFFF" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "640px" }}>
            <thead>
              <tr style={{ background: "#F0FBFF" }}>
                {["Factor", "Native (Swift / Kotlin)", "Cross-Platform (React Native / Flutter)"].map((h) => (
                  <th key={h} style={{ textAlign: "left", padding: "1rem 1.25rem", fontSize: "0.72rem", fontWeight: 700, color: "#6C4CFF", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, i) => (
                <tr key={row.factor} style={{ borderTop: i === 0 ? "none" : "1px solid #F3F4F6" }}>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.85rem", fontWeight: 700, color: "#111827" }}>{row.factor}</td>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.82rem", color: "#6B7280" }}>{row.native}</td>
                  <td style={{ padding: "1rem 1.25rem", fontSize: "0.82rem", color: "#6B7280" }}>{row.cross}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
