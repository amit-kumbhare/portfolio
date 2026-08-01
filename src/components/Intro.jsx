import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Mail, Github, Linkedin, Twitter, FileText } from "lucide-react";

const LINK_ICONS = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  cv: FileText,
};

export default function Intro() {
  const [data, setData] = useState(null);

  useEffect(() => {
    supabase
      .from("intro")
      .select("*")
      .limit(1)
      .single()
      .then(({ data }) => setData(data));
  }, []);

  const links = data
    ? [
        { key: "email", href: data.email ? `mailto:${data.email}` : null },
        { key: "github", href: data.github_url },
        { key: "linkedin", href: data.linkedin_url },
        { key: "twitter", href: data.twitter_url },
        { key: "cv", href: data.cv_url },
      ].filter((l) => l.href)
    : [];

  return (
    <section
      id="intro"
      className="mx-auto flex min-h-screen max-w-content flex-col justify-center gap-6 px-6 pb-32 pt-24"
    >
      {data?.photo_url && (
        <img
          src={data.photo_url}
          alt={data.name}
          className="h-28 w-28 rounded-full border border-border object-cover"
        />
      )}
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {data?.name || "Add via admin panel"}
        </h1>
        <p className="mt-3 text-lg text-muted">
          {data?.tagline || "Add your tagline via admin panel"}
        </p>
      </div>
      {links.length > 0 && (
        <div className="flex flex-wrap items-center gap-4">
          {links.map(({ key, href }) => {
            const Icon = LINK_ICONS[key];
            return (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted underline underline-offset-4 hover:text-accent"
              >
                <Icon size={15} />
                {key === "cv" ? "CV" : key.charAt(0).toUpperCase() + key.slice(1)}
              </a>
            );
          })}
        </div>
      )}
    </section>
  );
}
