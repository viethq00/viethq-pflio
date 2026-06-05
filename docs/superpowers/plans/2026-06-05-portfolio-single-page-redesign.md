# Portfolio Single-Page Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement task-by-task. Visual sections are built with the **frontend-design** skill. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Convert the multi-page portfolio into one beautiful, single-page scroll site (vuihoc.ai format) with all Resume tabs flattened into stacked sections and smooth-scroll anchor nav — at a 10/10 "hire-this-engineer" quality bar.

**Architecture:** All sections render in `app/page.jsx` as components under `components/sections/`. Content lives in `lib/data.js`. Nav uses in-page anchors + an IntersectionObserver scroll-spy hook. Old routes 301-redirect to anchors. Theme retuned to "refined dark hybrid" (emerald on `#14141a`, low glow, Inter + JetBrains Mono).

**Tech Stack:** Next.js 14 (app router), Tailwind, Framer Motion, Radix UI (tooltip/select/scroll-area kept where used), react-icons, react-countup, next/font (Inter + JetBrains Mono).

**Verification model:** No test runner exists; do NOT add one. Each task verifies via `npm run build`, `npm run lint`, careful rendered-JSX review, and a final manual browser pass. **Do NOT `git commit`** during execution — the owner commits manually (global rule).

---

## Design System (the 10/10 bar)

**Palette**
- Base bg `#14141a`; raised surfaces `#1a1a22` / `#1e1e28`; hairline borders `rgba(255,255,255,0.06–0.10)`.
- Text: `#ffffff` (headings) · `white/70` (body) · `white/45` (muted) · `white/30` (faint).
- Accent emerald `#34d399` (DEFAULT), hover/secondary teal `#2dd4bf`. Use gradients sparingly (name + one or two accents).

**Typography**
- **Bricolage Grotesque** (`--font-bricolage`) display/headings + **Hanken Grotesk** (`--font-hanken`) body. **JetBrains Mono** (`--font-jetbrainsMono`) for eyebrows, tags, badges, durations, the identity bar. (No Inter — frontend-design forbids generic fonts.)
- Scale: hero `clamp(2.75rem,6vw,5rem)`/700/tracking-tight; section h2 `clamp(1.9rem,3vw,2.75rem)`/700; card title `1.25–1.5rem`/600; body `1rem–1.0625rem`/leading-relaxed; eyebrow `0.75rem` mono uppercase tracking-[0.2em] accent.

**Spacing / shape**
- Section rhythm `py-24 xl:py-32`; container max `1200px`; cards `rounded-2xl`, chips `rounded-full`/`rounded-md`.
- Surfaces: `glass-card` softened (lighter bg, `1px` border, inset top highlight). Hover = border → `accent/25` + faint shadow, **no neon**.

**Motion language**
- Scroll reveal: `initial={{opacity:0,y:24}}` → `whileInView={{opacity:1,y:0}}`, `viewport={{once:true,margin:"-80px"}}`, `duration:0.6, ease:[0.22,1,0.36,1]`; stagger children `0.06`.
- Micro-interactions: translate/scale on hover, icon `scale-110`, link arrow `translate-x`. Gate heavy motion behind `prefers-reduced-motion`.

**Section pattern** (consistent across all)
- `<section id>` + `scroll-mt-24` → centered eyebrow/heading block: mono eyebrow, then `★ Title ★` (stars are small `accent/50`), optional one-line subhead `white/45`.

**Distinctive, non-generic touches**
- Mono "ticker" identity band; numbered project cards with outlined numerals; Experience as a vertical timeline (connector line + accent node dots); restrained name gradient; emerald dotted background at very low opacity; `focus-visible` accent rings; semantic landmarks + `aria-current` on active nav.

---

## File Structure

**Create**
- `lib/data.js` — all content (single source of truth).
- `lib/useActiveSection.js` — scroll-spy hook.
- `components/sections/Hero.jsx`, `IdentityBar.jsx`, `Expertise.jsx`, `Stats.jsx`, `About.jsx`, `Experience.jsx`, `Skills.jsx`, `Work.jsx`, `Contact.jsx`, `Footer.jsx`.
- `components/Section.jsx` — shared eyebrow/`★ heading` wrapper (DRY).

**Modify**
- `tailwind.config.js`, `app/globals.css`, `app/layout.jsx`, `app/page.jsx`, `next.config.mjs`.
- `components/Nav.jsx`, `components/MobileNav.jsx`, `components/Header.jsx`.
- `components/Photo.jsx`, `components/Social.jsx`, `components/AnimatedBackground.jsx` (recolor → emerald/low-glow).

