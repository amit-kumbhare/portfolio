import React from "react";
export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-10" data-testid="footer">
      <div className="wrap flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="font-display text-3xl">A<span style={{ color: "var(--accent)" }}>K</span>.</span>
          <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-white/40">
            Amit Kumbhare — AI/ML Developer
          </span>
        </div>
        <div className="flex items-center gap-6 font-mono text-[11px] tracking-[0.28em] uppercase text-white/40">
          <span>© {new Date().getFullYear()}</span>
          <span className="hidden md:inline">Built by hand</span>
          <span>India</span>
        </div>
      </div>
    </footer>
  );
}