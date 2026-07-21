"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaqItem } from "@/data/faq";
import Reveal from "./Reveal";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-or/15 border-y border-or/15">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <Reveal key={item.question} delay={i * 0.05}>
            <div>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display text-xl text-creme">{item.question}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-or transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm leading-relaxed text-creme/70">{item.answer}</p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
