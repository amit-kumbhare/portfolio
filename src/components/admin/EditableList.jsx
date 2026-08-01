import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { Trash2, Plus } from "lucide-react";

// fields: [{ key, label, type: 'text' | 'textarea' | 'array' }]
export default function EditableList({ table, fields, emptyRow }) {
  const [rows, setRows] = useState([]);
  const [saving, setSaving] = useState(false);

  const load = () => {
    supabase
      .from(table)
      .select("*")
      .order("order_index", { ascending: true })
      .then(({ data }) => setRows(data || []));
  };

  useEffect(load, [table]);

  const updateField = (id, key, value) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [key]: value } : r))
    );
  };

  const saveRow = async (row) => {
    setSaving(true);
    const payload = { ...row };
    delete payload.id;
    if (typeof row.id === "string" && row.id.startsWith("new-")) {
      await supabase.from(table).insert(payload);
    } else {
      await supabase.from(table).update(payload).eq("id", row.id);
    }
    setSaving(false);
    load();
  };

  const deleteRow = async (id) => {
    if (typeof id === "string" && id.startsWith("new-")) {
      setRows((prev) => prev.filter((r) => r.id !== id));
      return;
    }
    await supabase.from(table).delete().eq("id", id);
    load();
  };

  const addRow = () => {
    setRows((prev) => [
      ...prev,
      { id: `new-${Date.now()}`, order_index: prev.length, ...emptyRow },
    ]);
  };

  return (
    <div className="flex flex-col gap-4">
      {rows.map((row) => (
        <div key={row.id} className="rounded-lg border border-border bg-card p-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {fields.map((f) => (
              <div key={f.key} className={f.type === "textarea" ? "sm:col-span-2" : ""}>
                <label className="mb-1 block text-xs text-muted">{f.label}</label>
                {f.type === "textarea" ? (
                  <textarea
                    value={row[f.key] || ""}
                    onChange={(e) => updateField(row.id, f.key, e.target.value)}
                    rows={3}
                    className="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
                  />
                ) : f.type === "array" ? (
                  <textarea
                    value={(row[f.key] || []).join("\n")}
                    onChange={(e) =>
                      updateField(
                        row.id,
                        f.key,
                        e.target.value.split("\n").filter(Boolean)
                      )
                    }
                    rows={3}
                    placeholder="One item per line"
                    className="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
                  />
                ) : (
                  <input
                    type="text"
                    value={row[f.key] || ""}
                    onChange={(e) => updateField(row.id, f.key, e.target.value)}
                    className="w-full rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:border-accent"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-end gap-2">
            <button
              onClick={() => deleteRow(row.id)}
              className="flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs text-red-500 hover:border-red-500"
            >
              <Trash2 size={13} /> Delete
            </button>
            <button
              onClick={() => saveRow(row)}
              disabled={saving}
              className="rounded-md bg-accent px-3 py-1.5 text-xs font-medium text-white hover:opacity-90 disabled:opacity-50"
            >
              Save
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={addRow}
        className="flex items-center justify-center gap-1.5 rounded-lg border border-dashed border-border py-3 text-sm text-muted hover:border-accent hover:text-accent"
      >
        <Plus size={15} /> Add {table.replace(/_/g, " ")}
      </button>
    </div>
  );
}
