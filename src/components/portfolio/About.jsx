import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PHOTO = "/portfolio/images/Amit.jpg"; 

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.7, 0, 0.2, 1] } },
};

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" ref={ref} className="py-28 md:py-40 bg-[#0a0a0a] border-t border-white/5" data-testid="about-section">
      <div className="wrap">
        <div className="section-label mb-16 md:mb-24" data-testid="about-label">
          <span>04 / About</span>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-16">
          {/* Photo with clipped frame + parallax */}
          <div className="col-span-12 md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, ease: [0.7, 0, 0.2, 1] }}
              className="relative aspect-[4/5] w-full overflow-hidden bg-[#111]"
              data-testid="about-photo"
            >
              <motion.img
                src={PHOTO}
                alt="Amit Kumbhare"
                style={{ y }}
                className="w-full h-[115%] object-cover object-center absolute inset-0 grayscale-[0.15]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Corner marks */}
              <span className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[var(--accent)]" />
              <span className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[var(--accent)]" />
              {/* Meta strip */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-[10px] tracking-[0.3em] uppercase text-white/70">
                <span>Amit / Nagpur, IN</span>
                <span>2026</span>
              </div>
            </motion.div>
          </div>

          {/* Text */}
          <div className="col-span-12 md:col-span-7 flex flex-col justify-between">
            <div>
              <motion.h2
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                className="font-display text-white text-[clamp(56px,9vw,130px)] leading-[0.88] mb-10"
                data-testid="about-headline"
              >
                ABOUT <span style={{ color: "var(--accent)" }}>
                  <span className="l">A</span>
                  <span className="l">M</span>
                  <span className="l l-outline">I</span>
                  <span className="l outline-letter" style={{ color: "var(--accent)", WebkitTextStroke: "0" }}>T</span>
                    </span>
              </motion.h2>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="space-y-6 text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl"
                data-testid="about-body"
              >
                <p>
                  CS student building <span className="text-white">full-stack ML products</span> independently — not tutorials, not toys, real systems that ship.
                </p>
                <p>
                  Competitive programmer on Codeforces, chasing the details most people skip. I document builds publicly on YouTube because
                  <span className="text-white"> the process is more honest than the highlight.</span>
                </p>
                <p className="text-white/50">
                  Currently deep in retrieval-augmented systems, embedding search, and the tiny latency wins that make ML feel like a product instead of a demo.
                </p>
              </motion.div>
            </div>

            {/* Numbered manifesto strip */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="mt-14 grid grid-cols-3 gap-4 border-t border-white/10 pt-6"
              data-testid="about-manifesto"
            >
              {[
                { n: "01", t: "Ship real products" },
                { n: "02", t: "Document the messy middle" },
                { n: "03", t: "Details compound" },
              ].map((m) => (
                <div key={m.n}>
                  <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-[var(--accent)] mb-2">{m.n}</div>
                  <div className="text-white/85 text-sm md:text-base leading-snug">{m.t}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
