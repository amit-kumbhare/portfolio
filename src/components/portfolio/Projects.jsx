import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, PlayCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.7, 0, 0.2, 1] } },
};

function SectionLabel({ n, text, testid }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeUp}
      className="section-label mb-16 md:mb-24"
      data-testid={testid}
    >
      <span>{n} / {text}</span>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-40 bg-[#0a0a0a]" data-testid="projects-section">
      <div className="wrap">
        <SectionLabel n="01" text="Projects" testid="projects-label" />

        {/* Manifesto headline */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="font-display text-white text-[clamp(32px,5vw,76px)] leading-[0.9] mb-24 md:mb-32"
          data-testid="projects-headline"
        >
          THINGS I <span style={{ color: "var(--accent)" }}>ACTUALLY </span>
           BUILT.
        </motion.h2>

        {/* Project 1 — NxtUp — spotlight editorial layout */}
        <motion.article
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="grid grid-cols-12 gap-6 md:gap-10 mb-40 md:mb-56"
          data-testid="project-nxtup"
        >
          {/* Left meta */}
          <div className="col-span-12 md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-white/40 mb-4">
                Ch. 01 — Featured
              </div>
              <h3 className="font-display text-white text-[clamp(64px,9vw,140px)] leading-[0.88] mb-4">
                Nxt<span style={{ color: "var(--accent)" }}>Up</span>
              </h3>
              <p className="text-white/70 text-lg leading-snug">
                AI-powered competitive programming coach for Codeforces.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <a href="https://github.com/amit-kumbhare/NxtUp" className="btn-outline" data-testid="nxtup-github">
                <Github size={14} /> GitHub 
              </a>
              <a href="https://www.youtube.com/playlist?list=PLkHIX4YjBbcfoa-Umc7mYKgEAq1Hi5OQx" className="btn-outline" data-testid="nxtup-demo">
                <PlayCircle size={14} /> Watch Demo
              </a>
            </div>
          </div>

          {/* Right: framed image + description */}
          <div className="col-span-12 md:col-span-8">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#111]" data-testid="nxtup-image">
              {/*
                IMPORTANT: This is a placeholder. Replace with a REAL product
                screenshot of the NxtUp UI. Never use stock imagery.
              */}
                        <img 
                src="/images/image.png" 
                alt="NxtUp Platform UI Dashboard Screenshot" 
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              {/* Clip frame corners */}
              <span className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[var(--accent)]" />
              <span className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[var(--accent)]" />
              <span className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[var(--accent)]" />
              <span className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[var(--accent)]" />
            </div>

            <div className="mt-8 grid grid-cols-12 gap-6">
              <p className="col-span-12 md:col-span-7 text-white/80 text-base md:text-lg leading-relaxed">
                A <span className="text-white">RAG-based recommendation engine</span> that analyzes weak skill tags and
                curates personalized problem sequences using centroid-based embeddings and a
                three-layer hallucination defense system.
              </p>
              <div className="col-span-12 md:col-span-5 flex flex-wrap gap-2 md:justify-end">
                {["Django", "ChromaDB", "Sentence-Transformers", "Groq/Llama 3.1", "Nvidia NIM", "SQLite"].map((t) => (
                  <span key={t} className="chip" data-testid={`nxtup-tag-${t.toLowerCase()}`}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>

        {/* Divider */}
        <div className="hair mb-40 md:mb-56" />

        {/* Project 2 — Rate Limiter — different treatment */}
        <motion.article
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="grid grid-cols-12 gap-6 md:gap-10"
          data-testid="project-ratelimiter"
        >
          <div className="col-span-12 md:col-span-7 order-2 md:order-1">
            {/* Terminal-style card */}
            <div className="border border-white/10 bg-[#0f0f10] rounded-none p-6 md:p-10 relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-white/10" />
                  <span className="w-3 h-3 rounded-full bg-white/10" />
                  <span className="w-3 h-3 rounded-full bg-[var(--accent)]" />
                </div>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">bench.log</span>
              </div>
              <pre className="font-mono text-[13px] leading-relaxed text-white/75 whitespace-pre-wrap">
{`> algo: token_bucket   (atomic lua)
  throughput  ..... 42,800 req/s
  p95 latency ..... 0.9 ms
  denial rate ..... 12.4%

> algo: sliding_window (counter)
  throughput  ..... 39,120 req/s
  p95 latency ..... 1.2 ms
  denial rate ..... 8.7%

verdict: token_bucket wins throughput,
sliding_window wins fairness under burst.`}
              </pre>
              <div className="mt-6 flex flex-wrap gap-2">
                {["FastAPI", "Redis", "React", "Lua"].map((t) => (
                  <span key={t} className="chip" data-testid={`rl-tag-${t.toLowerCase()}`}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 order-1 md:order-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-white/40">Ch. 02</span>
                <span className="inline-flex items-center gap-2 px-2.5 py-1 border border-[var(--accent)]/60 text-[10px] tracking-[0.24em] uppercase font-mono text-[var(--accent)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" /> In Progress
                </span>
              </div>
              <h3 className="font-display text-white text-[clamp(56px,7vw,110px)] leading-[0.88] mb-4">
                RATE
                <br />
                LIMI<span style={{ color: "var(--accent)" }}>TER</span>.
              </h3>
              <p className="text-white/70 text-lg leading-snug mb-6">
                Token Bucket vs Sliding Window, built for scale.
              </p>
              <p className="text-white/60 text-base leading-relaxed">
                A FastAPI + Redis rate limiting service comparing Token Bucket (atomic Lua scripts)
                against Sliding Window Counter, with a live React dashboard simulating traffic.
              </p>
            </div>
            <div className="mt-8">
              <a href="#" className="btn-outline" data-testid="ratelimiter-github">
                <Github size={14} /> GitHub 
              </a>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

