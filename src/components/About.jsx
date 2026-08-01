import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    supabase
      .from("about")
      .select("*")
      .limit(1)
      .single()
      .then(({ data }) => setData(data));
  }, []);

  if (!data?.bio) return null;

  return (
    <section id="about" className="mx-auto max-w-content px-6 py-24">
      <h2 className="mb-6 text-sm uppercase tracking-widest text-muted">About</h2>
      <p className="whitespace-pre-line text-base leading-relaxed text-fg/90">
        {data.bio}
      </p>
    </section>
  );
}
