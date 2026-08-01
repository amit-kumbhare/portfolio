import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

const PLATFORM_ORDER = ["leetcode", "codeforces", "atcoder"];
const PLATFORM_LABEL = {
  leetcode: "LeetCode",
  codeforces: "Codeforces",
  atcoder: "AtCoder",
};

export default function CompetitiveProgramming() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    supabase
      .from("cp_stats")
      .select("*")
      .then(({ data }) => {
        const map = {};
        (data || []).forEach((row) => (map[row.platform] = row));
        setStats(map);
      });
  }, []);

  return (
    <section id="cp" className="mx-auto max-w-content px-6 py-24">
      <h2 className="mb-8 text-sm uppercase tracking-widest text-muted">
        Competitive Programming &amp; DSA
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {PLATFORM_ORDER.map((platform) => {
          const s = stats[platform];
          return (
            <div
              key={platform}
              className="rounded-lg border border-border bg-card p-5 text-center"
            >
              <h3 className="text-sm font-semibold">{PLATFORM_LABEL[platform]}</h3>
              <p className="mt-3 text-2xl font-bold">
                {s?.rating ?? "—"}
              </p>
              <p className="text-xs text-muted">rating</p>
              <p className="mt-3 text-lg font-semibold">
                {s?.problems_solved ?? "—"}
              </p>
              <p className="text-xs text-muted">problems solved</p>
              {s?.profile_url && (
                <a
                  href={s.profile_url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block rounded-full border border-border px-3 py-1.5 text-xs hover:border-accent hover:text-accent"
                >
                  View Profile
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
