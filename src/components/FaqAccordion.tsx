"use client";

import { useState } from "react";
import { FAQS } from "@/lib/faqs";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {FAQS.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.question}
            className={`overflow-hidden rounded-xl border transition-all duration-300 ${
              isOpen
                ? "border-orange-500/40 bg-orange-500/[0.06]"
                : "border-white/[0.07] bg-white/[0.03] hover:border-white/[0.12] hover:bg-white/[0.05]"
            } backdrop-blur-sm`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className={`font-heading text-base font-bold transition-colors ${isOpen ? "text-orange-300" : "text-white"}`}>
                {faq.question}
              </span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 border-orange-500/60 bg-orange-500/20 text-orange-400"
                    : "border-white/[0.1] text-slate-400"
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="border-t border-orange-500/20 px-6 pb-5 pt-4">
                <p className="text-sm leading-relaxed text-slate-400">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
