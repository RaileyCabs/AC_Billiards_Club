'use client';

import { useEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { makeBallTexture } from './ballTexture';
import {
  allStopped,
  BALL_R,
  Ball,
  breakShot,
  HALF_H,
  HALF_W,
  PLAY_H,
  PLAY_W,
  POCKETS,
  POCKET_R,
  rackedBalls,
  step,
} from './physics';

const RAIL_W = 0.115;
const RAIL_H = 0.042;
const BODY_H = 0.30;

type Phase = 'settle' | 'draw' | 'strike' | 'roll' | 'rerack';

const PHASE_MS: Record<Phase, number> = {
  settle: 1700,
  draw: 700,
  strike: 110,
  roll: 8000,
  rerack: 1000,
};

/** Deterministic-ish variation so every break differs without a dependency. */
function makeRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

export default function PoolTable({
  animate,
  shadows = true,
}: {
  animate: boolean;
  shadows?: boolean;
}) {
  const balls = useRef<Ball[]>(rackedBalls());
  const meshes = useRef<(THREE.Mesh | null)[]>([]);
  const quats = useRef<THREE.Quaternion[]>(
    Array.from({ length: 16 }, () => new THREE.Quaternion())
  );
  const cue = useRef<THREE.Group>(null);
  const phase = useRef<Phase>('settle');
  const elapsed = useRef(0);
  const rng = useRef(makeRng(20260914));
  // Re-rack happens at the midpoint of the phase, behind a shrink/grow, so the
  // balls never pop from a finished table straight back into a full rack.
  const reracked = useRef(false);
  const fade = useRef(1);

  const textures = useMemo(
    () => Array.from({ length: 16 }, (_, i) => makeBallTexture(i)),
    []
  );

  useEffect(() => () => textures.forEach((t) => t.dispose()), [textures]);

  // Scratch objects, reused every frame so the loop allocates nothing.
  const axis = useMemo(() => new THREE.Vector3(), []);
  const spin = useMemo(() => new THREE.Quaternion(), []);

  useFrame((_, rawDelta) => {
    const dt = Math.min(rawDelta, 0.05);

    if (animate) {
      elapsed.current += dt * 1000;
      advance();
      if (phase.current === 'roll') step(balls.current, dt);

      if (phase.current === 'rerack') {
        const t = Math.min(elapsed.current / PHASE_MS.rerack, 1);
        if (t >= 0.5 && !reracked.current) {
          balls.current = rackedBalls();
          quats.current.forEach((q) => q.identity());
          reracked.current = true;
        }
        const half = t < 0.5 ? 1 - t * 2 : (t - 0.5) * 2;
        fade.current = half * half * (3 - 2 * half);
      } else {
        fade.current = 1;
        reracked.current = false;
      }
    }

    // Push simulation state onto the meshes.
    for (let i = 0; i < balls.current.length; i++) {
      const b = balls.current[i];
      const mesh = meshes.current[i];
      if (!mesh) continue;

      mesh.visible = !b.potted;
      if (b.potted) continue;

      mesh.position.set(b.x, BALL_R, b.z);
      mesh.scale.setScalar(fade.current);

      const speed = Math.hypot(b.vx, b.vz);
      if (speed > 0) {
        // Rolling without slipping: omega = (up x v) / r
        axis.set(b.vz, 0, -b.vx).normalize();
        spin.setFromAxisAngle(axis, (speed / BALL_R) * dt);
        quats.current[i].premultiply(spin);
      }
      mesh.quaternion.copy(quats.current[i]);
    }

    positionCue();
  });

  function advance() {
    const p = phase.current;
    const limit = PHASE_MS[p];

    if (p === 'roll' && allStopped(balls.current)) {
      phase.current = 'rerack';
      elapsed.current = 0;
      return;
    }

    if (elapsed.current < limit) return;

    elapsed.current = 0;

    if (p === 'settle') {
      phase.current = 'draw';
    } else if (p === 'draw') {
      phase.current = 'strike';
    } else if (p === 'strike') {
      breakShot(balls.current, rng.current);
      phase.current = 'roll';
    } else if (p === 'roll') {
      phase.current = 'rerack';
    } else {
      phase.current = 'settle';
    }
  }

  function positionCue() {
    const group = cue.current;
    if (!group) return;

    const cueBall = balls.current[0];
    const p = phase.current;
    const t = Math.min(elapsed.current / PHASE_MS[p], 1);

    // Distance from the cue tip to the cue ball for each phase.
    let gap = 0.05;
    if (p === 'settle') gap = 0.05 + Math.sin(elapsed.current / 320) * 0.012;
    else if (p === 'draw') gap = 0.05 + easeOut(t) * 0.30;
    else if (p === 'strike') gap = 0.35 * (1 - t * t);
    else {
      group.visible = false;
      return;
    }

    group.visible = true;
    group.position.set(cueBall.x - BALL_R - gap, BALL_R, cueBall.z);
  }

  return (
    <group>
      <Frame />
      <Bed />
      <Cushions />
      <Pockets />
      <Sights />
      <Legs />

      {balls.current.map((b, i) => (
        <mesh
          key={b.num}
          ref={(m) => {
            meshes.current[i] = m;
          }}
          castShadow={shadows}
          position={[b.x, BALL_R, b.z]}
        >
          <sphereGeometry args={[BALL_R, 32, 20]} />
          <meshStandardMaterial
            map={textures[b.num]}
            roughness={0.13}
            metalness={0}
            envMapIntensity={1.4}
          />
        </mesh>
      ))}

      <group ref={cue}>
        <mesh rotation={[0, 0, Math.PI / 2]} position={[-0.72, 0, 0]}>
          <cylinderGeometry args={[0.0065, 0.0145, 1.44, 12]} />
          <meshStandardMaterial color="#c8a678" roughness={0.35} metalness={0.05} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]} position={[-1.19, 0, 0]}>
          <cylinderGeometry args={[0.0132, 0.0148, 0.5, 12]} />
          <meshStandardMaterial color="#231610" roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
}

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function Frame() {
  const w = PLAY_W + RAIL_W * 2;
  const d = PLAY_H + RAIL_W * 2;

  return (
    <group>
      <mesh position={[0, -BODY_H / 2, 0]} receiveShadow>
        <boxGeometry args={[w, BODY_H, d]} />
        <meshStandardMaterial color="#2b1c12" roughness={0.55} metalness={0.05} />
      </mesh>

      {/* Rail caps */}
      {([
        [0, HALF_H + RAIL_W / 2, w, RAIL_W],
        [0, -HALF_H - RAIL_W / 2, w, RAIL_W],
      ] as const).map(([x, z, sx, sz], i) => (
        <mesh key={`lr${i}`} position={[x, RAIL_H / 2, z]} receiveShadow>
          <boxGeometry args={[sx, RAIL_H, sz]} />
          <meshStandardMaterial color="#352417" roughness={0.42} metalness={0.06} />
        </mesh>
      ))}
      {([HALF_W + RAIL_W / 2, -HALF_W - RAIL_W / 2] as const).map((x, i) => (
        <mesh key={`sr${i}`} position={[x, RAIL_H / 2, 0]} receiveShadow>
          <boxGeometry args={[RAIL_W, RAIL_H, PLAY_H]} />
          <meshStandardMaterial color="#352417" roughness={0.42} metalness={0.06} />
        </mesh>
      ))}
    </group>
  );
}

