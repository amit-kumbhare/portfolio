import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Achievements() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    supabase
      .from("achievements")
      .select("*")
      .order("order_index", { ascending: true })
      .then(({ data }) => setItems(data || []));
  }, []);

  if (items.length === 0) return null;

  return (
    <section id="achievements" className="mx-auto max-w-content px-6 py-24">
      <h2 className="mb-8 text-sm uppercase tracking-widest text-muted">
        Achievements
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-border bg-card p-4"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              {item.date && (
                <span className="whitespace-nowrap text-xs text-muted">
                  {item.date}
                </span>
              )}
            </div>
            {item.description && (
              <p className="mt-1.5 text-sm text-fg/80">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
