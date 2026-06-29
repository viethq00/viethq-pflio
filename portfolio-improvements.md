# Portfolio Improvements — Task Brief for Claude Code

**Repo:** Next.js portfolio (deployed at https://viethq-pflio.vercel.app/)
**Owner:** Ha Quoc Viet
**Goal:** Move the site from "good" to "clearly senior" — add verifiable proof, fix credibility bugs, and make the site itself pass the standards it claims (performance + accessibility).

---

## How to use this doc

- Work top to bottom; tasks are ordered by impact.
- Each task has **Why**, **Do**, and **Done when** (acceptance criteria).
- File paths are guesses — **locate the real component first** (this is a Next.js app; check `app/`, `components/`, `src/`).
- Anything marked 🟡 **NEEDS DECISION** requires Viet's input — don't guess; leave a clear `TODO(viet):` comment and skip the judgment call.
- Don't invent metrics. Numbers in this doc come from the existing CV; if you can't trace one, mark it `TODO(viet): verify` rather than publishing it.

### Audience assumption
Default target = **international full-time / senior roles** (clients are Australian + Norwegian). This affects a few calls flagged below. If Viet says otherwise, revisit the 🟡 items.

---

## P0 — Credibility bugs (fix first)

### TASK-1: Stat counters must never render as `0`
**Why:** The hero/about counters ("years experience", "projects shipped", "industries", "languages") currently start at `0` and animate up via JS. Any visitor with reduced-motion, JS disabled, a missed intersection trigger, or a fast scroll sees "0 years experience" — reads as broken.
**Do:**
- Find the animated counter component (search for the count-up logic / `IntersectionObserver` / a `0+` initial value).
- Render the **final number as the static/SSR value** so it's correct even before/without JS. Animate *from* a value to the real number, but the DOM's resting and fallback state must be the real number.
- Respect `prefers-reduced-motion`: if set, skip the animation and show the final number immediately.
**Done when:** With JS disabled AND with reduced-motion on, every counter shows its true value (6+, real project count, etc.) — never 0.

### TASK-2: Audit the site against its own claims (Lighthouse + a11y)
**Why:** The Services section sells "performance budgets" and "accessible, responsive interfaces." The site is the one work sample an interviewer will inspect in devtools. It must pass.
**Do:**
- Run Lighthouse (or report how to). Target ≥90 on Performance, Accessibility, Best Practices, SEO.
- Fix: missing/empty `alt` text, color-contrast failures, missing visible focus states on interactive elements, any layout shift (CLS), oversized images (the avatar is requested at `w=3840` — serve an appropriately sized image).
- Verify keyboard navigation reaches every link/button and the contact form in a sensible order.
**Done when:** Lighthouse ≥90 across all four categories; keyboard-only navigation works end to end; no console errors.

### TASK-3: Verify the contact form actually delivers
**Why:** Copy promises "your message goes straight to my inbox." Portfolio forms silently fail constantly.
**Do:** Trace the submit handler / API route / form service. Confirm success + error states are handled and the user gets visible feedback on failure. Add a `TODO(viet): send a live test from incognito` note if delivery can't be verified in-repo.
**Done when:** Submit path is confirmed wired to a real destination, with success and failure UI states.

---

## P1 — The biggest content gap: add real proof

### TASK-4: Build a deep case-study page for the CDR income-detection engine
**Why:** Every project today is a confident paragraph + tech tags, nothing verifiable. One deep case study showing *how Viet thinks* outweighs the other eight cards combined. The CDR engine is the most differentiated work.
**Do:**
- Create a dedicated case-study route (e.g. `app/work/cdr-income-engine/page.tsx`) and link the existing "Clean-Energy Fintech" project card to it.
- Use the pre-drafted content in **Appendix A** below. Keep all metrics marked `TODO(viet): verify` until Viet confirms them — they're strong but must be defensible in interview.
- Match the site's existing visual language (don't introduce a new design system; reuse components/tokens).
- No client confidentiality leaks: refer to "an Australian clean-energy fintech" in the public-facing copy unless Viet approves naming Brighte. 🟡 **NEEDS DECISION:** name client or keep anonymized.
**Done when:** A polished, on-brand case-study page is reachable from the work section and reads as problem → constraints → design → tradeoffs → outcome.

### TASK-5: Make the GitHub link earn its place
**Why:** The hero links `github.com/viethq00` prominently. A sparse profile behind a prominent link hurts more than no link — the reader clicks to validate "senior" and finds little.
🟡 **NEEDS DECISION (Viet):** Either (a) the GitHub will be polished with 3–4 pinned repos + READMEs, or (b) remove the link.
**Do:** Implement whichever Viet chooses. If undecided, leave the link but add `TODO(viet): polish or remove GitHub link` and don't make it more prominent.
**Done when:** The linked GitHub is either presentable or the link is removed — no in-between.

### TASK-6: Add one quantified outcome to every project card
**Why:** Only the featured project has stats. Qualitative cards read junior. The numbers already exist in the CV.
**Do:** Add a single impact metric per card where one exists. Known starting points (verify before publishing):
- Clean-Energy Fintech / CDR: ~80% reduction in manual income verification; 90%+ regular-income detection accuracy.
- MXV Exchange: high-volume order execution via Kafka/Redis; worker-thread + cluster scaling (add a concrete throughput/latency number if Viet has one — `TODO(viet)`).
- Retail CV platform: 8 services, 100% TypeScript (already present) — keep.
- Others: `TODO(viet): add one metric or omit`.
**Done when:** Each project card shows at most one credible, sourced metric; unsourced ones are left as TODOs, not invented.