function Bed() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.0015, 0]} receiveShadow>
      <planeGeometry args={[PLAY_W, PLAY_H]} />
      <meshStandardMaterial color="#146447" roughness={0.94} metalness={0} />
    </mesh>
  );
}

function Cushions() {
  const h = 0.032;
  const t = 0.022;

  return (
    <group>
      {[HALF_H, -HALF_H].map((z, i) => (
        <mesh key={`cz${i}`} position={[0, h / 2, z + (z > 0 ? t / 2 : -t / 2)]}>
          <boxGeometry args={[PLAY_W, h, t]} />
          <meshStandardMaterial color="#125a3e" roughness={0.9} />
        </mesh>
      ))}
      {[HALF_W, -HALF_W].map((x, i) => (
        <mesh key={`cx${i}`} position={[x + (x > 0 ? t / 2 : -t / 2), h / 2, 0]}>
          <boxGeometry args={[t, h, PLAY_H]} />
          <meshStandardMaterial color="#125a3e" roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

function Pockets() {
  return (
    <group>
      {POCKETS.map(([x, z], i) => (
        <mesh key={i} position={[x, 0.004, z]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[POCKET_R, 24]} />
          <meshStandardMaterial color="#080808" roughness={1} />
        </mesh>
      ))}
    </group>
  );
}

/** Mother-of-pearl sights along the rails. */
function Sights() {
  const marks: [number, number][] = [];

  // Three sights per short half-rail, skipping the side pockets at centre.
  for (let i = 1; i <= 7; i++) {
    if (i === 4) continue;
    const x = -HALF_W + (PLAY_W / 8) * i;
    marks.push([x, HALF_H + RAIL_W / 2], [x, -HALF_H - RAIL_W / 2]);
  }
  for (let i = 1; i <= 3; i++) {
    const z = -HALF_H + (PLAY_H / 4) * i;
    marks.push([HALF_W + RAIL_W / 2, z], [-HALF_W - RAIL_W / 2, z]);
  }

  return (
    <group>
      {marks.map(([x, z], i) => (
        <mesh key={i} position={[x, RAIL_H + 0.001, z]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.0075, 12]} />
          <meshStandardMaterial color="#e8e2d4" roughness={0.3} metalness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function Legs() {
  const lx = HALF_W - 0.14;
  const lz = HALF_H - 0.03;

  return (
    <group>
      {[
        [lx, lz],
        [lx, -lz],
        [-lx, lz],
        [-lx, -lz],
      ].map(([x, z], i) => (
        <mesh key={i} position={[x, -BODY_H - 0.17, z]}>
          <boxGeometry args={[0.15, 0.34, 0.15]} />
          <meshStandardMaterial color="#241710" roughness={0.6} />
        </mesh>
      ))}
    </group>
  );
}
