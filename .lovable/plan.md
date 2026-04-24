
# Devansh Sharma — Portfolio OS

A breathtaking, dual-theme portfolio built as a single-page tabbed "operating system" for an Applied AI Systems Developer. Adapted from your Next.js brief to Lovable's React + Vite + Tailwind + Framer Motion stack — every visual goal preserved.

---

## 1. Architecture Overview

- **Single shell, four tabs** with smooth Framer Motion `AnimatePresence` cross-fades — no page reloads, feels like an app.
- **Fixed top nav bar** (glassy in Sci-Fi, crisp in Professional) containing: logo mark, tab switcher, theme toggle, Cmd+K hint.
- **Custom theme provider** writing `data-theme="visar" | "executive"` on `<html>`, persisted to localStorage, defaulting to system preference. All colors via HSL tokens in `index.css` so the entire site re-skins without flashing.
- **Command Palette (Cmd+K / Ctrl+K)** powered by the existing `cmdk` shadcn component — jump to any tab, toggle theme, open social links, copy email, download resume.
- **Modular file structure** under `src/components/portfolio/` so every section is a self-contained piece.

---

## 2. Dual Theme System

**Sci-Fi / VISAR mode (neon)**
- Background `#050505` with an animated canvas: faint moving grid + drifting particles + a soft cyan glow that follows the cursor.
- Accent `#00F7FF` cyan used for borders, focus rings, active tab underline, terminal text.
- Heavy glassmorphism — `backdrop-blur` cards with 1px cyan inner stroke and subtle scanline overlay.
- Fonts: **Orbitron** (headings), **JetBrains Mono** (stats/labels), **Inter** (body), loaded from Google Fonts.

**Professional / Executive mode (clean)**
- Background `#FAFAFA`, text `#111111`, accent muted slate-blue.
- Flat cards, sharp 12px radius, soft diffused shadows. No glows, no particles.
- Font: **Inter** everywhere, tight tracking, generous whitespace.

The toggle is an animated pill switch (sun ↔ chip icon). All transitions use `transition-colors duration-500` on root tokens so the swap is buttery, never flashes.

---

## 3. The Four Tabs

### Tab 1 — Overview
- **Hero**: massive Orbitron headline "Building AI Systems That Evolve." with a gradient text shimmer in Sci-Fi, solid black in Executive.
- **Subhead**: your AI/ML Python Developer line + VISAR Edge mention.
- **Interactive orb**: a Framer Motion blob/geometric shape that gently follows the cursor with spring physics — rendered as a glowing cyan torus in Sci-Fi, a soft gray sphere in Executive.
- **Stylized avatar**: hexagonal frame with rotating ring border (neon) or clean circular badge (exec) — placeholder geometric avatar until you upload `/profile.png`.
- **Two CTAs**: "Download Resume" (links to `/ResumePerfect.pdf` — drop the file in `/public` later) and "Initialize Terminal" (jumps to Tab 4 with a glitch transition).
- **About block**: your full bio + the "If it can think, it can evolve." philosophy as a pull-quote.
- **Live status strip** (JetBrains Mono): `STATUS: ONLINE • LOCATION: REMOTE • BUILDING: VISAR EDGE v1.0`.

### Tab 2 — Systems & Projects (Bento Grid)
A 4-column responsive Bento layout, varied tile sizes:
- **VISAR EDGE** — large 2x2 hero tile with animated holographic mockup, "Beta Soon" badge, full description, GitHub link.
- **J.A.R.V.I.S. (Mark 1 → 21)** — wide 2x1 tile with a version-progression timeline mini-graphic.
- **Workflow Automation Suite** — tall 1x2 tile with animated pipeline icons.
- **Stats tile** — `21 iterations • 100% Python • 0 manual tasks` style numbers.
- **"What's next" tile** — teaser/CTA.

Each tile: hover lifts with parallax tilt, neon border-glow trace in Sci-Fi, soft shadow lift in Executive. Click expands into a Framer Motion shared-layout modal with full project detail.

### Tab 3 — Experience & Tech Ecosystem
- **Timeline** (left): vertical timeline with your "Applied AI Developer (Independent Projects) | 2024 – Present" role and the three accomplishment bullets, each animating in on scroll.
- **Tech orbit** (right): the tech stack rendered as **orbiting rings** around a central core — three concentric rings (Languages, Frameworks, AI/ML), each item rotating slowly with Devicon/Lucide icons, pausing on hover with a tooltip. System Concepts shown as floating tags below.
- Fully responsive: orbit collapses to a clean grid on mobile.

### Tab 4 — Terminal Node (Contact)
- **Sci-Fi mode**: full bootable terminal aesthetic — boot sequence types out on first visit (`> initializing comms link...`, `> handshake complete`), then a prompt `devansh@visar:~$ _` with blinking cursor. Visitor types name, email, message via guided prompts. **Visual only** — on submit shows `> message queued. (visual demo)` and reveals your real contact links (email copy button, LinkedIn, GitHub, X).
- **Executive mode**: minimal contact card — name/email/message fields, single "Send" button, same visual-only behavior, plus the contact links presented as clean rows.

---

## 4. Global Touches

- **Cmd+K Command Palette**: searchable actions — Go to Overview / Projects / Experience / Contact, Toggle theme, Copy email, Open LinkedIn / GitHub / X, Download resume.
- **Page transitions**: tabs cross-fade + slight Y-translate; Sci-Fi adds a 120ms scanline wipe.
- **Scroll reveals**: every section uses `whileInView` fade-up.
- **Footer strip**: tiny mono-font line — `© 2025 Devansh Sharma // Compiled with intent.`
- **Accessibility**: keyboard-navigable tabs, focus rings, prefers-reduced-motion respected (disables particles + orbit).
- **Responsive**: mobile collapses tabs into a bottom dock bar; Bento becomes a single column.

---

## 5. Tech Notes

- Add Framer Motion + Devicons via npm.
- Add Google Fonts (Orbitron, Space Grotesk, JetBrains Mono, Inter) in `index.html`.
- Define full HSL token sets for both themes in `index.css` (no hardcoded colors in components).
- Resume button wired to `/ResumePerfect.pdf` — drop the file into `/public` whenever ready and it works instantly.
- Profile image path `/profile.png` is referenced; the stylized placeholder shows until you upload.

---

## What you get after build
A fully working, deploy-ready portfolio you can publish via Lovable's Publish button. Everything in your brief — Bento, dual themes, Cmd+K, terminal, orbiting stack, Framer Motion polish — landed at premium quality.

Hit **Implement plan** when you're ready to build.