---

## P2 — Curation & polish

### TASK-7: Curate the project list (fewer, deeper)
**Why:** Nine projects, several thin (eco bamboo store, pharma loyalty mini-app). Senior portfolios show fewer, deeper.
**Do:** Feature 4–5 strongest projects prominently; move the rest into a compact "Also worked on" list or remove. 🟡 **NEEDS DECISION:** which to feature — default keep CDR/Fintech, Retail CV, MXV Exchange, + one freelance.
**Done when:** Work section leads with depth, not volume.

### TASK-8: Add social/OG meta + preview image
**Why:** Portfolios get passed around in DMs/Slack/LinkedIn. Right now a shared link has no rich preview.
**Do:** Add Open Graph + Twitter card meta (title, description, `og:image`). Generate a branded 1200×630 preview image. Use Next.js metadata API (`generateMetadata` / `metadata` export) or `next/og`.
**Done when:** Pasting the URL into a link-preview tester renders a proper card with image, title, description.

### TASK-9: Make the AI-workflow claim concrete or cut it
**Why:** "Expert user of Claude and Claude Code" sits in About as a tool claim, not a demonstrated skill.
🟡 **NEEDS DECISION:** keep + make concrete (one specific example of AI built into Viet's review/testing workflow) or remove.
**Do:** Implement the chosen direction; if keeping, replace the generic line with one concrete sentence Viet provides.
**Done when:** The line either shows a specific, credible practice or is gone.

### TASK-10: Reconcile "6+ years" with the visible timeline
**Why:** The Experience section starts at 2021 (JUSEI), so a reader doing the math sees ~5 years, not 6+. The CV has 2020 roles (Re.Monster, Kanimal Clash) that aren't shown.
**Do:** Either add the earliest 2020 role to the portfolio timeline, or soften the header so the math matches what's displayed.
**Done when:** The headline year count is consistent with the visible experience entries.

### TASK-11: Fix minor consistency nits
- Phone number format differs (`+84 83536 6950` on site). Standardize to one format site-wide.
**Done when:** Contact details are formatted identically everywhere.

---

## Out of scope (CV, not this repo)
These live in the PDF, not the site — handle separately. Listed so they're not forgotten:
- CV says English "B2 to C1 (IELTS 6.5)" in one place and "B2" in another — pick one (IELTS 6.5 ≈ B2).
- 🟡 For international applications, consider removing DOB + photo from the **CV** (keep photo on the site).

---

## Appendix A — Pre-drafted CDR case-study content (for TASK-4)

> Metrics below are from the existing CV. Mark each `TODO(viet): verify` in the rendered page until confirmed — they must survive interview scrutiny ("how did you measure 90%?").

**Title:** Detecting income from raw bank transactions — a CDR income engine

**The problem**
Credit assessment for clean-energy loans needed reliable income figures, but the only input was raw, messy bank-transaction data shared via Australia's Consumer Data Right (CDR). Manual verification was slow and inconsistent, and naive approaches double-count income or miss irregular pay.

**Constraints**
- Financial decisions → errors are expensive; the system had to be conservative and auditable.
- Real-world transaction data is noisy: inconsistent descriptions, mixed income types (base salary, overtime, bonus, seasonal), and sparse history for some applicants.
- Output had to be explainable for downstream risk decisions, not a black box.

**Approach (multi-phase algorithm)**
1. **Category filtering** to isolate plausible income transactions.
2. **Clustering** of similar transactions using a weighted similarity score (≈70% description via Levenshtein, ≈30% amount tolerance) to identify distinct income streams.
3. **Single-assignment** clustering to mathematically prevent double-counting.
4. **Frequency detection** via transaction-gap analysis to classify weekly / fortnightly / monthly / quarterly patterns, normalized to monthly equivalents.
5. **Confidence scoring** factoring frequency consistency, sample size, and variance.
6. **Edge-case handling:** base salary vs overtime, bonus detection, seasonal income, and insufficient-data fallbacks using conservative estimation.

**Output**
Normalized monthly income, inferred frequency, per-cluster confidence scores, and audit metadata for downstream processing.

**Outcomes** *(verify before publishing)*
- 90%+ accuracy detecting regular income (salary/pension). `TODO(viet): verify`
- 85%+ frequency-classification accuracy. `TODO(viet): verify`
- Monthly estimates within ~5% of actual. `TODO(viet): verify`
- ~80% reduction in manual verification workload. `TODO(viet): verify`
- Designed to cover 95%+ of real-world transaction scenarios. `TODO(viet): verify`

**What I'd highlight in an interview**
The interesting decisions were the weighted similarity scoring, the single-assignment rule that structurally prevents double-counting, and the confidence model that makes the output trustworthy enough to drive risk decisions.

---

## Suggested commit sequence
1. P0 fixes (TASK-1, 2, 3) — one PR.
2. CDR case study + card link (TASK-4) — one PR.
3. Project metrics + curation (TASK-6, 7) — one PR.
4. Meta/OG + consistency + AI line (TASK-8, 9, 10, 11) — one PR.

Leave all 🟡 NEEDS DECISION items as `TODO(viet):` comments rather than guessing.
