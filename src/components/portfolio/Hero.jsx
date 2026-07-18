import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HERO_GIF = "/portfolio/videos/download4.gif";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    // Trigger masked reveal
    const spans = document.querySelectorAll(".hero-reveal span");
    spans.forEach((s, i) => {
      s.style.transition = `transform 1.05s cubic-bezier(0.7,0,0.2,1) ${0.65 + i * 0.12}s`;
      requestAnimationFrame(() => (s.style.transform = "translateY(0%)"));
    });
  }, []);

  return (
    <section id="top" ref={ref} className="relative w-full min-h-screen overflow-hidden" data-testid="hero">
      {/* Background media (GIF) - parallax + blur */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 w-full h-full"
        aria-hidden
      >
        {/*
          NOTE: Hero background is a coding-themed GIF. To swap in a real
          full-bleed video, replace this <img> with a <video src="/videos/hero-bg.mp4"
          autoPlay muted loop playsInline /> and keep the same class.
        */}
        <img
          src={HERO_GIF}
          alt=""
          className="hero-media w-full h-full object-cover"
        />
        {/* Flat dim tint */}
        <div className="absolute inset-0 bg-black/35" />
        {/* Vertical gradient (dark bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-[#0a0a0a]" />
        {/* Vignette */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.55) 100%)" }} />
      </motion.div>

      {/* Top meta strip */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.9 }}
        style={{ opacity }}
        className="absolute top-24 left-0 right-0 z-10 hidden md:block"
      >
        <div className="wrap flex items-center justify-between font-mono text-[11px] tracking-[0.28em] uppercase text-white/60">
          <span>AI/ML Developer · CS Student</span>
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            Portfolio / 2025
          </span>
        </div>
      </motion.div>

      {/* Right side vertical text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        style={{ opacity }}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden lg:block"
      >
        <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/40" style={{ writingMode: "vertical-rl" }}>
          Scroll to explore ↓
        </div>
      </motion.div>

      {/* Main headline stack — bottom-left */}
      <motion.div style={{ y: yText, opacity }} className="absolute inset-0 z-10 flex flex-col justify-end pb-20 md:pb-24">
        <div className="wrap">
          {/* Small tracked label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="flex items-center gap-4 mb-6 md:mb-8"
          >
            <span className="font-mono text-[11px] tracking-[0.32em] uppercase" style={{ color: "var(--accent)" }}>
              AI/ML Developer · CS Student
            </span>
            <span className="hidden md:block h-px w-24 bg-white/20" />
            <span className="hidden md:block font-mono text-[11px] tracking-[0.28em] uppercase text-white/40">
              Official Site / India
            </span>
          </motion.div>

{/* Huge name — wide-spaced AMIT */}
          <div className="hero-reveal font-display select-none">
            <span className="mask-line">
              <span>
                <span className="hero-name text-white">
                    <span className="l outline-letter" style={{ color: "var(--accent)", WebkitTextStroke: "0" }}>@</span>
                  <span className="l">A</span>
                  <span className="l">M</span>
                  <span className="l">I</span>
                  <span className="l">T</span>


                </span>
              </span>
              <span>
                <span className="hero-name text-white">
                  <span className="l l-outline">-</span>
                  <span className="l outline-letter" style={{ color: "var(--accent)", WebkitTextStroke: "0" }}>K</span>
                  <span className="l outline-letter" style={{ color: "var(--accent)", WebkitTextStroke: "0" }}>u</span>
                  <span className="l outline-letter" style={{ color: "var(--accent)", WebkitTextStroke: "0" }}>m</span>
                  <span className="l outline-letter" style={{ color: "var(--accent)", WebkitTextStroke: "0" }}>b</span>
                  <span className="l outline-letter" style={{ color: "var(--accent)", WebkitTextStroke: "0" }}>h</span>
                  <span className="l outline-letter" style={{ color: "var(--accent)", WebkitTextStroke: "0" }}>A</span>
                  <span className="l outline-letter" style={{ color: "var(--accent)", WebkitTextStroke: "0" }}>R</span>
                  <span className="l outline-letter" style={{ color: "var(--accent)", WebkitTextStroke: "0" }}>E</span>
                </span>
              </span>
            </span>
          </div>

          {/* Divider hairline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.6, duration: 1.2, ease: [0.7, 0, 0.2, 1] }}
            className="origin-left h-px bg-white/20 mt-8 md:mt-10"
          />

          {/* Bottom row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.9 }}
            className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          >
            <p className="max-w-md text-white/85 text-base md:text-lg leading-relaxed">
              I build ML systems that ship — <span className="text-white">RAG pipelines</span>, recommendation engines, and real products.
              <span className="caret ml-1" />
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-solid" data-testid="hero-view-projects">
                View Projects <span aria-hidden>↗</span>
              </a>
              <a href="#build" className="btn-outline" data-testid="hero-watch-build">
                Watch Build Series <span aria-hidden>↓</span>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom-right scroll cue */}
      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-6 right-6 md:right-10 z-10 flex flex-col items-center gap-2 group"
        data-testid="hero-scroll-cue"
      >
        <span className="font-mono text-[10px] tracking-[0.32em] uppercase text-white/50 group-hover:text-[var(--accent)] transition-colors">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/70 group-hover:text-[var(--accent)]"
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}