**Remove**
- `app/services/page.jsx`, `app/resume/page.jsx`, `app/work/page.jsx`, `app/contact/page.jsx`.
- `components/PageTransition.jsx`, `components/StairTransition.jsx`, `components/Stairs.jsx`.

---

## Task 1 — Theme foundation (tokens, fonts, global CSS)

**Files:** Modify `tailwind.config.js`, `app/globals.css`, `app/layout.jsx`.

- [ ] **Step 1: Tailwind tokens.** In `tailwind.config.js` `theme.extend.colors`, set `primary: "#14141a"`, `accent: { DEFAULT: "#34d399", hover: "#2dd4bf" }`. Add `surface: { DEFAULT:"#1a1a22", raised:"#1e1e28" }`. Add fonts under `theme.extend.fontFamily`: `sans: ["var(--font-hanken)", ...]`, `display: ["var(--font-bricolage)", ...]`, `mono: ["var(--font-jetbrainsMono)", ...]`. Recolor `hero-glow` gradient stop to `rgba(52,211,153,0.12)`.
- [ ] **Step 2: globals.css base.** `body` → `font-family: var(--font-inter)`, `background-color:#14141a`. Add `html { scroll-behavior:smooth }` and `@media (prefers-reduced-motion: reduce){ html{scroll-behavior:auto} *{animation-duration:.01ms!important;transition-duration:.01ms!important} }`. Add `.section-anchor{ scroll-margin-top:6rem }`.
- [ ] **Step 3: globals.css glow + accents.** Reduce `.box-glow` / `.text-glow` shadow alphas (~halve, accent rgb `52,211,153`). Replace `.text-shimmer` gradient with `linear-gradient(90deg,#34d399,#e6fff5 45%,#2dd4bf)` (subtle, slower). Recolor `.cursor-blink::after` and `.glass`/`.glass-card` border tints from `0,255,153` → `52,211,153`. Recolor `.bg-dot-pattern` to `rgba(52,211,153,0.05)`. Add `.star-divider` helper if useful.
- [ ] **Step 4: Fonts in layout.** In `app/layout.jsx` import `Bricolage_Grotesque` + `Hanken_Grotesk` from `next/font/google` (`variable:"--font-bricolage"` / `"--font-hanken"`). Add all three font variables to `<body className>`; switch base class to `font-sans`. Update `metadata` title/description (keep "Senior Software Engineer / Fullstack Developer", fix "5 years"→"6 years").
- [ ] **Step 5: Verify.** `npm run build` succeeds; `npm run lint` clean. (Site still renders old pages until later tasks — that's fine.)

---

## Task 2 — Content data module

**Files:** Create `lib/data.js`.

- [ ] **Step 1:** Export structured content (verbatim from current code) so sections are presentational:
  - `profile` { name, firstName, roles:[…4…], location:"Ha Noi, Vietnam", email, phone, bio, quote, cvHref:"/assets/CV_HaQuocViet_SeniorFullstack.pdf", avatar:"/assets/avatarfacebook.jpg" }
  - `socials` [{label:"LinkedIn", href:"https://www.linkedin.com/in/viethq00/"},{label:"GitHub", href:"https://github.com/viethq00"}]
  - `identity` ["💻 FULLSTACK BUILDER","⚡ SHIPPING PRODUCTS","🏗️ SYSTEM ARCHITECT","☕ COFFEE-DRIVEN"]
  - `stats` [{count:6,suffix:"+",text:"Years of Experience",icon:"🚀"},{8,"+","Projects Completed","💼"},{6,"+","Happy Clients","⭐"},{2,"","Languages Spoken","🌏"}]
  - `expertise` [{emoji:"🖥️",title:"Web Development",badge:"Full-Stack",desc},{ "📱","Mobile Development","iOS & Android"},{"🏗️","System Architecture","Backend"},{"👥","Technical Leadership","Leadership"}] (descriptions from `services/page.jsx`)
  - `about` { description, info:[…7 fields…] } (from `resume/page.jsx`)
  - `education` [{ institution, degree, duration:"2018 — 2023" }]
  - `experience` [ …6 roles… ] (position, company, duration, details — verbatim)
  - `skills` — keep the icon JSX in the component, but store `[{ key:"react", name:"React" }, …24]` and map keys→icon/color in `Skills.jsx` (icons can't live in a plain data file cleanly; map in component).
  - `additionalTools` [ …17 strings… ]
  - `projects` [ …8… ] with added `status` field: `"SHIPPED"` if `live||mobile`, else `"DELIVERED"` (NanoTrading/MXV/Amai → SHIPPED).
  - `contactInfo` [{icon-key,title,description} for Phone/Email/Location] and `services` select options.
- [ ] **Step 2: Verify.** `npm run lint`. (Pure module; build unaffected.)

---

## Task 3 — Scroll-spy hook + shared Section wrapper

**Files:** Create `lib/useActiveSection.js`, `components/Section.jsx`.

- [ ] **Step 1: Hook.** `useActiveSection(ids: string[]): string` — `"use client"`; `useState` active; `useEffect` creates an `IntersectionObserver` (`rootMargin:"-45% 0px -45% 0px"`, `threshold:0`) observing each `document.getElementById(id)`; on intersect set active to the entry's id; cleanup `disconnect()`. Guard for SSR (`typeof window`).
- [ ] **Step 2: Section wrapper.** `Section({ id, eyebrow, title, subtitle, children, className })` → `<section id className="section-anchor py-24 xl:py-32 ...">` with a motion reveal header (eyebrow mono accent, `★ {title} ★`, optional subtitle) then `{children}`. Centered on mobile, left-aligned `xl`. Use the Design-System motion values.
- [ ] **Step 3: Verify.** `npm run lint`. Hook + wrapper compile (unused until wired).

---

## Task 4 — Navigation: anchors + scroll-spy

**Files:** Modify `components/Nav.jsx`, `components/MobileNav.jsx`, `components/Header.jsx`.

- [ ] **Step 1: Nav links.** Replace route links with anchors: `[{name:"home",id:"home"},{about},{experience},{skills},{work},{contact}]`. Render `<a href={'#'+id}>`. Call `useActiveSection(ids)`; active link gets the existing accent underline + `aria-current="true"`. Smooth scroll handled by CSS.
- [ ] **Step 2: Header.** Logo `<a href="#home">`. CTA button "Let's talk" → `<a href="#contact">`. Keep sticky + scrolled `glass` behavior. Recolor accent dot.
- [ ] **Step 3: MobileNav.** Same anchor list; clicking a link closes the Radix sheet (controlled `open` state, `onClick` → `setOpen(false)`). `aria-current` on active.
- [ ] **Step 4: Verify.** `npm run build` + `lint`. (Anchors won't resolve until sections exist — acceptable mid-build.)

---

## Task 5 — Routing cleanup: redirects + remove old pages/transitions

**Files:** Modify `next.config.mjs`, `app/layout.jsx`; Remove old route pages + transition components.

- [ ] **Step 1: Redirects.** In `next.config.mjs` add async `redirects()` returning permanent redirects: `/services→/#expertise`, `/resume→/#about`, `/work→/#work`, `/contact→/#contact`.
- [ ] **Step 2: Layout cleanup.** Remove `PageTransition` and `StairTransition` imports/usage from `app/layout.jsx`; render `<Header/>` then `<main>{children}</main>` then `<Toaster/>`; keep recolored `AnimatedBackground`.
- [ ] **Step 3: Remove files.** Delete `app/services/page.jsx`, `app/resume/page.jsx`, `app/work/page.jsx`, `app/contact/page.jsx`, `components/PageTransition.jsx`, `components/StairTransition.jsx`, `components/Stairs.jsx`.
- [ ] **Step 4: Verify.** `npm run build` (no broken imports), `lint`. Old URLs redirect.

---

## Tasks 6–15 — Section components (built with frontend-design skill)

Each: create `components/sections/<Name>.jsx`, consume `lib/data.js` + `Section.jsx`, apply the Design System, scroll-reveal motion, full responsive + reduced-motion, `focus-visible` rings. **No placeholders — full markup written at build time.** Verify each with `npm run build` + `lint` + rendered-JSX read for content parity.

- [ ] **Task 6 — Hero (`#home`).** Eyebrow = pulsing dot + typing role cycler (port `useTyping`); headline "Hello, I'm {name}" (name uses subtle `text-shimmer`); bio; quote (left accent border); CTAs `View work →`(`#work`) + `Download CV` + `Social`; right = `Photo`. Recolor `Photo.jsx` rings to emerald/teal, lower opacity/glow.
- [ ] **Task 7 — IdentityBar.** Full-width mono band, hairline top/bottom borders, `identity[]` separated by middots; subtle hover lift per item. Static (no marquee).
- [ ] **Task 8 — Expertise (`#expertise`).** `★ What I Do ★`. 4 cards: big emoji, title, mono badge, description; hover border→accent + lift. Responsive 1/2/4 cols.
- [ ] **Task 9 — Stats.** Refactor existing into `sections/Stats.jsx`: 4 `CountUp` cards, recolored, lower glow, `whileInView` trigger (CountUp `start` on view). Thin strip, no nav anchor.
- [ ] **Task 10 — About (`#about`).** `★ Who Am I? ★`. Intro paragraph; quick-facts grid (`about.info` 7 fields, label/value); **Education** card (institution/degree/duration). Optional fun-facts row deferred (owner content) — omit cleanly if none.
- [ ] **Task 11 — Experience (`#experience`).** `★ Experience ★`. Vertical timeline: left connector line + accent node dots; each role = position (bold, hover→accent), company (dot + name), duration mono pill, details. All 6 rendered inline (no ScrollArea).
- [ ] **Task 12 — Skills (`#skills`).** `★ Tech Stack ★`. "Core technologies": responsive grid of 24 icon tiles + Radix tooltip (map `skills[].key`→icon/color in component). "Additional tools": chip row of 17. Stagger reveal.
- [ ] **Task 13 — Work (`#work`).** `★ My Work ★`. Refactor existing grid; add **status badge** (`SHIPPED`/`DELIVERED`) beside category tag; keep numerals (outlined, recolored), stack chips, live/mobile/github icon links + tooltips; soften scanline.
- [ ] **Task 14 — Contact (`#contact`).** `★ Let's Work Together ★`. Move existing form (same fields + `POST https://api.trephuongbac.com/users/send-email` + toast) into `sections/Contact.jsx`; info cards (phone/email/location) recolored. Add `focus-visible` rings, `aria-label`s.
- [ ] **Task 15 — Footer.** Socials (LinkedIn/GitHub), email link, `Built with Next.js + ☕`, `© {year} Ha Quoc Viet`. Hairline top border.

---

## Task 16 — Compose the page + background

**Files:** Modify `app/page.jsx`, `components/AnimatedBackground.jsx`.

- [ ] **Step 1:** `app/page.jsx` renders in order: `Hero, IdentityBar, Expertise, Stats, About, Experience, Skills, Work, Contact, Footer`. Wrap in a fragment; optional light initial fade.
- [ ] **Step 2:** Recolor `AnimatedBackground` orbs to emerald/teal, lower opacity; ensure `prefers-reduced-motion` halts drift.
- [ ] **Step 3: Verify.** `npm run build` + `lint`. All anchors now resolve.

---

## Task 17 — Final verification pass

- [ ] `npm run build` and `npm run lint` both clean (fix root causes).
- [ ] **Content parity:** every old-page item present — 4 roles, bio, quote, 4 stats, 4 expertise, 7 about facts, education, **all 6 experience roles**, **all 24 skills + 17 tools**, **all 8 projects** w/ links, contact form fields + 3 info cards. (Read rendered JSX; diff against `lib/data.js`.)
- [ ] **Anchors/scroll-spy:** nav + logo + CTA target correct sections; `scroll-mt` clears the sticky header; active link updates on scroll; old routes redirect.
- [ ] **Responsive:** sane at `sm`/`md`/`xl`; mobile sheet nav scrolls + closes.
- [ ] **Motion/a11y:** `prefers-reduced-motion` calms animation; `focus-visible` rings; landmarks present; contrast OK on `#14141a`.
- [ ] **Manual (owner):** run `npm run dev` (port 8080), click through, submit the contact form, confirm the "10/10" feel; tweak the emerald token if desired.

---

## Spec coverage check
Hero✓(6) · Identity bar✓(7) · Expertise/Services✓(8) · Stats✓(9) · About+Education✓(10) · Experience tab✓(11) · Skills+Additional-Tools tabs✓(12) · Work + status badges✓(13) · Contact form✓(14) · Footer✓(15) · single-page compose✓(16) · nav anchors+scroll-spy✓(3,4) · redirects+removals✓(5) · theme/fonts/glow/whitespace✓(1) · data module✓(2) · verification✓(17). Blog/Tools intentionally omitted. Tabs fully flattened (no `<Tabs>`). No test runner added (none exists).
