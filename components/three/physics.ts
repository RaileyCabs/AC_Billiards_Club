/**
 * A lightweight top-down billiards simulation.
 *
 * Balls are treated as equal-mass discs on the XZ plane. This is not a
 * spin-accurate physics engine — it is the cheapest model that still reads
 * as a real break: elastic ball-on-ball collisions, damped cushions, rolling
 * resistance, and pockets that swallow anything that reaches them.
 */

/** 9ft playfield, in metres. */
export const PLAY_W = 2.54;
export const PLAY_H = 1.27;
export const HALF_W = PLAY_W / 2;
export const HALF_H = PLAY_H / 2;
export const BALL_R = 0.02858;
export const POCKET_R = 0.062;

const FRICTION = 0.62;
const CUSHION_DAMP = 0.86;
const STOP_SPEED = 0.012;
const MAX_SUBSTEP = 1 / 240;

export const POCKETS: [number, number][] = [
  [-HALF_W, -HALF_H],
  [0, -HALF_H],
  [HALF_W, -HALF_H],
  [-HALF_W, HALF_H],
  [0, HALF_H],
  [HALF_W, HALF_H],
];

export interface Ball {
  num: number;
  x: number;
  z: number;
  vx: number;
  vz: number;
  /** Pocketed balls stop simulating and are hidden. */
  potted: boolean;
}

/** Foot-spot rack: apex toward the breaker, 8-ball in the centre of row three. */
export function rackedBalls(): Ball[] {
  const balls: Ball[] = [
    { num: 0, x: -HALF_W * 0.5, z: 0, vx: 0, vz: 0, potted: false },
  ];

  // Numbers laid out row by row, with the 8 fixed at the rack's centre.
  const order = [1, 9, 2, 10, 8, 3, 11, 4, 12, 5, 13, 6, 14, 7, 15];
  const apexX = HALF_W * 0.5;
  const gap = BALL_R * 2 + 0.0004;
  let i = 0;

  for (let row = 0; row < 5; row++) {
    for (let col = 0; col <= row; col++) {
      balls.push({
        num: order[i++],
        x: apexX + row * gap * 0.866,
        z: (col - row / 2) * gap,
        vx: 0,
        vz: 0,
        potted: false,
      });
    }
  }

  return balls;
}

/** Sends the cue ball into the rack with a touch of variation each time. */
export function breakShot(balls: Ball[], rng: () => number) {
  const cue = balls[0];
  cue.vx = 6.4 + rng() * 1.2;
  cue.vz = (rng() - 0.5) * 0.34;
}

export function step(balls: Ball[], dt: number) {
  let remaining = Math.min(dt, 0.05);

  while (remaining > 0) {
    const h = Math.min(remaining, MAX_SUBSTEP);
    remaining -= h;
    integrate(balls, h);
  }
}

function integrate(balls: Ball[], h: number) {
  const decay = Math.exp(-FRICTION * h);

  for (const b of balls) {
    if (b.potted) continue;

    b.x += b.vx * h;
    b.z += b.vz * h;
    b.vx *= decay;
    b.vz *= decay;

    if (Math.hypot(b.vx, b.vz) < STOP_SPEED) {
      b.vx = 0;
      b.vz = 0;
    }
  }

  resolvePairs(balls);
  resolveCushions(balls);
  resolvePockets(balls);
}

function resolvePairs(balls: Ball[]) {
  const min = BALL_R * 2;

  for (let i = 0; i < balls.length; i++) {
    const a = balls[i];
    if (a.potted) continue;

    for (let j = i + 1; j < balls.length; j++) {
      const b = balls[j];
      if (b.potted) continue;

      const dx = b.x - a.x;
      const dz = b.z - a.z;
      const distSq = dx * dx + dz * dz;
      if (distSq >= min * min || distSq === 0) continue;

      const dist = Math.sqrt(distSq);
      const nx = dx / dist;
      const nz = dz / dist;

      // Push the pair apart so they never sink into each other.
      const overlap = (min - dist) / 2;
      a.x -= nx * overlap;
      a.z -= nz * overlap;
      b.x += nx * overlap;
      b.z += nz * overlap;

      // Equal masses: swap the velocity component along the contact normal.
      const rel = (b.vx - a.vx) * nx + (b.vz - a.vz) * nz;
      if (rel > 0) continue;

      const imp = rel * 0.97;
      a.vx += imp * nx;
      a.vz += imp * nz;
      b.vx -= imp * nx;
      b.vz -= imp * nz;
    }
  }
}

function resolveCushions(balls: Ball[]) {
  const limX = HALF_W - BALL_R;
  const limZ = HALF_H - BALL_R;

  for (const b of balls) {
    if (b.potted) continue;

    if (b.x < -limX) {
      b.x = -limX;
      b.vx = Math.abs(b.vx) * CUSHION_DAMP;
    } else if (b.x > limX) {
      b.x = limX;
      b.vx = -Math.abs(b.vx) * CUSHION_DAMP;
    }

    if (b.z < -limZ) {
      b.z = -limZ;
      b.vz = Math.abs(b.vz) * CUSHION_DAMP;
    } else if (b.z > limZ) {
      b.z = limZ;
      b.vz = -Math.abs(b.vz) * CUSHION_DAMP;
    }
  }
}

function resolvePockets(balls: Ball[]) {
  for (const b of balls) {
    if (b.potted) continue;

    for (const [px, pz] of POCKETS) {
      if (Math.hypot(b.x - px, b.z - pz) < POCKET_R) {
        b.potted = true;
        b.vx = 0;
        b.vz = 0;
        break;
      }
    }
  }
}

export function allStopped(balls: Ball[]): boolean {
  return balls.every((b) => b.potted || (b.vx === 0 && b.vz === 0));
}
