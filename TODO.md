# MCP Directory — Production TODO

This is a comprehensive, step‑by‑step checklist to take MCP Directory from the current demo to a production‑ready app. Follow it in order. Each section includes acceptance criteria and commands where useful.

Legend
- [ ] pending  |  [x] done  |  [~] in progress

------------------------------------------------------------

## 0) Accounts, Projects, and Access

- [ ] Vercel account (owner) + project linked to this repo
- [ ] Clerk account + application (Dev + Prod instances)
- [ ] OpenRouter account + API key (optional, for live AI)
- [ ] Supabase account + project (Dev first; add Prod later)
- [ ] Google Analytics 4 property (GA4) for your domain
- [ ] Google AdSense (apply later, after domain + content)

Acceptance
- You can log in to all dashboards and reach the project pages.

------------------------------------------------------------

## 1) Environment Variables (Local + Vercel)

Set these in `.env.local` (local dev) and Vercel (Preview + Production):

```
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Optional (AI generation)
OPENROUTER_API_KEY=sk-or-...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...     # server-only

# Analytics (later)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXX

# Build-time conveniences (optional)
NEXT_DISABLE_ESLINT=1
```

Acceptance
- `npm run dev` works locally with Clerk sign-in and no 500s.

------------------------------------------------------------

## 2) Database: Supabase (Dev)

Why: Hosted Postgres with Row-Level Security, good JS tooling, fits Vercel.

Steps
- [ ] Create Supabase project (Region close to your users)
- [ ] In Supabase → Project Settings → API: copy URL + keys
- [ ] Add the env vars listed above to Vercel (Preview) and `.env.local`
- [ ] Create tables (use SQL below)
- [ ] Enable RLS and add policies

Suggested schema (SQL)
```sql
-- Users (Clerk userId as PK)
create table if not exists users (
  id text primary key,          -- Clerk userId
  handle text unique,
  created_at timestamptz default now()
);

-- MCP catalog
create table if not exists mcps (
  id bigserial primary key,
  name text not null,
  description text not null,
  category text not null,
  tags jsonb default '[]',
  author text not null,
  verified boolean default false,
  downloads integer default 0,
  rating numeric(3,2) default 0,
  size text,
  install_command text,
  last_updated timestamptz default now()
);

-- Packages
create table if not exists packages (
  id uuid primary key default gen_random_uuid(),
  user_id text references users(id) on delete cascade,
  name text not null,
  description text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists package_items (
  package_id uuid references packages(id) on delete cascade,
  mcp_id bigint references mcps(id) on delete cascade,
  position integer default 0,
  primary key (package_id, mcp_id)
);

-- Community (MVP)
create table if not exists community_posts (
  id bigserial primary key,
  user_id text references users(id) on delete cascade,
  title text not null,
  content text not null,
  created_at timestamptz default now()
);

create table if not exists community_comments (
  id bigserial primary key,
  post_id bigint references community_posts(id) on delete cascade,
  user_id text references users(id) on delete cascade,
  content text not null,
  created_at timestamptz default now()
);

-- Blog (optional: DB-backed; or use MDX content instead)
create table if not exists blog_posts (
  id bigserial primary key,
  slug text unique not null,
  title text not null,
  excerpt text,
  content text not null,
  tags jsonb default '[]',
  published_at timestamptz
);

-- RLS
alter table users enable row level security;
alter table packages enable row level security;
alter table package_items enable row level security;
alter table community_posts enable row level security;
alter table community_comments enable row level security;
alter table mcps enable row level security;
alter table blog_posts enable row level security;

-- Policies (examples)
create policy "public read mcps" on mcps for select using (true);
create policy "public read blogs" on blog_posts for select using (true);

create policy "own user row" on users using (auth.uid() = id) with check (auth.uid() = id);

create policy "own packages" on packages
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "own package items" on package_items
  for all using (
    exists (select 1 from packages p where p.id = package_id and p.user_id = auth.uid())
  ) with check (
    exists (select 1 from packages p where p.id = package_id and p.user_id = auth.uid())
  );

create policy "community read" on community_posts for select using (true);
create policy "community write own" on community_posts for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "comments read" on community_comments for select using (true);
create policy "comments write own" on community_comments for all using (user_id = auth.uid()) with check (user_id = auth.uid());
```

Acceptance
- You can query `mcps` from Supabase SQL editor and get rows.
- RLS prevents other users from reading/writing private data.

------------------------------------------------------------

## 3) Supabase Integration in Code

- [ ] Add Supabase client helpers (server + client)
- [ ] Replace `src/data/mcps.ts` with DB queries in Browse/Packages
- [ ] Create API routes for packages: create, list, load, save, delete
- [ ] Migrate current localStorage package to DB on first save
- [ ] Add user bootstrap: on first sign-in, upsert `users` with Clerk userId

