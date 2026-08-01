import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function EditableSingleton({ table, fields }) {
  const [row, setRow] = useState(null);
  const [saving, setSaving] = useState(false);
  const [savedMsg, setSavedMsg] = useState(false);

  useEffect(() => {
    supabase
      .from(table)
      .select("*")
      .limit(1)
      .single()
      .then(({ data }) => setRow(data || {}));
  }, [table]);

  const updateField = (key, value) => {
    setRow((prev) => ({ ...prev, [key]: value }));
  };

  const save = async () => {
    setSaving(true);
    setSavedMsg(false);
    const payload = { ...row };
    const id = payload.id;
    delete payload.id;
    if (id) {
      await supabase.from(table).update(payload).eq("id", id);
    } else {
      const { data } = await supabase.from(table).insert(payload).select().single();
      setRow(data);
    }
    setSaving(false);
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 2000);
  };

  if (!row) return <p className="text-sm text-muted">Loading...</p>;

  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.key} className={f.type === "textarea" ? "sm:col-span-2" : ""}>
            <label className="mb-1 block text-xs text-muted">{f.label}</label>
            {f.type === "textarea" ? (
              <textarea
                value={row[f.key] || ""}
                onChange={(e) => updateField(f.key, e.target.value)}
                rows={5}
                className="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
              />
            ) : (
              <input
                type="text"
                value={row[f.key] || ""}
                onChange={(e) => updateField(f.key, e.target.value)}
                className="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
              />
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-end gap-3">
        {savedMsg && <span className="text-xs text-accent">Saved</span>}
        <button
          onClick={save}
          disabled={saving}
          className="rounded-md bg-accent px-4 py-1.5 text-xs font-medium text-white hover:opacity-90 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
}
