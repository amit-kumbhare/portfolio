import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
const LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#build", label: "Build Series" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#connect", label: "Connect" },
];
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <motion.header
        data-testid="site-nav"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.7, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5" : ""
        }`}
      >
        <div className="wrap flex items-center justify-between py-5">
          <a href="#top" className="flex items-center gap-2 group" data-testid="nav-logo">
            <span className="font-display text-3xl leading-none">A<span style={{ color: "var(--accent)" }}>K</span>.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link" data-testid={`nav-link-${l.label.toLowerCase().replace(" ", "-")}`}>
                {l.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 text-white"
            data-testid="nav-mobile-toggle"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0a0a0a] flex flex-col"
            data-testid="mobile-menu"
          >
            <div className="wrap flex items-center justify-between py-5">
              <span className="font-display text-3xl">A<span style={{ color: "var(--accent)" }}>K</span>.</span>
              <button onClick={() => setOpen(false)} className="p-2 text-white" data-testid="mobile-menu-close" aria-label="Close">
                <X size={24} />
              </button>
            </div>
            <div className="wrap flex-1 flex flex-col justify-center gap-6">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.06 * i }}
                  className="font-display text-6xl text-white hover:text-[var(--accent)] transition-colors"
                  data-testid={`mobile-nav-${l.label.toLowerCase().replace(" ", "-")}`}
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}