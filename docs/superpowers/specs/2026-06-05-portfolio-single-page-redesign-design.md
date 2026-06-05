# Portfolio Single-Page Redesign — Design Spec

**Date:** 2026-06-05
**Owner:** Ha Quoc Viet (viethq00)
**Status:** Awaiting review

## Goal

Restructure the existing multi-page Next.js portfolio into a **single-page,
scroll-down site** modeled on the *format* of https://vuihoc.ai/ — an
emoji-driven, modern-minimal personal portfolio. All current content is
preserved and remapped onto vuihoc-style stacked sections. The Resume page's
tabbed UI is flattened into normal page sections (no `<Tabs>`). Header links
smooth-scroll to the matching section.

Visual direction (chosen by owner): **Refined dark hybrid** — keep a dark
theme but soften the current neon-green into a calmer emerald, reduce glow, add
whitespace.

## Non-goals / out of scope

- **Blog** and **Tools** sections from vuihoc — no content exists; omitted.
- No new backend. The contact form keeps posting to the existing endpoint.
- No content rewriting beyond light section framing (emoji headers, status
  badges). No invented hobbies/certifications.

## Reference format (vuihoc.ai)

Single sticky nav → hero (name + tagline + CTAs + avatar) → emoji identity bar
→ 4-card expertise grid → `★ Who am I? ★` about → `★ My Work ★` project cards
with status badges → footer with a playful signature. Decorative `★` eyebrows
divide sections; tone is casual-professional.

## Architecture

### Single page
- `app/page.jsx` renders all section components in order. No other content
  routes remain.
- Each section is a component under `components/sections/` with a stable
  `id` used as a scroll anchor.
- Section reveal animations use Framer Motion `whileInView` (replacing the
  per-route enter transitions), with `viewport={{ once: true }}`.

### Navigation (smooth-scroll + scroll-spy)
- Nav links point to in-page anchors: `#home`, `#about`, `#experience`,
  `#skills`, `#work`, `#contact`. (Expertise and Stats are part of the scroll
  flow but not in the nav — matching vuihoc, which lists fewer nav items than
  sections.)
- Smooth scrolling via CSS `html { scroll-behavior: smooth }`.
- Sticky-header overlap handled with `scroll-margin-top` on each section
  (≈ header height, ~96px).
- **Scroll-spy**: a `useActiveSection(ids)` hook (IntersectionObserver) sets
  the active link; active link gets the accent underline already in `Nav.jsx`.
- Logo click scrolls to `#home` (top).
- Mobile nav (`MobileNav.jsx`) uses the same anchors and closes the sheet on
  click.

### Old-route redirects (avoid 404s on existing links)
Add to `next.config.mjs` (`redirects()`):
- `/services` → `/#expertise`
- `/resume`   → `/#about`
- `/work`     → `/#work`
- `/contact`  → `/#contact`

### Removed / retired
- `app/services/page.jsx`, `app/resume/page.jsx`, `app/work/page.jsx`,
  `app/contact/page.jsx` — content migrated into sections; routes redirect.
- `components/PageTransition.jsx`, `components/StairTransition.jsx`,
  `components/Stairs.jsx` — page-to-page transitions are obsolete on a single
  page. A light initial fade (optional) can live in `app/page.jsx`.
- The Radix `<Tabs>` usage from the resume page is dropped. The
  `components/ui/tabs.jsx` primitive file may remain unused (harmless) or be
  deleted in cleanup.

## Theme — refined dark hybrid

Centralize tokens so the palette is tunable.

| Token | Current | New |
|---|---|---|
| Background (`primary`) | `#1c1c22` / `rgb(21,21,31)` (inconsistent) | **`#14141a`** (unify both) |
| Accent (`accent.DEFAULT`) | `#00ff99` | **`#34d399`** (emerald-400) |
| Accent hover | `#00e187` | **`#2dd4bf`** (teal-400) |

- **Glow reduction:** lower opacity/spread in `.box-glow`, `.text-glow`,
  `pulse-glow`, and the `Photo` SVG rings (`#00ff99` → emerald, reduced
  opacity). Card hover borders use emerald at low alpha instead of neon.
- **Name treatment:** replace the rainbow neon `.text-shimmer` on the hero name
  with a subtle emerald→white gradient (or solid white with emerald accent
  word). De-neon the typing cursor (`.cursor-blink::after` → emerald).
- **Whitespace:** increase vertical section padding (e.g. `py-24 xl:py-32`) and
  inter-element spacing for an airier feel.
