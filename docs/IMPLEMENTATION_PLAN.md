# Project Plan: Atlantic City Billiard Club Website & Tournament Hub

A modern, mobile-first web platform and tournament hub for **Atlantic City Billiard Club** (Egg Harbor Township, NJ).

Target Repository: [`https://github.com/RaileyCabs/AC_Billiards_Club.git`](https://github.com/RaileyCabs/AC_Billiards_Club.git)

---

## User Review Required

> [!IMPORTANT]
> **Repository Setup:** You mentioned you are creating the repository at `https://github.com/RaileyCabs/AC_Billiards_Club.git`. Once that repository is created on GitHub, we will link our local project directory directly to it.

> [!IMPORTANT]
> **Payment Cutoff Policy:** By default, the plan holds reserved spots until **30 minutes before tournament start**, after which unpaid spots can be forfeited to walk-ins/waitlist. Confirm if 30 minutes works or if you prefer a different window (e.g., 1 hour, 15 minutes).

---

## Proposed System Architecture

```
                                [ General Public ]
                                         │
                                         ▼
                            +-------------------------+
                            |   Next.js Public Site   |
                            | (Tailwind / shadcn UI)  |
                            +------------┬------------+
                                         │
    ┌────────────────────────────────────┼────────────────────────────────────┐
    ▼                                    ▼                                    ▼
[ Tournament Signups & Receipts ]  [ Live Bracket Tracker ]         [ Private /admin Portal ]
- Player reserves spot             - DigitalPool / Challonge        - Protected by Password / PIN
- Status: PENDING PAYMENT          - Real-time match progression    - Hidden from menus & robots.txt
- Digital receipt & calendar add   - Historical archive results     - Mark players PAID / FORFEITED
- Email confirmation sent                                           - One-click CSV/PDF export
                                                                    - Post tournaments & flyers
                                                                    - Toggle alert banner
```

---

## Content Architecture & Sitemap

```
/
├── Home (Alert banner, quick hours, specialty table spotlight, next tournament spotlight, location)
├── Tournaments & Leagues
│   ├── Upcoming Tournaments (Filterable cards, flyer photos, entry fees, real-time spot tracker)
│   ├── Live Bracket Tracker (Interactive DigitalPool / Challonge embed)
│   ├── Tournament Archive & Results (Past events, 1st/2nd/3rd winners, prize payouts, completed brackets)
│   └── League Nights (APA 8/9-Ball divisions, in-house leagues, captain contacts)
├── Tables & Rates
│   ├── Specialty Equipment (Regulation Snooker, 3-Cushion Carom, 9ft pro tables, 7ft bar boxes)
│   ├── Transparent Rates (Hourly per person, practice rates, afternoon specials)
│   └── House Rules & Etiquette (Simple rules for casual and competitive players)
├── Food, Bar & Amenities (Kitchen menu, draft beer list, Wi-Fi, TouchTunes, sports TVs)
├── Private Events & Parties (Inquiry form for birthdays, corporate rentals, and table buyouts)
├── Location & Contact (Directions from AC boardwalk/casinos, interactive Google Map, click-to-call)
│
└── [LOCKED] /admin (Private Owner Portal)
    ├── Dashboard Overview (Active alert status, next tournament stats, quick actions)
    ├── Tournament Manager (Create/edit tournaments, upload flyer photos, open/close registration)
    ├── Live Roster & Payment Manager:
    │   ├── Filter players: [ All ] [ Paid (Green) ] [ Pending (Yellow) ] [ Forfeited (Red) ]
    │   ├── One-tap action: "Mark Paid" (Dropdown: Cash, Venmo, Zelle, Card)
    │   ├── One-tap action: "Remove / Forfeit Spot" (Instantly opens spot to public)
    │   └── One-click export: "Download Roster (CSV)" and "Print Score Sheet (PDF)"
    ├── Tournament Archiver (Record final payouts, top 3 winners, and link final bracket for the archive)
    └── Announcement Banner Manager (Toggle ON/OFF, edit message)
```

---

## Database Schema Design (Supabase / PostgreSQL)

### 1. `tournaments`
* `id`: UUID (Primary Key)
* `title`: Text (e.g., `"$500 Added 9-Ball Open"`)
* `date`: Timestamp with Timezone
* `game_type`: Text (`8-Ball`, `9-Ball`, `10-Ball`, `One-Pocket`, `Snooker`)
* `entry_fee`: Numeric (e.g., `25.00`)
* `house_added`: Numeric (e.g., `500.00`)
* `max_players`: Integer (e.g., `32`)
* `flyer_url`: Text (Uploaded flyer photo)
* `is_signup_open`: Boolean (Default: `true`)
* `bracket_url`: Text (DigitalPool or Challonge URL)
* `notes`: Text (Race length, alternate breaks, rules)
* `status`: Text (`upcoming`, `in_progress`, `completed`)
* `winner_1st`: Text (Optional: filled upon completion)
* `winner_2nd`: Text (Optional)
* `winner_3rd`: Text (Optional)
* `total_prize_pot`: Numeric (Optional)

### 2. `signups`
* `id`: UUID (Primary Key)
* `tournament_id`: UUID (Foreign Key -> `tournaments.id`)
* `player_name`: Text
* `player_phone`: Text
* `player_email`: Text
* `skill_level`: Text (e.g., `"Fargo 525"`, `"APA 6"`)
* `payment_status`: Text (`pending_payment`, `paid`, `forfeited` — Default: `pending_payment`)
* `payment_method`: Text (`cash`, `venmo`, `zelle`, `card`, `none` — Default: `none`)
* `confirmed_at`: Timestamp (Null until marked paid)
* `created_at`: Timestamp (Default: `now()`)

### 3. `site_alerts`
* `id`: Integer (Primary Key)
* `is_active`: Boolean
* `message`: Text (e.g., `"Open late this week for US Open Pool Championship players!"`)
* `badge_text`: Text (e.g., `"Event Notice"`)
* `updated_at`: Timestamp

---

## Security & Privacy: `/admin` Protection

1. **Invisible to Public:** Zero links or references in headers, footers, or client code.
2. **Blocked from Crawlers:** `robots.txt` explicitly disallows `/admin` and `/api/admin`.
3. **Session Authentication Gate:**
   - Server-side Next.js Middleware intercepts every request to `/admin/*`.
   - Unauthorized visits render a secure password/PIN modal.
   - Successful authentication writes an encrypted `httpOnly` session cookie so the owner stays logged in on their phone.

---

## Phased Implementation Roadmap

### Phase 1: Project Setup, Git & Database
- Initialize Next.js (App Router) project with Tailwind CSS and shadcn/ui.
- Link project to remote repository: `https://github.com/RaileyCabs/AC_Billiards_Club.git`.
- Set up Supabase tables (`tournaments`, `signups`, `site_alerts`) and storage bucket for flyers.
- Implement server-side authentication middleware for `/admin`.

### Phase 2: Private `/admin` Portal & Payment Manager
- Build mobile-optimized admin interface at `/admin`.
- Build the **Tournament Creation Form** with direct camera/gallery image upload.
- Build the **Live Roster & Payment Confirmation Interface**:
  - Filter players by payment status (`Paid`, `Pending`, `Forfeited`).
  - One-tap buttons: `Mark Paid`, `Remove/Forfeit`.
  - Record payment methods (Cash, Venmo, Zelle, Card).
- Build the **Export Engine**:
  - Generate printable PDF score/check-in sheets.
  - Export CSV spreadsheets for accounting.

### Phase 3: Public Responsive Frontend
- Develop modern, mobile-first pages with dark billiards lounge aesthetic.
- Build **Specialty Tables Spotlight** (Regulation Snooker, 3-Cushion Carom, 9ft Pro Tables).
- Implement dynamic rates, operating hours, and active notice banner.
- Integrate interactive Google Maps with directions from Atlantic City casinos/boardwalk.

### Phase 4: Tournament Hub, Signups & Archival Engine
- Build tournament cards with dynamic status (e.g., `"18 Confirmed | 4 Pending | 10 Open"`).
- Build the **Player Registration Modal** with clear anti-dropout disclaimers.
- Build the **Digital Registration Receipt** (with calendar add and printable receipt).
- Build the **Tournament Archive & Results** tab displaying historical winners and final brackets.
- Wire email alerts to notify the owner upon each new registration.

### Phase 5: Production Deployment & Domain Hand-off
- Deploy to Vercel connected to the GitHub repository.
- Connect chosen domain (`acbilliardclub.com`), configure DNS, SSL, and `robots.txt`.
- Set up local business schema JSON-LD for Google Maps SEO.
- Provide a 2-minute mobile walkthrough for the owner.

---

## Verification & Testing Plan

### Automated Checks
- `npm run build`: Zero errors, strict type checking across Supabase schemas.
- `npm run lint`: Code quality and accessibility compliance.

### Security & Privacy Verification
- **Unauthorized Access Check:** Ensure visiting `/admin` without authentication blocks access and redirects cleanly.
- **Search Engine Crawler Check:** Verify `robots.txt` disallows `/admin`.

### Functional Round-Trip Test
1. **Create Event:** Log into `/admin`, upload a flyer photo, set a 32-player cap, and publish.
2. **Player Signup:** Submit a registration on the public site; verify status is `🟡 Pending Payment` and the player receives their digital receipt.
3. **Payment Confirmation:** In `/admin`, tap `Mark Paid ($25 Cash)`; verify public status changes to `🟢 Confirmed`.
4. **No-Show / Drop Test:** In `/admin`, tap `Remove / Forfeit`; verify the spot immediately re-opens on the public page.
5. **Archival & Export:** Mark tournament completed, input 1st/2nd/3rd place winners, download the CSV/PDF roster, and verify it appears in the public archive.
