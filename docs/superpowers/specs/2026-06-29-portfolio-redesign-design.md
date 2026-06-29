# Portfolio Redesign — Design Spec

**Date:** 2026-06-29
**Owner:** Ha Quoc Viet
**Reference:** https://vuihoc.ai/ (a personal portfolio — warm, neo-brutalist, light)
**Decisions:** Full rebuild · senior-balanced neo-brutalism · light default + dark toggle.

## Goal
Move from the dark-emerald "terminal" aesthetic to a warm, bright, crafted light design (with a dark toggle), restructured per the agent findings (promote the CDR flagship, add proof/testimonials, fold in a11y wins) while keeping the senior-engineer tone (dial back the reference's emoji/cartoon playfulness).

## Theming (hand-rolled, no dependency)
- Semantic CSS-variable tokens. Light values in `:root`; dark overrides under `[data-theme="dark"]`.
- `ThemeToggle` client component in the nav; persists to `localStorage.theme`.
- No-flash inline script in `<body>` head sets `data-theme` from `localStorage` (or system pref) before paint. `<html suppressHydrationWarning>`.
- Default = light; first visit respects `prefers-color-scheme`.

## Color system
**Light:** `--bg` `#f4efe6` cream · `--surface` `#fff`/`#fbf6ec` · `--ink`/`--txt` `#1a1714` · primary accent `--accent` `#15915f` (deep emerald, AA on cream) · pastel tints sage/lav/rose/sand/sky.
**Dark:** the prior mood reconciled — `--bg` `#070b0a`, `--txt` light, `--accent` `#3ddc97`, hard offset shadows → soft elevation. Both themes share one component system via tokens.

## Type & components (senior-balanced)
- Fonts: Space Grotesk (display, huge/tight) · IBM Plex Sans (body) · JetBrains Mono (pills) · **Instrument Serif** (italic accent for mixed headings).
- Neo-brutalist-lite: bordered cards + *dialed-back* hard offset shadow (`--sh: 3px 3px 0 var(--border)`), pastel-tint headers, mono uppercase pill tags **without emoji**, press-state buttons, hand-drawn underline on key phrases, organic-blob frame around the **real photo**.
- Preserve a11y wins: `:focus-visible` ring, `prefers-reduced-motion` gating, form-label associations.

## Section structure (full rebuild)
Hero (pills + name + bio + remote/seniority line + 2 CTAs + blob photo) → Capabilities (4 pastel cards) → **Selected Work (promoted up; CDR engine featured)** → About ("Who am I" divider) → Experience (timeline w/ outcome slots) → Tech Stack (compact) → **Testimonials (new; renders if provided)** → Contact (a11y-fixed form) → Footer.

## Content folds (scaffold as `TODO(viet)` — nothing fabricated)
Promote CDR engine to featured · remote/seniority hero line · testimonial quotes · real project links · quantified outcomes · reconcile "6+ years" vs timeline (needs 2020 roles).

## Rollout
1. Theme system + tokens + toggle + **hero** (visible checkpoint, both themes).
2. Restyle remaining sections to the new system.
3. Content folds + Testimonials section + recolor OG image.
4. Verify: build, both-theme screenshots, a11y (focus/reduced-motion), Lighthouse.
