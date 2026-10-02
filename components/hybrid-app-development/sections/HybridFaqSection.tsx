"use client";

import { useState } from "react";
import { faqCategories } from "../data/hybrid-app-development-data";

export default function HybridFaqSection() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="lt-section">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">FAQ</div>
          </div>
          <h2 className="lt-h2">Frequently Asked Questions.</h2>
          <p className="lt-lead" style={{ maxWidth: "480px", margin: "0 auto" }}>
            Everything clients usually ask us before building a hybrid app.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {faqCategories.map((cat, i) => (
            <button
              key={cat.category}
              type="button"
              className={`lt-chip-btn${activeCategory === i ? " active" : ""}`}
              onClick={() => setActiveCategory(i)}
            >
              {cat.category}
            </button>
          ))}
        </div>

        <div className="faq-list">
          {faqCategories[activeCategory].items.map((item, i) => {
            const key = `${activeCategory}-${i}`;
            const isOpen = openKey === key;
            return (
              <div key={key} className={`faq-item ${isOpen ? "faq-open" : ""}`}>
                <button
                  className="faq-trigger"
                  onClick={() => setOpenKey(isOpen ? null : key)}
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