Acceptance
- Browse page reads MCPs from DB (search/sort still work)
- Packages saved/loaded per signed-in user

------------------------------------------------------------

## 4) AI Creator — Make It Production

- [ ] Zod schema validate `/api/creator` outputs
- [ ] Error states + retries; show model errors nicely
- [ ] Unify the premium create UI with the functional generator
- [ ] Optional: save generated MCP to DB when added to package

Acceptance
- Generate → review details → add to package → package persists in DB

------------------------------------------------------------

## 5) Package Installer — Improve UX & Output

- [ ] Prefer MCP `install_command`; category fallbacks per OS
- [ ] Show OS tips (macOS/Linux/Windows)
- [ ] JSON export of package
- [ ] Shareable public read page: `/packages/:id`

Acceptance
- Clear installer for both shells; copy/download works; shared URL renders package

------------------------------------------------------------

## 6) Community (MVP)

- [ ] Feed of posts (title/body, counts)
- [ ] Post detail with comments
- [ ] Create post/comment (signed-in only)
- [ ] Simple reporting flag (DB field)

Acceptance
- Auth users can post; read is public; data stored in Supabase

------------------------------------------------------------

## 7) Blog & SEO

- [ ] `/blog` list + `/blog/[slug]` (MDX or DB)
- [ ] JSON-LD for BlogPosting
- [ ] Update sitemap to include blog + dynamic pages
- [ ] Per-page OG images (static first; dynamic later)
- [ ] Lighthouse pass (Core Web Vitals budgets)

Acceptance
- At least 3 solid posts (what is MCP, how to use, top MCPs)
- No major Lighthouse SEO/perf errors

------------------------------------------------------------

## 8) Analytics & AdSense

Google Analytics 4 (GA4)
- [ ] Create GA4 property → get `G-XXXX`
- [ ] Add GTM/gtag scripts with `nonce` in `layout.tsx`
- [ ] Update CSP to allow `www.googletagmanager.com` + `www.google-analytics.com`

AdSense (after domain + content)
- [ ] Apply for AdSense
- [ ] Add verification + ad scripts; update CSP to allow `pagead2.googlesyndication.com`, `googleads.g.doubleclick.net`, `tpc.googlesyndication.com`
- [ ] Place limited ad units (e.g., blog sidebar) per policy

Acceptance
- GA4 shows page views
- AdSense account approved; ads render without CSP violations

------------------------------------------------------------

## 9) Security & Policies

- [ ] Legal pages: `/legal/privacy`, `/legal/terms`, `/legal/cookies`
- [ ] Durable rate limit (Upstash Redis or Vercel KV) replacing in-memory
- [ ] Optional: Sentry for error tracking (server + client)

Acceptance
- Headers (CSP, HSTS, etc.) present; no CSP console errors
- Rate limits effective across regions

------------------------------------------------------------

## 10) Domain & Production Launch

- [ ] Buy domain and add to Vercel project (A/ALIAS per Vercel guide)
- [ ] Add domain to Clerk (Application URLs + Allowed Origins)
- [ ] Update env vars if domain-dependent
- [ ] Test sign-in, packages, creator, community, blog, sitemap, robots

Acceptance
- App reachable on custom domain; all flows work end to end

------------------------------------------------------------

## 11) Ops, QA, and Runbooks

Smoke Test (every deploy)
- Home: hero, nav, links
- Browse: search/sort/filter
- Packages: add/remove, save/load, script generate (Bash + PS), share page
- Create: generate MCP, error states, add to package
- Community: create/read posts + comments
- Blog: list + detail; OG tags
- Auth: sign-in/out, dashboard
- SEO: `sitemap.xml`, `robots.txt`, meta tags

Runbooks
- Rollback: redeploy previous commit in Vercel
- Rate limit: adjust limits in middleware / KV config
- CSP: when adding a provider, update middleware allowlists

------------------------------------------------------------

## Baby Steps — Supabase Setup (Hand‑holding)

1) Go to https://supabase.com → Sign up → Create new project.
2) Pick a region near your users; choose a strong DB password.
3) In Project → Settings → API: copy Project URL & `anon`/`service_role` keys.
4) Add to `.env.local` and Vercel envs (Preview/Production):
   - `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
5) In Project → SQL editor: paste the schema above, run it.
6) In Project → Table editor: confirm tables exist.
7) Seed `mcps` with a few rows (copy from the current demo data).
8) I’ll then swap the code to read/write from Supabase (Browse/Packages) and add APIs.

When done, tell me and I will:
- Add Supabase client helpers
- Replace demo data with DB queries
- Implement package APIs & migration from localStorage
- Start wiring Community & Blog

------------------------------------------------------------

## Backlog / Nice‑to‑haves

- Social auth (Google/GitHub) via Clerk
- Image OG generator endpoint
- Advanced package recipe templates
- MCP validation/testing harness (sandbox)
- Teams/orgs (multi-user packages)

