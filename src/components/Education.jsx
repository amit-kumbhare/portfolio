import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Education() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    supabase
      .from("education")
      .select("*")
      .order("order_index", { ascending: true })
      .then(({ data }) => setItems(data || []));
  }, []);

  if (items.length === 0) return null;

  return (
    <section id="education" className="mx-auto max-w-content px-6 pb-40 pt-24">
      <h2 className="mb-8 text-sm uppercase tracking-widest text-muted">
        Education
      </h2>
      <div className="flex flex-col gap-6">
        {items.map((item) => (
          <div key={item.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold">{item.degree}</h3>
              <span className="text-xs text-muted">
                {item.start_date} — {item.end_date || "Present"}
              </span>
            </div>
            <p className="mt-1 text-sm text-fg/80">{item.institution}</p>
            {item.coursework && (
              <p className="mt-1.5 text-sm text-muted">
                Relevant coursework: {item.coursework}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
