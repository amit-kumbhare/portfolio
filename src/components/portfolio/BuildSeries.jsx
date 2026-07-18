import React from "react";
import { motion } from "framer-motion";
import { Youtube, ArrowUpRight, Play } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.7, 0, 0.2, 1] } },
};

const EPISODES = [
  { n: "01", title: "NxtUp Introduction", dur: "1:08", note: "Idea and building plan" },
  { n: "02", title: "User Dashboard", dur: "1:37", note: "A2OJ Ladder Integration" },
  { n: "03", title: "Recommendations", dur: "2:10", note: "RAG Pipeline System Design" },
];

export default function BuildSeries() {
  return (
    <section id="build" className="py-28 md:py-40 bg-[#0a0a0a] border-t border-white/5" data-testid="build-section">
      <div className="wrap">
        <div className="section-label mb-16 md:mb-24" data-testid="build-label">
          <span>02 / Build Series</span>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-16"
        >
          <h2 className="col-span-12 md:col-span-8 font-display text-white text-[clamp(28px,4.5vw,68px)] leading-[0.88]" data-testid="build-headline">
            WATCH IT
            <br />
            GET <span style={{ color: "var(--accent)" }}>BUILT.</span>
          </h2>
          <p className="col-span-12 md:col-span-4 text-white/70 text-base md:text-lg leading-relaxed">
            A running series documenting NxtUp from architecture to shipped feature — the messy real one, not a highlight reel.
          </p>
        </motion.div>

        {/* Featured episode */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="relative aspect-video w-full bg-[#111] border border-white/10 overflow-hidden group cursor-pointer"
          data-testid="build-featured"
        >
    {/* ─── YOUTUBE IFRAME BACKGROUND EMBED ─── */}
    {/* Replace YOUR_VIDEO_ID with your actual YouTube URL video ID string */}
        {/* ─── YOUTUBE IFRAME BACKGROUND EMBED ─── */}
        <iframe 
            // width="560" 
            // height="315" 
            className="absolute top-0 left-0 w-full h-full border-0"
            src="https://www.youtube.com/embed/cFoPZYdmsq0?si=TUh13FcPgqQSiyuw" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>

        </iframe>
          {/* <div
            className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700"
            style={{ backgroundImage: "radial-gradient(circle at 40% 50%, rgba(232,135,58,0.4), transparent 60%)" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-[var(--accent)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Play size={32} className="text-[var(--accent)] ml-1" fill="currentColor" />
              </div>
              <div className="text-center">
                <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/50 mb-1">Episode 04</div>
                <div className="font-display text-white text-3xl md:text-5xl">The RAG Pipeline</div>
              </div>
            </div>
          </div> */}
        </motion.div>

        {/* Episode row */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mt-12 md:mt-16"
        >
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-mono text-[11px] tracking-[0.28em] uppercase text-white/40">Earlier Episodes</h4>
            <a href="https://www.youtube.com/@amit-kumbhare19" className="inline-flex items-center gap-2 text-white/70 hover:text-[var(--accent)] transition-colors text-sm" data-testid="build-channel-link">
              <Youtube size={16} /> See full channel <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EPISODES.map((e, i) => (
              <motion.a
                key={e.n}
                href="https://youtube.com/playlist?list=PLkHIX4YjBbcfoa-Umc7mYKgEAq1Hi5OQx&si=gn881GK7NFaePEG-"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="group block border-t border-white/10 pt-5 hover:border-[var(--accent)] transition-colors"
                data-testid={`episode-${e.n}`}
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">EP {e.n}</span>
                  <span className="font-mono text-[10px] text-white/40">{e.dur}</span>
                </div>
                <div className="font-display text-white text-3xl md:text-4xl mb-2 group-hover:text-[var(--accent)] transition-colors">
                  {e.title}
                </div>
                <div className="text-white/50 text-sm">{e.note}</div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}