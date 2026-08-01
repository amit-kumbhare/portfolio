import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Skills() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    supabase
      .from("skills")
      .select("*")
      .order("order_index", { ascending: true })
      .then(({ data }) => setItems(data || []));
  }, []);

  const grouped = items.reduce((acc, s) => {
    acc[s.category] = acc[s.category] || [];
    acc[s.category].push(s);
    return acc;
  }, {});

  if (items.length === 0) return null;

  return (
    <section id="skills" className="mx-auto max-w-content px-6 py-24">
      <h2 className="mb-8 text-sm uppercase tracking-widest text-muted">Skills</h2>
      <div className="flex flex-col gap-6">
        {Object.entries(grouped).map(([category, skills]) => (
          <div key={category}>
            <h3 className="mb-2 text-xs font-semibold uppercase text-muted">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s.id}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs"
                >
                  {s.skill_name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
