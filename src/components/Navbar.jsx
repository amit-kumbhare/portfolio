import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, CircleDot } from "lucide-react";

const SECTIONS = [
  { id: "intro", label: "Intro" },
  { id: "about", label: "About" },
  { id: "experience", label: "Work" },
  { id: "achievements", label: "Achievements" },
  { id: "projects", label: "Projects" },
  { id: "videos", label: "Videos" },
  { id: "skills", label: "Skills" },
  { id: "cp", label: "CP" },
  { id: "education", label: "Education" },
];

const THEME_ICON = {
  light: Sun,
  dark: Moon,
  black: CircleDot,
};

export default function Navbar() {
  const { theme, cycleTheme } = useTheme();
  const [active, setActive] = useState("intro");
  const [present, setPresent] = useState([]);
  const ThemeIcon = THEME_ICON[theme];

  // Sections load their data async and render null if empty, so recheck
  // which ones actually exist in the DOM after data has had time to load.
  useEffect(() => {
    const checkPresent = () => {
      setPresent(SECTIONS.filter((s) => document.getElementById(s.id)).map((s) => s.id));
    };
    checkPresent();
    const observer = new MutationObserver(checkPresent);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const visibleSections = SECTIONS.filter((s) => present.includes(s.id));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    visibleSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [present]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Theme toggle - fixed top right */}
      <button
        onClick={cycleTheme}
        aria-label="Toggle theme"
        className="fixed top-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-fg hover:opacity-80 transition"
      >
        <ThemeIcon size={16} />
      </button>

      {/* Section nav - fixed bottom center */}
      <nav className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2">
        <div className="flex max-w-[92vw] items-center gap-1 overflow-x-auto rounded-full border border-border bg-card/95 px-2 py-2 backdrop-blur shadow-lg">
          {visibleSections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs transition ${
                active === s.id
                  ? "bg-accent text-white"
                  : "text-muted hover:text-fg"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
