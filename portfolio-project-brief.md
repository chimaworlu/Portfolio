# Portfolio Project Brief — Chima Worlu

## Who this is for
Chima Worlu, Product Designer. Positioning line, fixed, never changes:
"Product Designer who designs and builds useful digital products."

Skill tags (homepage only, small pills, secondary weight):
Product Design, AI Product Building, UX Research.

## Tech stack
React, Tailwind CSS, GSAP. No backend, no database. Frontend-only.

## Visual system
- Font: Inter
- Primary Blue: #2563EB
- Blue Tint: #EFF4FE
- Ink: #0F172A
- Secondary text: #475569
- Border: #E2E8F0
- Card radius: 16px
- Spacing base: 8px
- Section gaps: 140px
- Side margins: 80px
- No em dashes anywhere in copy
- Light/dark mode: system-adaptive by default, manual switch overrides, choice persists on return, first-ever visit always follows system preference

## Global design principles (do not violate)
- No decorative floating shapes, no ambient background motion, no parallax without informational purpose
- No custom cursor
- Background stays plain white (light mode) with no texture or grain
- Every animation must be tied to real content, never decoration for its own sake
- Numbers only animate (count-up) when they are real, earned figures, never invented
- Consistent spacing, card style, and type scale across every section, homepage and case studies alike

## Animation inventory (GSAP)
1. **Assembly load-in** — plays once on homepage load, under 1.5s. Bare structure (grid lines, unstyled type) draws in first, then snaps into the finished styled hero.
2. **Scroll-triggered reveals** — one consistent entrance (small upward fade), staggered slightly per element, used throughout homepage and case studies. No per-letter text splitting, no varied directions.
3. **Project card hover** — layer-peel effect: briefly reveals a glimpse of underlying structure (token grid / wireframe) beneath the finished video, then settles back.
4. **Card-to-case-study transition** — shared-element morph (GSAP Flip) from the clicked card into the case study's opener, not a hard cut or generic fade.
5. **Count-up animation** — for real, earned metrics only (e.g. ServiceHub's survey stats).
6. **Dark/light mode switch** — smooth radial wipe transition (nods to Legible's own system-adaptive light/dark behavior).

## Navigation
Fixed nav bar, 80px tall, white background, 1px bottom border (#E2E8F0), no shadow.

**Homepage nav:** Name (left, links home) — Work / Experience / About / Contact (right, scroll-to-section links).

**Case study page nav:** Name (left, links home) — Back to Work / Contact (right).

## Homepage structure (in order)

### 1. Hero (~600px)
- Availability badge (small pill, dot indicator, "Available for work")
- Name (largest type on page)
- Positioning line (fixed, never rotates)
- Skill tag row (3 pills: Product Design, AI Product Building, UX Research)
- Scroll cue at bottom

### 2. Project grid
Cards stacked vertically, in this display order: **UXLens AI, Legible, ServiceHub**.
Each card: video (dominant, ~70% of card width, fixed height ~320px, left side), project name + one-line outcome sentence (right side, vertically centered).
Click anywhere on card → shared-element morph into that project's case study page.
**"View Live ↗" badge** near the title — UXLens AI and Legible only (once deployed). ServiceHub has no badge (no live product).
No other link/CTA on the card — the click-anywhere behavior is the only entry point besides the live badge.

### 3. Experience
Simple vertical list, thin dividers between rows. Each row: company/role left, date range right.
Include EverTry with a line noting the dual design + PM role once that content is finalized.

### 4. About
Short, restrained, text-only, no photo.

### 5. Contact
Email as primary CTA, social row beneath (GitHub, LinkedIn, Behance, X, Medium), copyright line.
No dedicated contact page — this section is the entire contact experience.

## Case study template — UXLens AI and Legible (shared template)

Both are live, deployed products once finished, so their case studies follow this shape:

1. **Opener** — video of the real product, autoplaying, looping. "View Live ↗" badge, visible immediately, not buried.
2. **Title block** — project name, one-line positioning, meta row (Role / Timeline / Tools).
3. **Context** — the problem, why it mattered.
4. **Role & Ownership** — "Led [project] end to end, from problem to shipped product, directing AI-assisted execution throughout."
5. **Key decisions** — 3 cards, the choices that show judgment, not an exhaustive log.
6. **Obstacles** — 2-3 cards, what went wrong and how it got solved. Give this real space.
7. **What was built** — browser-window screen mockups (these are web apps, not mobile), grouped/labeled, not a flat grid.
8. **Tools & skills** — grouped in 3 columns: Design / Build / AI-Assisted Workflow.
9. **Outcome / status** — what's real today.
10. **What I learned / what's next** — honest, forward-looking.
11. **Close** — link forward to the next project.

Every section is a flexible container — no fixed height assuming exact final copy length.

## Case study structure — ServiceHub (its own, separate structure)

No live product, so the case study proves the work differently. Full structure, already designed:

1. **Opener** — horizontal strip of app screens, auto-scrolling continuously right to left, pauses on hover, loops seamlessly. No video, no live badge.
2. Problem (headline + one verbatim user quote card)
3. Solution pillars (3 cards: Peer-Verified Trust, Real-Time Transparency, Community-Driven Reliability)
4. Research & discovery (stat strip + method cards)
5. Affinity map (4 tinted clusters)
6. Key insights (3 stat-pill rows with insight + design implication)
7. Empathy map (2x2 quadrants)
8. Personas (2 cards: Chisom Okafor, Favour Okonkwo — note: surname changed and quote paraphrased from the real interview participant for privacy)
9. Current user journey (6-stage map with emotion curve, dips lowest at "Waiting for Service")
10. How Might We (3 statements, pure typography)
11. Information architecture / sitemap
12. Key user flow (booking flow, two-column layout)
13. Wireframe iteration before/after
14. Final screens gallery (grouped into Discover / Evaluate / Book / Review)
15. Usability iteration before/after (the "online status" story)
16. Lessons learned / what I'd do differently
17. Closer

Important framing note: ServiceHub's product was never redesigned. Only the case study's presentation was rebuilt. Never describe this as a product redesign.

## Content status (as of this brief)
- **ServiceHub**: case study content fully defined, numbers intentionally left as originally reported (54 responses, 25 with hiring experience, 52%/60%/4% insights) — do not update to any revised figures.
- **Legible**: fully built and working end-to-end. Not yet deployed. Design system tokens built in Figma and exported as JSON; the actual UI was designed directly in code, not in Figma. Chima defined the problem and product concept; AI helped develop requirements/specs, with Chima reviewing and approving every decision. Governed by a PRD, AGENTS.md, 8 rules files, and 7 skills files.
- **UXLens AI**: fully built and working end-to-end. Not yet deployed. Fully designed in Figma (UI and design system), tokens exported as JSON, same process as Legible. Same AI-assisted build process and governance structure as Legible. Standout feature: a code-based (non-AI) citation verification pass that drops any insight whose source quote can't be verified — the hallucination-prevention mechanism.
- Video content for all homepage cards and case study openers is the last task, added once real product/screens exist to record.

## Do not do
- Do not invent placeholder content that reads as real (fake company names, fake bios, fake project descriptions). Use obviously-bracketed placeholders like [COMPANY NAME] until real content is supplied.
- Do not add a rotating/cycling job title in the hero.
- Do not add background decoration, moving or static, beyond the plain white/dark surface.
- Do not build a dedicated contact page.
