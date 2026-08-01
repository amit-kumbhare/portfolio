import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    supabase
      .from("projects")
      .select("*")
      .order("order_index", { ascending: true })
      .then(({ data }) => setItems(data || []));
  }, []);

  if (items.length === 0) return null;

  return (
    <section id="projects" className="mx-auto max-w-content px-6 py-24">
      <h2 className="mb-8 text-sm uppercase tracking-widest text-muted">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-border bg-card p-4"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <div className="flex gap-2">
                {item.github_url && (
                  <a
                    href={item.github_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted hover:text-accent"
                    aria-label="GitHub"
                  >
                    <Github size={15} />
                  </a>
                )}
                {item.live_url && (
                  <a
                    href={item.live_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted hover:text-accent"
                    aria-label="Live demo"
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
            {item.description && (
              <p className="mt-1.5 text-sm text-fg/80">{item.description}</p>
            )}
            {Array.isArray(item.tech_stack) && item.tech_stack.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.tech_stack.map((t, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
