"use client";

import { BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_PHONE } from "@/lib/seo";

const infoCards = [
  {
    label: "Email",
    value: BUSINESS_EMAIL,
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    label: "Phone / WhatsApp",
    value: BUSINESS_PHONE,
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    label: "Response time",
    value: "Within 1 business day",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Kickoff timeline",
    value: "Typically within 2 weeks",
    icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const offices = [
  { city: BUSINESS_ADDRESS.formatted, detail: "Headquarters — DEVTYX LLC" },
] as const;

export default function ContactInfoPanel() {
  return (
    <div>
      <div className="lt-kicker">Contact Info</div>
      <h2 className="lt-h2" style={{ marginBottom: "0.75rem" }}>
        Multiple ways to reach us
      </h2>
      <p className="lt-lead" style={{ marginBottom: "2.5rem" }}>
        Whether you have a project in mind or just want to explore possibilities — our team is ready to listen.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2.5rem" }}>
        {infoCards.map(({ label, value, icon }) => (
          <div key={label} className="lt-info-card">
            <div className="lt-info-card-icon">{icon}</div>
            <div className="lt-info-card-label">{label}</div>
            <div className="lt-info-card-value">{value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
        {offices.map(({ city, detail }) => (
          <div key={city} className="lt-location-row">
            <div className="lt-location-icon">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#111827" }}>{city}</div>
              <div style={{ fontSize: "0.72rem", color: "#9CA3AF" }}>{detail}</div>
            </div>
          </div>
        ))}
      </div>

      {/* <div style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "1.25rem",
        aspectRatio: "16/7",
        border: "1px solid #E5E7EB",
      }}>
        <Image src="/images/banerwebportfolio_4.png" alt="Our work" fill className="object-cover" />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(26,8,66,0.7), transparent)",
        }} />
        <div style={{ position: "absolute", bottom: "1rem", left: "1.25rem" }}>
          <div style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.82rem" }}>Award-winning digital products</div>
          <div style={{ color: "rgba(255,255,255,0.7)", marginTop: "0.25rem", fontSize: "0.72rem" }}>
            Trusted by 250+ companies worldwide
          </div>
        </div>
      </div> */}
    </div>
  );
}
