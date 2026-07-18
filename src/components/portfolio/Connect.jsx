import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, Mail, ArrowUpRight } from "lucide-react";
const LINKS = [
  { icon: Github, label: "GitHub", handle: "@amit-kumbhare", href: "https://github.com/amit-kumbhare", testid: "connect-github" },
  { icon: Linkedin, label: "LinkedIn", handle: "Amit Kumbhare", href: "https://www.linkedin.com/in/amit-kumbhare/", testid: "connect-linkedin" },
  { icon: Youtube, label: "YouTube", handle: "@amit-kumbhare19", href: "https://www.youtube.com/@amit-kumbhare19", testid: "connect-youtube" },
  { icon: Mail, label: "Email", handle: "kumbhare.amit2006@gmail.com", href: "mailto:kumbhare.amit2006@gmail.com", testid: "connect-email" },
];
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.7, 0, 0.2, 1] } },
};


export default function Connect() {
  return (
    <section id="connect" className="py-28 md:py-40 bg-[#0a0a0a] border-t border-white/5" data-testid="connect-section">
      <div className="wrap">
        <div className="section-label mb-16 md:mb-24" data-testid="connect-label">
          <span>06 / Connect</span>
        </div>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="font-display text-white text-[clamp(32px,5.5vw,80px)] leading-[0.9] mb-16 md:mb-24"
          data-testid="connect-headline"
        >
          LET'S BUILD
          <br />
          SOMETHING<span style={{ color: "var(--accent)" }}>.</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-white/10">
          {LINKS.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.8 }}
              className="group relative flex items-center justify-between py-8 md:py-10 border-b border-white/10 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:border-white/10 md:[&:nth-child(odd)]:pr-10 md:[&:nth-child(even)]:pl-10 hover:pl-4 md:hover:pl-14 transition-all duration-500"
              data-testid={l.testid}
            >
              <div className="flex items-center gap-6">
                <l.icon size={22} className="text-white/60 group-hover:text-[var(--accent)] transition-colors" />
                <div>
                  <div className="font-display text-white text-4xl md:text-6xl leading-none group-hover:text-[var(--accent)] transition-colors">
                    {l.label}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 mt-2">{l.handle}</div>
                </div>
              </div>
              <ArrowUpRight
                size={28}
                className="text-white/50 group-hover:text-[var(--accent)] group-hover:rotate-45 transition-all duration-500"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}