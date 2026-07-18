import React from "react";
import { motion } from "framer-motion";
const GROUPS = [
  { title: "Languages", items: ["Python", "JavaScript", "SQL"] },
  { title: "Frontend", items: ["React", "TailwindCSS", "HTML/CSS", "JavaScript"] },
  { title: "ML / AI", items: ["RAG Pipelines", "Sentence-Transformers", "Vector Databases", "LLM Integration"] },
  { title: "Backend", items: ["Django", "FastAPI"] },
  { title: "Databases", items: ["ChromaDB", "Sqlite", "PostgreSQL", "Redis"] },
  { title: "Tools", items: ["Git", "Docker", "Linux", "VS Code"] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.7, 0, 0.2, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-40 bg-[#0a0a0a] border-t border-white/5" data-testid="skills-section">
      <div className="wrap">
        <div className="section-label mb-16 md:mb-24" data-testid="skills-label">
          <span>03 / Skills</span>
        </div>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="font-display text-white text-[clamp(28px,4.5vw,68px)] leading-[0.9] mb-20 md:mb-28"
          data-testid="skills-headline"
        >
          WHAT I WORK <span style={{ color: "var(--accent)" }}>WITH.</span>
        </motion.h2>
        <div className="grid grid-cols-12 gap-x-6 gap-y-16 md:gap-y-24">
          {GROUPS.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
              className="col-span-12 md:col-span-6 grid grid-cols-12 gap-4 border-t border-white/10 pt-6"
              data-testid={`skill-group-${g.title.toLowerCase().replace(/[^a-z]/g, "")}`}
            >
              <div className="col-span-4 md:col-span-3">
                <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--accent)]">
                  0{i + 1}
                </span>
                <div className="font-display text-white text-4xl md:text-5xl mt-2">{g.title}</div>
              </div>
              <div className="col-span-8 md:col-span-9 flex flex-wrap gap-2 items-start pt-3">
                {g.items.map((it) => (
                  <span key={it} className="chip">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        {/* <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="mt-20 md:mt-28 flex items-center gap-4 text-white/60 text-sm md:text-base"
          data-testid="skills-cf-note"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          Active competitive programmer on Codeforces — working toward
          <span className="text-white ml-1">Specialist</span> rating.
        </motion.div> */}
      </div>
    </section>
  );
}

// Action: file_editor str_replace /app/frontend/src/components/portfolio/Skills.jsx --old-str "                
// <span className=\"font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--accent)]\">
//                   0{i + 1}
//                 </span>
//                 <div className=\"font-display text-white text-4xl md:text-5xl mt-2\">{g.title}</div>" --new-str " 
             
// <div className=\"font-display text-white text-3xl md:text-4xl leading-tight\" style={{ letterSpacing: \"0.02em\" }}>{`0${i + 1}`}</div>
//               <div className=\"font-mono text-[11px] tracking-[0.24em] uppercase text-white mt-2\">{g.title}</div>"
// Observation: Edit was successful.