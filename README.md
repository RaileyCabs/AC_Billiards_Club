# Atlantic City Billiard Club — Web Platform & Tournament Hub

A modern, mobile-first web platform and live tournament management hub for **Atlantic City Billiard Club** (Egg Harbor Township, NJ).

Featuring a private, password-protected `/admin` portal for the pool hall owner, live tournament tracking, native interactive bracket trees, player registration management, digital archives, and location details.

---

## 🌟 Key Features

### 1. 🏆 Custom Native Visual Tournament Bracket Engine
- **100% Native Visual Brackets:** Replaced third-party iFrame embeds with an interactive SVG/CSS tournament bracket tree engine supporting single and double elimination brackets.
- **Live Round & Score Tracking:** Displays winner bracket, one-loss bracket, active set scores, table calls, and winner advancement.
- **Archive Viewer Modal Overlay:** Users can view interactive visual bracket trees for archived past tournaments directly within an overlay modal on the `/tournaments` page.

### 2. ⚡ Live Administrative State Sync (`/admin`)
- **Password-Protected Owner Portal:** Accessed via `/admin` (Passcode: `1976`) or hidden footer link.
- **Owner Roster Management:** Features a **Tournament Selector Dropdown** allowing the owner to select any active or draft tournament before adding or editing player rosters.
- **Instant Site Announcements:** Toggle live alert banners across the site in real-time.
- **Zero Page Reload Sync:** All administrative edits sync instantly across public pages via React Context (`AppStateContext`) with `localStorage` persistence.

### 3. 🎯 Streamlined 3-Tab Mobile Navigation
- **Focused Top Navigation:** Simplified header navigation into 3 core tabs:
  1. **Home** — Venue showcase, table specs (Diamond, Rasson, heated 3-cushion, Snooker), and quick highlights.
  2. **Location & Contact** — Hours of operation, click-to-call, parking, and interactive Google Map.
  3. **Tournaments & Leagues** — Active visual brackets, upcoming event flyers, APA 8-Ball & 9-Ball schedule, and historical archive modals.
- **Colorless SVG Theme Toggle:** Modern dark/light mode toggle matching the site styling.

### 4. 🎨 High-Contrast Monochrome Black & White Aesthetic
- **Sleek Visual Design:** Crisp black-and-white theme featuring smooth scroll animations, subtle borders, and elevated button micro-interactions.
- **Form & Select Optimization:** Custom styled dropdown selects and touch-friendly controls optimized for mobile and desktop displays without text cutoff.

---

## 📍 Venue Highlights

- **Venue:** Atlantic City Billiard Club
- **Location:** 6701 E Black Horse Pike # A8, Egg Harbor Township, NJ 08234 (15 minutes from Atlantic City boardwalk & casinos)
- **Specialty Equipment:** Full-size regulation Snooker tables, heated 3-Cushion (carom) billiard tables, 9ft pro-cut Diamond/Rasson tables, and 7ft bar boxes.
- **Major Event Alignment:** Unofficial player hub and late-night action spot during the annual US Open Pool Championship in Atlantic City.

---

## 🛠️ Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | Next.js 14 (App Router) + React 18 | High-performance, SEO-optimized, mobile-first web framework |
| **Language** | TypeScript | Strictly typed component architecture and state management |
| **Styling & Theme** | Vanilla CSS + CSS Variables (`globals.css`) | High-contrast monochrome theme with smooth page transitions |
| **State Engine** | React Context (`AppStateContext.tsx`) | Real-time state synchronization with `localStorage` persistence |
| **Bracket Engine** | Native SVG & CSS Bracket Renderer | Interactive visual bracket tree supporting single & double elimination |
| **Hosting & Deployment** | Vercel | High-speed global edge network deployment |

---

## 🗺️ Sitemap Architecture

```
/
├── Home (Hero section, venue highlights, quick info, tables summary)
├── Location & Contact (Hours of operation, interactive map, parking, contact card)
├── Tournaments & Leagues
│   ├── Active Brackets (Native interactive SVG bracket engine)
│   ├── Upcoming Events (Event details & registration info)
│   ├── Weekly Schedule & APA Leagues (8-Ball, 9-Ball schedules)
│   └── Tournament Archive (Past winners & interactive visual bracket modal viewer)
├── Tables & Rates (Hourly table rates, Diamond/Rasson specs, Snooker & Carom pricing)
│
└── [PROTECTED] /admin (Private Owner Portal — PIN: 1976)
    ├── Site Announcement Banner Manager
    ├── Active Tournament Manager & Match Scoring
    ├── Owner Roster Management (Tournament Selector Dropdown)
    └── Player Registration List
```

---

## 📑 Session Documentation & Handover

- **Session Audit & Handover Guide:** [`SESSION_HANDOVER.md`](./SESSION_HANDOVER.md) — Comprehensive session audit, commit history, and instructions for continuing development on another device.
- **Implementation Plan & Architecture:** [`docs/IMPLEMENTATION_PLAN.md`](./docs/IMPLEMENTATION_PLAN.md) — System requirements, technical roadmap, and architectural specs.
