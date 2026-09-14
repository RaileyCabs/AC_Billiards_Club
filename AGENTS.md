<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project notes

- **Business facts live in one place:** [`lib/club.ts`](lib/club.ts). Address, phone,
  email, hours, and rates are sourced from the club's own Facebook page and public
  listings. Do not add specs, prices, menus, or events that the club has not
  published — this site represents a real venue, and invented details send real
  people to the wrong place or the wrong event.
- **The 3D hero** lives in `components/three/`. `physics.ts` is a top-down ball
  simulation, `PoolTable.tsx` is the geometry plus the break loop, and
  `HeroScene.tsx` owns lighting and the camera rig. It is lazy-loaded behind a
  WebGL probe and honours `prefers-reduced-motion`.
- **`/admin` state is device-local.** `context/AppStateContext.tsx` persists to
  `localStorage` and nothing else. Anything the owner posts is visible only in the
  browser they typed it into. Making the board public requires a real backend.
