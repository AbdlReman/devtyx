"use client";

import { useState } from "react";
import { faqItems } from "../data/custom-web-development-data";

export default function WebFaqSection() {
  const [openKey, setOpenKey] = useState<number | null>(0);

  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">FAQ</div>
          </div>
          <h2 className="lt-h2">Custom Web Development FAQs</h2>
          <p className="lt-lead" style={{ maxWidth: "480px", margin: "0 auto" }}>
            Straight answers on cost, timelines, ownership, SEO and support.
          </p>
        </div>

        <div className="faq-list" style={{ maxWidth: "820px", margin: "0 auto" }}>
          {faqItems.map((item, i) => {
            const isOpen = openKey === i;
            return (
              <div key={item.q} className={`faq-item ${isOpen ? "faq-open" : ""}`}>
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
