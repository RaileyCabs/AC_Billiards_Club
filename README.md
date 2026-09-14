# Atlantic City Billiard Club — Web Platform & Tournament Hub

A modern, mobile-first web platform and live tournament management hub for **Atlantic City Billiard Club** (Egg Harbor Township, NJ).

Featuring a private, password-protected /admin portal for the owner, live tournament match tracking, bracket progression, player registration with payment status confirmation, and digital archiving.

---

## Key Features

### 1. Live Tournament Hub & Progression Board (/tournaments/[id])
- **Live Table Calls:** Real-time visibility of active tables, current matchups, and live set scores (e.g., Table 1: Mike Miller [3] vs. Chris Vance [2]).
- **On Deck Queue:** Informs waiting players when they are up next and what table they will shoot on.
- **Match Results Ticker:** Live feed of completed sets showing who won and where players advance.
- **Interactive Bracket Tree:** Visual double-elimination bracket tracking winners bracket, one-loss bracket, and finals via DigitalPool / Challonge.

### 2. Player Signups & Anti-Dropout Workflow
- **Digital Registration:** Players reserve their tournament spot online with Name, Phone, and Skill Level / FargoRate.
- **Clear Anti-Dropout Policy:** Reserved spots default to Pending Payment with an explicit cutoff notice (e.g., must be paid 30 mins prior to break).
- **Public Roster Transparency:** Displays confirmed (paid) spots vs. pending spots and remaining capacity.
- **Digital Receipt:** Players receive a confirmation card with Add to Calendar and an automated email copy.

### 3. Tournament Archiving & Records (Owner & Players)
- **Public Archive:** Historical record of completed tournaments, top 3 winners, and final bracket standings.
- **Owner Record Book:** Permanent digital log of total turnout, entry fees collected, and prize pool distribution.
- **One-Click Export:** Download rosters in CSV spreadsheet format or print official physical check-in / score sheets (PDF).

### 4. Private Owner Admin Portal (/admin)
- **Zero Third-Party Apps:** Fully customized web dashboard accessed directly on the owner''s phone or desktop at /admin.
- **Strict Privacy & Security:** Hidden from public navigation, blocked from search engines via obots.txt, and guarded by session/PIN authentication.
- **One-Tap Payment Confirmation:** Quickly toggle player statuses between Paid (Cash, Venmo, Zelle, Card), Pending, or Forfeit/Remove Spot.
- **Tournament & Flyer Manager:** Publish new tournaments and upload flyer photos directly from a smartphone camera.
- **Notice Banner:** Toggle instant announcement banners on/off (e.g., for holiday hours or the US Open Pool Championship week).

---

## Business Specs & Highlights

- **Venue:** Atlantic City Billiard Club
- **Location:** 6701 E Black Horse Pike # A8, Egg Harbor Township, NJ 08234 (15 minutes from Atlantic City boardwalk/casinos)
- **Specialty Equipment:** Full-size regulation Snooker tables, heated 3-Cushion (carom) billiard tables, 9ft pro-cut tables, and 7ft bar boxes.
- **Major Event Alignment:** Unofficial player hub and late-night action spot during the annual US Open Pool Championship in Atlantic City.

---

## Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | Next.js (App Router) + React | High-performance, SEO-optimized, mobile-first web framework |
| **Styling & UI** | Tailwind CSS + shadcn/ui | Modern, responsive dark billiards lounge aesthetic |
| **Database & Auth** | Supabase (PostgreSQL) | Secure data storage for tournaments, signups, and alerts |
| **Bracket Engine** | DigitalPool / Challonge API/Embed | Industry-standard pool brackets with live double elimination |
| **Notifications** | Resend | Transactional registration confirmation emails and owner alerts |
| **Hosting & CDN** | Vercel | High-speed global edge network and continuous deployment |

---

## Sitemap Architecture

`
/
├── Home (Hero, announcement banner, quick hours, specialty table spotlight, location)
├── Tournaments & Leagues
│   ├── Upcoming Tournaments (Cards, flyers, entry fees, spot tracker, signup modal)
│   ├── Live Match Board & Brackets (Active table calls, on deck, live match ticker, bracket tree)
│   ├── Tournament Archive (Past events, 1st/2nd/3rd winners, historical payouts)
│   └── League Nights (APA 8/9-Ball, in-house snooker ladders, captain contacts)
├── Tables & Rates (Regulation snooker, 3-cushion, 9ft pro tables, pricing, etiquette)
├── Food, Bar & Amenities (Kitchen menu, draft beers, Wi-Fi, jukebox, TV sports)
├── Private Events (Booking inquiry form for corporate rentals & birthdays)
├── Location & Contact (Directions from AC boardwalk, interactive map, click-to-call)
│
└── [PROTECTED] /admin (Private Owner Portal)
    ├── Dashboard Overview (Alert status, next tournament stats)
    ├── Tournament Manager (Create events, upload flyers, open/close registration)
    ├── Live Roster & Payments (One-tap paid confirmation, remove no-shows, filter unpaid)
    ├── Records & Export (Download CSV, print PDF score sheets)
    └── Announcement Banner Manager (Toggle ON/OFF, edit message)
`

---

## Detailed Documentation

For full database schemas, route configurations, security models, and phased implementation roadmaps, see [docs/IMPLEMENTATION_PLAN.md](./docs/IMPLEMENTATION_PLAN.md).
