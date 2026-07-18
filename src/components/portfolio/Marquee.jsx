import React from "react";
const ITEMS = [
  "RAG Pipelines",
  "Recommendation Engines",
  "LLM Systems",
  "Vector Search",
  "Real Products",
  "Ship. Iterate. Repeat.",
];
export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <section aria-hidden className="border-y border-white/5 bg-[#0a0a0a] overflow-hidden py-8" data-testid="marquee">
      <div className="marquee-track font-display text-[clamp(20px,3.2vw,44px)] leading-none text-white/85">
        {loop.map((t, i) => (
          <span key={i} className="flex items-center pr-10">
            {t}
            <span className="mx-16 text-[var(--accent)]">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

