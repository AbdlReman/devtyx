"use client";

import { useState } from "react";
import { faqItems } from "../data/enterprise-app-development-data";

export default function EnterpriseFaqSection() {
  const [openKey, setOpenKey] = useState<number | null>(0);

  return (
    <section className="lt-section-alt">
      <div className="brelyx-container">
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="lt-kicker">FAQ</div>
          </div>
          <h2 className="lt-h2">Enterprise App Development FAQs</h2>
          <p className="lt-lead" style={{ maxWidth: "480px", margin: "0 auto" }}>
            Answers to the questions buyers ask most before starting an enterprise application project.
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
