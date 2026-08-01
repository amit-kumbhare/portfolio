import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

const PLATFORMS = ["leetcode", "codeforces", "atcoder"];
const LABELS = { leetcode: "LeetCode", codeforces: "Codeforces", atcoder: "AtCoder" };

export default function CPStatsEditor() {
  const [rows, setRows] = useState({});
  const [saving, setSaving] = useState(null);

  useEffect(() => {
    supabase
      .from("cp_stats")
      .select("*")
      .then(({ data }) => {
        const map = {};
        PLATFORMS.forEach((p) => {
          map[p] = (data || []).find((r) => r.platform === p) || {
            platform: p,
            rating: "",
            problems_solved: "",
            profile_url: "",
          };
        });
        setRows(map);
      });
  }, []);

  const update = (platform, key, value) => {
    setRows((prev) => ({ ...prev, [platform]: { ...prev[platform], [key]: value } }));
  };

  const save = async (platform) => {
    setSaving(platform);
    const row = rows[platform];
    const payload = { ...row };
    const id = payload.id;
    delete payload.id;
    if (id) {
      await supabase.from("cp_stats").update(payload).eq("id", id);
    } else {
      const { data } = await supabase
        .from("cp_stats")
        .insert(payload)
        .select()
        .single();
      setRows((prev) => ({ ...prev, [platform]: data }));
    }
    setSaving(null);
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {PLATFORMS.map((platform) => {
        const row = rows[platform] || {};
        return (
          <div key={platform} className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-3 text-sm font-semibold">{LABELS[platform]}</h3>
            <label className="mb-1 block text-xs text-muted">Rating</label>
            <input
              type="text"
              value={row.rating || ""}
              onChange={(e) => update(platform, "rating", e.target.value)}
              className="mb-3 w-full rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
            />
            <label className="mb-1 block text-xs text-muted">Problems Solved</label>
            <input
              type="text"
              value={row.problems_solved || ""}
              onChange={(e) => update(platform, "problems_solved", e.target.value)}
              className="mb-3 w-full rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
            />
            <label className="mb-1 block text-xs text-muted">Profile URL</label>
            <input
              type="text"
              value={row.profile_url || ""}
              onChange={(e) => update(platform, "profile_url", e.target.value)}
              className="mb-3 w-full rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
            />
            <button
              onClick={() => save(platform)}
              disabled={saving === platform}
              className="w-full rounded-md bg-accent py-1.5 text-xs font-medium text-white hover:opacity-90 disabled:opacity-50"
            >
              {saving === platform ? "Saving..." : "Save"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
