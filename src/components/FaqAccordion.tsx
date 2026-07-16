"use client";

import { useState } from "react";
import { FAQS } from "@/lib/faqs";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {FAQS.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-heading text-base font-bold text-ink">
                {faq.question}
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className={`shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}
                aria-hidden="true"
              >
                <path d="M9 2v14M2 9h14" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
            {isOpen && (
              <p className="pb-5 text-sm leading-relaxed text-ink-muted">{faq.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
