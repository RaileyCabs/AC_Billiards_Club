# Atlantic City Billiard Club

Website for [Atlantic City Billiard Club](https://www.facebook.com/p/Atlantic-City-Billiard-Club-100063635376707/),
a pool hall at 6701 Black Horse Pike, Ste A8, Egg Harbor Township, NJ.

Built with Next.js App Router and React Three Fiber, deployed on Vercel.

---

## The 3D hero

The landing page opens on a real-time 3D pool table that breaks a rack, lets the
balls run out, and re-racks — on a loop. Nothing is pre-rendered video.

| File | Role |
| --- | --- |
| `components/three/physics.ts` | Top-down ball simulation: elastic ball-on-ball collisions, damped cushions, rolling resistance, pockets |
| `components/three/PoolTable.tsx` | Table geometry, rolling-ball rotation, and the aim → draw → strike → roll → re-rack loop |
| `components/three/ballTexture.ts` | Numbered ball textures painted to canvas at runtime (solids and stripes) |
| `components/three/HeroScene.tsx` | Canopy lamps, image-based reflections, and the pointer/scroll camera rig |
| `components/Hero3D.tsx` | Lazy mount behind a WebGL capability probe |

It is built to stay out of the way on a phone:

- three.js is **code-split** — the initial page load is ~109 kB JS and the scene
  arrives after first paint.
- Rendering **stops entirely** when the hero scrolls out of view.
- `prefers-reduced-motion` freezes the break and the camera drift.
- No WebGL, or a GPU that refuses the render target, falls back to a gradient.
- The camera backs off as the viewport narrows, so a tall phone screen does not
  get an unreadable close-up of the cloth.

---

## Business facts

Every address, phone number, hour, and rate on the site comes from
[`lib/club.ts`](lib/club.ts), sourced from the club's Facebook page and public
listings.

**Do not add details the club has not published.** A pool hall's site sends real
people to a real address at a real time; invented menus, prices, or events are
worse than a blank page. If something is unknown, the page says to call.

Hours are shown alongside a call-to-confirm, because the club posts schedule
changes to Facebook first.

---

## Pages

```
/                    Home — 3D hero, rate, specialty tables, hours
/tables-and-rates    Published hourly rate and the three specialty tables
/contact             Address, hours, embedded map, directions
/tournaments         Events posted by the club, plus the live bracket
/admin               Owner portal (PIN gate)
```

---

## The owner portal

`/admin` (PIN `1976`) lets the club post a site notice, post a tournament, enter
players who sign up at the counter, and mark them paid or forfeited. The
tournaments page and the bracket read straight from it.

The bracket is generated from the roster: players are seeded into the next power
of two, byes fill the gap, and later rounds stay empty because who advances is
decided at the table.

### What this portal is not

**State is stored in `localStorage` and never leaves the browser it was typed
into.** It survives a refresh on that device. It does not sync to the owner's
phone, to another computer, or to anyone visiting the site.

The PIN is client-side and is not security. It is there so a curious visitor does
not poke at the controls — there is no shared data behind it to protect.

To make the board genuinely public, the state in
`context/AppStateContext.tsx` needs to move to a database behind API routes, with
a real login. That is a backend project, not a config change.

There is deliberately **no public registration form**. An entry form with no
backend would collect a player's name, phone, and email, tell them they were
registered, and discard it — the club would never see it. Entries are taken by
phone and at the counter.

---

## Local development

```bash
npm install
npm run dev
```

`.npmrc` sets `legacy-peer-deps=true`. React Three Fiber declares optional peer
dependencies on Expo and React Native; without this, npm tries to resolve a React
Native toolchain into a web-only project.

```bash
npm run build    # production build
npx tsc --noEmit # typecheck
```

---

## Deployment

Pushes to `main` deploy to Vercel at
[ac-billiards-club.vercel.app](https://ac-billiards-club.vercel.app).