- **Background:** recolor `AnimatedBackground` orbs to emerald/teal at lower
  opacity; keep `bg-dot-pattern` but emerald-tinted.
- **Section eyebrows:** small uppercase mono label + `★ Title ★` heading per
  section (vuihoc style).

### Typography
- Distinctive pairing (deliberately avoids generic Inter/Roboto/system fonts,
  per frontend-design guidance): **Bricolage Grotesque** (`--font-bricolage`)
  for display/headings and **Hanken Grotesk** (`--font-hanken`) for body —
  both via `next/font/google`.
- Keep **JetBrains Mono** (`--font-jetbrainsMono`) for accents: section
  eyebrows, the emoji identity bar, tech-stack chips, badges, durations.
- This split is what makes the page read "refined" rather than "terminal."

## Sections (content + behavior)

Content is extracted into a single data module **`lib/data.js`** (exports:
`profile`, `socials`, `stats`, `expertise`, `experience`, `education`,
`skills`, `additionalTools`, `projects`, `contactInfo`) so section components
stay presentational. Values below come verbatim from the current code.

### 1. Hero — `#home`  (`components/sections/Hero.jsx`)
- Eyebrow: pulsing dot + typing role cycler (existing `useTyping`), roles:
  Senior Software Engineer / Fullstack Developer / Technical Leader / System
  Architect. Cursor recolored emerald.
- Headline: "Hello, I'm **Ha Quoc Viet**" (gradient on the name).
- Bio: "Fullstack developer based in Vietnam — building high-performance web &
  mobile applications from frontend to backend with a focus on scalability and
  clean architecture."
- Quote: "How you do anything is how you do everything."
- CTAs: `View work →` (scroll to `#work`) and **Download CV**
  (`/assets/CV_HaQuocViet_SeniorFullstack.pdf`) + socials (LinkedIn, GitHub).
- Right: `Photo` avatar (`/assets/avatarfacebook.jpg`), rings recolored.

### 2. Identity bar  (`components/sections/IdentityBar.jsx`)
- Mono row of emoji statements:
  `💻 FULLSTACK BUILDER` · `⚡ SHIPPING PRODUCTS` · `🏗️ SYSTEM ARCHITECT` ·
  `☕ COFFEE-DRIVEN`.
- Full-width band, subtle top/bottom border. Static (no marquee) by default.

### 3. Expertise — `#expertise`  (`components/sections/Expertise.jsx`)
- Eyebrow "What I Offer" / heading `★ What I Do ★`.
- 4 cards (from current Services), emoji + title + badge + description:
  1. 🖥️ **Web Development** — *Full-Stack* — React, Next.js, Node.js, cloud.
  2. 📱 **Mobile Development** — *iOS & Android* — React Native, native-feel UX.
  3. 🏗️ **System Architecture** — *Backend* — microservices, Kafka, Redis.
  4. 👥 **Technical Leadership** — *Leadership* — planning, review, mentoring.

### 4. Stats  (`components/sections/Stats.jsx` — refactor existing)
- 4 `CountUp` cards: `6+` Years Experience 🚀, `8+` Projects Completed 💼,
  `6+` Happy Clients ⭐, `2` Languages 🌏. Recolored, lower glow.

### 5. About — `#about`  (`components/sections/About.jsx`)
- Eyebrow "Personal" / heading `★ Who Am I? ★`.
- Intro paragraph (from resume `about.description`).
- Quick-facts grid (from `about.info`): Name, Phone (+84 83536 6950),
  Experience (6 Years), Nationality (Vietnamese), Email (viethq00@gmail.com),
  Freelance (Available ✓), Languages (English B2-C1 IELTS 6.5, Vietnamese).
- **Education** card nested here: VNU — Hanoi University of Science, Bachelor's
  — Computer & Information Science Advanced Program, 2018–2023.
- *Open item:* optional "fun facts" — default to facts derived from real data
  + one ☕; do not invent hobbies. Owner may supply 2–3.

### 6. Experience — `#experience`  (`components/sections/Experience.jsx`)
- Eyebrow "Career" / heading `★ Experience ★`.
- Vertical timeline of 6 roles (position, company, duration badge, details):
  CMC Global; FPT Software; MXV Exchange Platform; Vitadiary & Traphaco ZMA;
  Amai Content; JUSEI Master (full text from `resume/page.jsx`).
- No fixed-height `ScrollArea` — the whole list renders inline (flattened).

