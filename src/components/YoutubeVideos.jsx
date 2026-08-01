import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Youtube } from "lucide-react";

export default function YoutubeVideos() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    supabase
      .from("youtube_videos")
      .select("*")
      .order("order_index", { ascending: true })
      .then(({ data }) => setItems(data || []));
  }, []);

  if (items.length === 0) return null;

  return (
    <section id="videos" className="mx-auto max-w-content px-6 py-24">
      <h2 className="mb-8 text-sm uppercase tracking-widest text-muted">
        Latest YouTube Videos
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg border border-border bg-card"
          >
            <div className="aspect-video w-full overflow-hidden bg-black/10">
              {item.thumbnail_url && (
                <img
                  src={item.thumbnail_url}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              {item.description && (
                <p className="mt-1.5 text-sm text-fg/80">{item.description}</p>
              )}
              {item.video_url && (
                <a
                  href={item.video_url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-white hover:opacity-90"
                >
                  <Youtube size={14} />
                  Watch on YouTube
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
