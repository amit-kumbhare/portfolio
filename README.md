# Portfolio

React (Vite) + Tailwind CSS + Supabase.

Built with **Vite**, not Create React App/craco — Vite has native, reliable Tailwind support with no PostCSS override quirks.

## 1. Database setup

In your Supabase project: **SQL Editor → New Query** → paste the contents of `supabase_schema.sql` → **Run**.

## 2. Create your admin login

**Authentication → Users → Add user → Create new user.** Enter your email + password, check "Auto Confirm User". This is what you'll log in with at `/admin`.

## 3. Environment variables

Your Supabase URL + anon key are already in `.env` (this file is gitignored, so it won't be pushed to GitHub — you'll need to also add these as secrets wherever you host, if not using GitHub Pages static build).

## 4. Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## 5. Deploy to GitHub Pages

Edit `vite.config.js` — set `base: "/your-repo-name/"` to match your actual GitHub repo name.

```bash
npm run build
npm run deploy
```

This pushes the `dist/` folder to a `gh-pages` branch. Then in your repo: **Settings → Pages → Source → gh-pages branch**.

**Important:** Since GitHub Pages is static hosting, your `.env` values need to be baked in at build time. Before running `npm run build`, make sure `.env` has your real Supabase URL/key (it already does) — Vite reads it automatically at build time.

## 6. Using the admin panel

Go to `yoursite.com/#/admin`, log in with the user you created in step 2, and fill in every section. The public page pulls live from Supabase, so changes reflect immediately.

## Adding content types later

Every table has a `platform`/`category`/etc. column and RLS policies already set for public-read + authenticated-write, so if you later want to auto-sync CP stats or YouTube videos via a script or Supabase Edge Function, it just needs to `upsert` into these same tables — no frontend changes required.