### 7. Skills — `#skills`  (`components/sections/Skills.jsx`)
- Eyebrow "Expertise" / heading `★ Tech Stack ★`.
- **Core technologies:** responsive grid of 24 icon tiles with tooltips
  (HTML5, CSS3, JavaScript, TypeScript, React, React Native, Node.js, Nest.js,
  Next.js, Tailwind, Docker, Kafka, Redis, MongoDB, MySQL, PostgreSQL,
  ExpressJS, AWS, Nginx, Git, GitHub, GitLab, Jira, Trello). Icon colors kept.
- **Additional tools:** chip row of 17 items (DynamoDB, AWS S3/EC2/ECS/
  CloudFront/RDS/Lambda/EventBridge/Step Functions/SQS, Terraform, Puppeteer,
  Selenium, Unix/Linux, VS Code, English B2-C1, Agile/Scrum).

### 8. Work — `#work`  (`components/sections/Work.jsx` — refactor existing)
- Eyebrow "Portfolio" / heading `★ My Work ★`.
- 8 project cards (num, category tag, title, description, stack chips, links).
- **Status badges** (new): `SHIPPED` for projects with a live/mobile URL
  (NanoTrading, MXV Exchange, Amai Content), `DELIVERED` otherwise. Badge sits
  with the category tag.
- Live/mobile/github icon links preserved (recolored hovers).

### 9. Contact — `#contact`  (`components/sections/Contact.jsx` — move existing)
- Eyebrow "Contact" / heading `★ Let's Work Together ★`.
- Existing form (first/last name, email, phone, service select, message) →
  `POST https://api.trephuongbac.com/users/send-email`, toast on success.
- Info cards: Phone, Email, Location (Ha Noi, Vietnam).

### 10. Footer  (`components/sections/Footer.jsx`)
- Socials (LinkedIn, GitHub), email, `Built with Next.js + ☕`, copyright.

## Component / file plan

**New**
- `components/sections/{Hero,IdentityBar,Expertise,Stats,About,Experience,Skills,Work,Contact,Footer}.jsx`
- `lib/data.js` (content), `lib/useActiveSection.js` (scroll-spy hook)

**Modified**
- `app/page.jsx` — compose all sections.
- `app/layout.jsx` — add Bricolage Grotesque + Hanken Grotesk fonts; drop `PageTransition`/`StairTransition`;
  keep `AnimatedBackground` (recolored), `Header`, `Toaster`; update metadata.
- `app/globals.css` — retune tokens/glow, `text-shimmer`, cursor; add
  `scroll-behavior` + `scroll-margin-top`; Inter var in `body`.
- `tailwind.config.js` — `primary` `#14141a`, emerald `accent`, Inter font.
- `next.config.mjs` — `redirects()`.
- `components/Nav.jsx`, `components/MobileNav.jsx`, `components/Header.jsx` —
  anchor links + scroll-spy + smooth scroll; CTA → `#contact`.
- `components/Photo.jsx`, `components/Social.jsx`, `components/AnimatedBackground.jsx`
  — recolor to emerald/lower glow.

**Removed**
- `app/services/page.jsx`, `app/resume/page.jsx`, `app/work/page.jsx`,
  `app/contact/page.jsx`
- `components/PageTransition.jsx`, `components/StairTransition.jsx`,
  `components/Stairs.jsx`

## Responsive & accessibility
- Mobile: single-column sections; mobile sheet nav with anchor links.
- Anchor links are real `<a href="#...">` (keyboard + no-JS friendly); JS only
  enhances active-state/scroll-spy.
- Respect `prefers-reduced-motion`: gate the heavier Framer/orb animations.
- Maintain contrast on the darker `#14141a` background.

## Verification plan
- `npm run build` and `npm run lint` clean.
- Read rendered JSX for each section; confirm content parity with the old
  pages (no dropped roles/projects/skills).
- Manual (owner to confirm in browser): nav links scroll to correct sections;
  scroll-spy highlights active link; header doesn't cover section tops; mobile
  nav scrolls + closes; old routes redirect; contact form submits + toasts;
  layout at sm/md/xl; reduced-motion.

## Decisions (owner may veto at review)
1. Single page; old routes 301-redirect to anchors.
2. Distinctive type: Bricolage Grotesque (display) + Hanken Grotesk (body);
   JetBrains Mono for accents. (Replaces the earlier "Inter" idea — frontend-design
   guidance forbids generic fonts.)
3. Keep the working contact form (not a simplified link block).
4. Experience is its own timeline section (tabs fully flattened).
5. Accent emerald `#34d399`; bg `#14141a`. (Easy to retune — single token.)

## Open items
- Optional fun-facts content for the About section.
