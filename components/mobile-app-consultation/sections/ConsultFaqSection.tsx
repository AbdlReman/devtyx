"use client";

import { useState } from "react";
import { faqItems } from "../data/mobile-app-consultation-data";

export default function ConsultFaqSection() {
  const [openKey, setOpenKey] = useState<number | null>(null);

  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">FAQ</div>
          </div>
          <h2 className="lt-h2">Mobile App Consulting FAQs</h2>
        </div>

        <div className="faq-list">
          {faqItems.map((item, i) => {
            const isOpen = openKey === i;
            return (
              <div key={i} className={`faq-item ${isOpen ? "faq-open" : ""}`}>
                <button
                  className="faq-trigger"
                  onClick={() => setOpenKey(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                </button>
                <div className="faq-body">
                  <div className="faq-body-inner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
