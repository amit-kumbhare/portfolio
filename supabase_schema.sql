-- Run this entire file in Supabase Dashboard -> SQL Editor -> New Query -> Run

-- 1. INTRO (single row)
create table if not exists intro (
  id uuid primary key default gen_random_uuid(),
  name text,
  tagline text,
  photo_url text,
  email text,
  github_url text,
  linkedin_url text,
  twitter_url text,
  cv_url text
);

-- 2. ABOUT (single row)
create table if not exists about (
  id uuid primary key default gen_random_uuid(),
  bio text
);

-- 3. WORK EXPERIENCE
create table if not exists experience (
  id uuid primary key default gen_random_uuid(),
  role text,
  company text,
  start_date text,
  end_date text,
  description text,
  achievements text[],
  order_index int default 0
);

-- 4. ACHIEVEMENTS
create table if not exists achievements (
  id uuid primary key default gen_random_uuid(),
  title text,
  description text,
  date text,
  order_index int default 0
);

-- 4b. PROJECTS
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  title text,
  description text,
  tech_stack text[],
  github_url text,
  live_url text,
  order_index int default 0
);

-- 5. YOUTUBE VIDEOS
create table if not exists youtube_videos (
  id uuid primary key default gen_random_uuid(),
  title text,
  description text,
  thumbnail_url text,
  video_url text,
  order_index int default 0
);

-- 6. SKILLS
create table if not exists skills (
  id uuid primary key default gen_random_uuid(),
  category text,
  skill_name text,
  order_index int default 0
);

-- 7. COMPETITIVE PROGRAMMING STATS
create table if not exists cp_stats (
  id uuid primary key default gen_random_uuid(),
  platform text unique, -- 'leetcode' | 'codeforces' | 'atcoder'
  rating text,
  problems_solved text,
  profile_url text
);

-- 8. EDUCATION
create table if not exists education (
  id uuid primary key default gen_random_uuid(),
  degree text,
  institution text,
  start_date text,
  end_date text,
  coursework text,
  order_index int default 0
);

-- ============ ROW LEVEL SECURITY ============
-- Public can READ everything. Only logged-in (authenticated) admin can WRITE.

alter table intro enable row level security;
alter table about enable row level security;
alter table experience enable row level security;
alter table achievements enable row level security;
alter table projects enable row level security;
alter table youtube_videos enable row level security;
alter table skills enable row level security;
alter table cp_stats enable row level security;
alter table education enable row level security;

-- Repeat this policy pattern for every table
do $$
declare
  t text;
begin
  foreach t in array array['intro','about','experience','achievements','projects','youtube_videos','skills','cp_stats','education']
  loop
    execute format('create policy "public read %1$s" on %1$s for select using (true);', t);
    execute format('create policy "auth write %1$s" on %1$s for insert with check (auth.role() = ''authenticated'');', t);
    execute format('create policy "auth update %1$s" on %1$s for update using (auth.role() = ''authenticated'');', t);
    execute format('create policy "auth delete %1$s" on %1$s for delete using (auth.role() = ''authenticated'');', t);
  end loop;
end $$;
