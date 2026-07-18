// import React from "react";
// import { motion } from "framer-motion";

// const ENTRIES = [
//   {
//     inst: "Yeshwantrao Chavan College of Engineering",
//     course: "B.Tech, Computer Science & Engineering",
//     dur: "2024 — 2028",
//     note: "Currently entering third year. Coursework focus on DSA, systems, and applied ML.",
//   },

// ];

// const COURSEWORK = [
//   "Data Structures & Algorithms",
//   "Statistics / R",
//   "Operating Systems",
//   "DBMS",
//   "Cloud Security",
//   "Linear Algebra",
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.7, 0, 0.2, 1] } },
// };

// export default function Education() {
//   return (
//     <section id="education" className="py-28 md:py-40 bg-[#0a0a0a] border-t border-white/5" data-testid="education-section">
//       <div className="wrap">
//         <div className="section-label mb-16 md:mb-24" data-testid="education-label">
//           <span>05 / Education</span>
//         </div>

//         <motion.h2
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.4 }}
//           variants={fadeUp}
//           className="font-display text-white text-[clamp(28px,4.8vw,68px)] leading-[0.9] mb-20 m mb-20 md:mb-24"
//         //   [clamp(28px,4.8vw,68px)] leading-[0.9] mb-20 m
//           data-testid="education-headline"
//         >
//           EDUCATION & <span style={{ color: "var(--accent)" }}>COURSEWORK.</span>
//         </motion.h2>

//         {/* Timeline */}
//         <div className="relative pl-6 md:pl-10">
//           <div className="absolute left-0 top-2 bottom-2 w-px bg-white/10" />
//           {ENTRIES.map((e, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ delay: i * 0.1, duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
//               className="relative mb-14 last:mb-0"
//               data-testid={`education-entry-${i}`}
//             >
//               <span className="absolute -left-6 md:-left-10 top-3 w-3 h-3 rounded-full bg-[var(--accent)] ring-4 ring-[#0a0a0a]" />
//               <div className="grid grid-cols-12 gap-4 md:gap-6 items-start">
//                 <div className="col-span-12 md:col-span-8">
//                   <div className="font-display text-white text-3xl md:text-5xl leading-tight">{e.inst}</div>
//                   <div className="text-white/70 mt-2 text-base md:text-lg">{e.course}</div>
//                   {e.note && (
//                     <p className="text-white/50 mt-3 text-sm md:text-base leading-relaxed max-w-xl">{e.note}</p>
//                   )}
//                 </div>
//                 <div className="col-span-12 md:col-span-4 md:text-right">
//                   <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-white/50">{e.dur}</span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Relevant coursework */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={fadeUp}
//           className="mt-20 md:mt-28 grid grid-cols-12 gap-6 border-t border-white/10 pt-10"
//           data-testid="education-coursework"
//         >
//           <div className="col-span-12 md:col-span-4">
//             <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--accent)] mb-3">Relevant Coursework</div>
//             <div className="font-display text-white text-3xl md:text-4xl leading-tight">
//               What I've<br/>studied deeply.
//             </div>
//           </div>
//           <div className="col-span-12 md:col-span-8 flex flex-wrap gap-2 items-start">
//             {COURSEWORK.map((c) => (
//               <span key={c} className="chip">{c}</span>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";

const ENTRIES = [
  {
    inst: "Yeshwantrao Chavan College of Engineering",
    course: "B.Tech, Computer Science & Engineering",
    dur: "2024 — 2028",
    note: "Currently entering third year. Coursework focus on DSA, systems, and applied ML.",
  },
];

const COURSEWORK = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Database Management Systems",
  "Neural Networks & Applications",
  "Discrete Mathematics & Graph Theory",
  "Linear Algebra",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.7, 0, 0.2, 1] } },
};

export default function Education() {
  return (
    <section id="education" className="py-28 md:py-40 bg-[#0a0a0a] border-t border-white/5" data-testid="education-section">
      <div className="wrap">
        <div className="section-label mb-16 md:mb-24" data-testid="education-label">
          <span>05 / Education</span>
        </div>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="font-display text-white text-[clamp(28px,4.8vw,68px)] leading-[0.9] mb-20 md:mb-24"
          data-testid="education-headline"
        >
          EDUCATION & <span style={{ color: "var(--accent)" }}>COURSEWORK.</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-10">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-white/10" />
          {ENTRIES.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
              className="relative mb-14 last:mb-0"
              data-testid={`education-entry-${i}`}
            >
              <span className="absolute -left-6 md:-left-10 top-3 w-3 h-3 rounded-full bg-[var(--accent)] ring-4 ring-[#0a0a0a]" />
              <div className="grid grid-cols-12 gap-4 md:gap-6 items-start">
                <div className="col-span-12 md:col-span-8">
                  <div className="font-display text-white text-3xl md:text-5xl leading-tight">{e.inst}</div>
                  <div className="text-white/70 mt-2 text-base md:text-lg">{e.course}</div>
                  {/* {e.note && (
                    <p className="text-white/50 mt-3 text-sm md:text-base leading-relaxed max-w-xl">{e.note}</p>
                  )} */}
                </div>
                <div className="col-span-12 md:col-span-4 md:text-right">
                  <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-white/50">{e.dur}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Relevant coursework — Bullet points */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-20 md:mt-28 grid grid-cols-12 gap-6 border-t border-white/10 pt-10"
          data-testid="education-coursework"
        >
          {/* <div className="col-span-12 md:col-span-4">
            <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--accent)] mb-3">Relevant Coursework</div>
            <div className="font-display text-white text-3xl md:text-4xl leading-tight">
              What I've<br/>studied deeply.
            </div>
          </div> */}
          
          <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mt-4 md:mt-0">
            {COURSEWORK.map((c, idx) => (
              <div key={idx} className="flex items-center gap-3 text-white/85 text-base md:text-lg">
                <span className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse" style={{ backgroundColor: "var(--accent)" }} />
                <span className="font-display text-white text-2xl md:text-4xl leading-tight">{c}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}