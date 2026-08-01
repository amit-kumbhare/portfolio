import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import EditableSingleton from "../components/admin/EditableSingleton";
import EditableList from "../components/admin/EditableList";
import CPStatsEditor from "../components/admin/CPStatsEditor";

const TABS = [
  "Intro",
  "About",
  "Experience",
  "Achievements",
  "Projects",
  "Videos",
  "Skills",
  "CP Stats",
  "Education",
];

export default function AdminDashboard() {
  const [session, setSession] = useState(undefined);
  const [tab, setTab] = useState("Intro");
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) navigate("/admin");
      else setSession(data.session);
    });
  }, [navigate]);

  const logout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  if (session === undefined) return null;

  return (
    <div className="min-h-screen bg-bg px-6 py-10 text-fg">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Admin Panel</h1>
          <button
            onClick={logout}
            className="rounded-md border border-border px-3 py-1.5 text-xs hover:border-accent"
          >
            Log out
          </button>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-3 py-1.5 text-xs ${
                tab === t
                  ? "bg-accent text-white"
                  : "border border-border text-muted hover:text-fg"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "Intro" && (
          <EditableSingleton
            table="intro"
            fields={[
              { key: "name", label: "Name", type: "text" },
              { key: "tagline", label: "Tagline", type: "text" },
              { key: "photo_url", label: "Photo URL", type: "text" },
              { key: "email", label: "Email", type: "text" },
              { key: "github_url", label: "GitHub URL", type: "text" },
              { key: "linkedin_url", label: "LinkedIn URL", type: "text" },
              { key: "twitter_url", label: "Twitter/X URL", type: "text" },
              { key: "cv_url", label: "CV URL", type: "text" },
            ]}
          />
        )}

        {tab === "About" && (
          <EditableSingleton
            table="about"
            fields={[{ key: "bio", label: "Bio", type: "textarea" }]}
          />
        )}

        {tab === "Experience" && (
          <EditableList
            table="experience"
            emptyRow={{
              role: "",
              company: "",
              start_date: "",
              end_date: "",
              description: "",
              achievements: [],
            }}
            fields={[
              { key: "role", label: "Role", type: "text" },
              { key: "company", label: "Company", type: "text" },
              { key: "start_date", label: "Start Date", type: "text" },
              { key: "end_date", label: "End Date (blank = Present)", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
              { key: "achievements", label: "Achievements (one per line)", type: "array" },
            ]}
          />
        )}

        {tab === "Achievements" && (
          <EditableList
            table="achievements"
            emptyRow={{ title: "", description: "", date: "" }}
            fields={[
              { key: "title", label: "Title", type: "text" },
              { key: "date", label: "Date", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ]}
          />
        )}

        {tab === "Projects" && (
          <EditableList
            table="projects"
            emptyRow={{
              title: "",
              description: "",
              tech_stack: [],
              github_url: "",
              live_url: "",
            }}
            fields={[
              { key: "title", label: "Title", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
              { key: "tech_stack", label: "Tech Stack (one per line)", type: "array" },
              { key: "github_url", label: "GitHub URL", type: "text" },
              { key: "live_url", label: "Live Demo URL", type: "text" },
            ]}
          />
        )}

        {tab === "Videos" && (
          <EditableList
            table="youtube_videos"
            emptyRow={{
              title: "",
              description: "",
              thumbnail_url: "",
              video_url: "",
            }}
            fields={[
              { key: "title", label: "Title", type: "text" },
              { key: "thumbnail_url", label: "Thumbnail URL (16:9)", type: "text" },
              { key: "video_url", label: "YouTube URL", type: "text" },
              { key: "description", label: "Description", type: "textarea" },
            ]}
          />
        )}

        {tab === "Skills" && (
          <EditableList
            table="skills"
            emptyRow={{ category: "", skill_name: "" }}
            fields={[
              { key: "category", label: "Category (e.g. Languages)", type: "text" },
              { key: "skill_name", label: "Skill", type: "text" },
            ]}
          />
        )}

        {tab === "CP Stats" && <CPStatsEditor />}

        {tab === "Education" && (
          <EditableList
            table="education"
            emptyRow={{
              degree: "",
              institution: "",
              start_date: "",
              end_date: "",
              coursework: "",
            }}
            fields={[
              { key: "degree", label: "Degree", type: "text" },
              { key: "institution", label: "Institution", type: "text" },
              { key: "start_date", label: "Start Date", type: "text" },
              { key: "end_date", label: "End Date (blank = Present)", type: "text" },
              { key: "coursework", label: "Relevant Coursework", type: "text" },
            ]}
          />
        )}
      </div>
    </div>
  );
}
