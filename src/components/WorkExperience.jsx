import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function WorkExperience() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    supabase
      .from("experience")
      .select("*")
      .order("order_index", { ascending: true })
      .then(({ data }) => setItems(data || []));
  }, []);

  if (items.length === 0) return null;

  return (
    <section id="experience" className="mx-auto max-w-content px-6 py-24">
      <h2 className="mb-8 text-sm uppercase tracking-widest text-muted">
        Work Experience
      </h2>
      <div className="flex flex-col gap-8 border-l border-border pl-6">
        {items.map((item) => (
          <div key={item.id} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-2 w-2 rounded-full bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold">
                {item.role} · {item.company}
              </h3>
              <span className="text-xs text-muted">
                {item.start_date} — {item.end_date || "Present"}
              </span>
            </div>
            {item.description && (
              <p className="mt-2 text-sm text-fg/80">{item.description}</p>
            )}
            {Array.isArray(item.achievements) && item.achievements.length > 0 && (
              <ul className="mt-2 list-disc pl-5 text-sm text-fg/80">
                {item.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
