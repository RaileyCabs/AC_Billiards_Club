'use client';

import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerformanceMonitor } from '@react-three/drei';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import PoolTable from './PoolTable';

/**
 * Image-based lighting from three's bundled room environment. This is what
 * makes the balls read as polished phenolic rather than flat plastic, and it
 * costs no network request.
 */
function Reflections() {
  const { gl, scene } = useThree();

  useEffect(() => {
    let target: THREE.WebGLRenderTarget | null = null;
    let pmrem: THREE.PMREMGenerator | null = null;

    try {
      pmrem = new THREE.PMREMGenerator(gl);
      target = pmrem.fromScene(new RoomEnvironment() as unknown as THREE.Scene, 0.04);
      scene.environment = target.texture;
      scene.environmentIntensity = 0.35;
    } catch {
      // Older GPUs can refuse the float render target; lights alone still work.
    }

    return () => {
      scene.environment = null;
      target?.dispose();
      pmrem?.dispose();
    };
  }, [gl, scene]);

  return null;
}

/**
 * One canopy lamp. The spotlight needs an explicit target object in the scene
 * graph, otherwise three aims every light at the world origin and the three
 * pools collapse into one bright spot in the middle of the table.
 */
function Lamp({ x, castShadow }: { x: number; castShadow: boolean }) {
  const light = useRef<THREE.SpotLight>(null);
  const target = useRef<THREE.Object3D>(null);

  useEffect(() => {
    if (light.current && target.current) {
      light.current.target = target.current;
    }
  }, []);

  return (
    <group position={[x, 0.78, 0]}>
      <mesh position={[0, 0.34, 0]}>
        <cylinderGeometry args={[0.004, 0.004, 0.68, 6]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.6} />
      </mesh>

      <mesh>
        <coneGeometry args={[0.17, 0.17, 24, 1, true]} />
        <meshStandardMaterial
          color="#23272e"
          roughness={0.34}
          metalness={0.6}
          emissive="#ffd9a0"
          emissiveIntensity={0.16}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Visible filament, and a soft disc so the shade reads as lit. */}
      <mesh position={[0, -0.066, 0]}>
        <sphereGeometry args={[0.032, 12, 8]} />
        <meshBasicMaterial color="#fff6e2" toneMapped={false} />
      </mesh>
      <mesh position={[0, -0.084, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.155, 20]} />
        <meshBasicMaterial color="#ffdfae" transparent opacity={0.22} toneMapped={false} />
      </mesh>

      <object3D ref={target} position={[0, -1, 0]} />
      <spotLight
        ref={light}
        position={[0, -0.08, 0]}
        angle={0.86}
        penumbra={0.72}
        distance={4}
        intensity={7.5}
        color="#fff1d0"
        castShadow={castShadow}
        shadow-mapSize={[512, 512]}
        shadow-bias={-0.0012}
      />
    </group>
  );
}

/** Three canopy lamps, each throwing its own pool of light onto the cloth. */
function Lamps({ shadows }: { shadows: boolean }) {
  return (
    <group>
      <ambientLight intensity={0.17} />
      <hemisphereLight args={['#cfd8e3', '#0a0a0a', 0.24]} />

      {[-0.78, 0, 0.78].map((x, i) => (
        <Lamp key={x} x={x} castShadow={shadows && i === 1} />
      ))}

      {/* Cool rim light so the rails separate from the background. */}
      <directionalLight position={[-2.4, 1.6, -2.2]} intensity={0.5} color="#8fa8c8" />
    </group>
  );
}

const tmp = new THREE.Vector3();

/**
 * Eases the camera toward a target derived from pointer position and scroll,
 * so the table drifts as the visitor moves and tilts away as they read on.
 */
function CameraRig({ interactive }: { interactive: boolean }) {
  const { camera, size } = useThree();
  const pointer = useRef({ x: 0, y: 0 });
  const scroll = useRef(0);
  const target = useMemo(() => new THREE.Vector3(0, 0.1, 0), []);

  useEffect(() => {
    if (!interactive) return;

    // Both handlers only stash a number; the work happens in the frame loop,
    // so a fast scroll can never queue up more work than it can render.
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onScroll = () => {
      scroll.current = Math.min(window.scrollY / 900, 1);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, [interactive]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const s = scroll.current;
    const k = 1 - Math.pow(0.001, Math.min(delta, 0.05));

    // `fov` is vertical, so a tall phone viewport sees a very narrow slice of
    // the table. Back the camera off as the frame narrows, or the hero turns
    // into an unreadable close-up of the cloth.
    const aspect = size.width / Math.max(size.height, 1);
    const fit = aspect < 1.15 ? Math.min(1.15 / Math.max(aspect, 0.3), 1.7) : 1;

    const x = pointer.current.x * 0.42 * fit + Math.sin(t * 0.14) * 0.16;
    const y = 0.99 * (1 + (fit - 1) * 0.42) + s * 0.9 - pointer.current.y * 0.13;
    const z = 2.02 * fit + s * 0.5 + Math.cos(t * 0.11) * 0.06;

    camera.position.lerp(tmp.set(x, y, z), k);
    camera.lookAt(target);
  });

  return null;
}

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.82, 0]} receiveShadow>
      <planeGeometry args={[26, 26]} />
      <meshStandardMaterial color="#0b0b0c" roughness={0.95} metalness={0} />
    </mesh>
  );
}

export default function HeroScene() {
  const wrap = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [reduced, setReduced] = useState(false);

  // Quality is measured, not assumed. A weak GPU or a 4K display gets fewer
  // pixels and loses shadows rather than dropping frames.
  const [dpr, setDpr] = useState(1.25);
  const [shadows, setShadows] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  // Stop rendering entirely once the hero scrolls away — this is the single
  // biggest battery win on phones.
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: '120px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Multisampling costs real bandwidth and buys little once we are already
  // rendering above 1x, so spend the budget on resolution instead.
  const antialias = useMemo(
    () => typeof window === 'undefined' || window.devicePixelRatio < 1.5,
    []
  );

  return (
    <div ref={wrap} className="hero-canvas" aria-hidden="true">
      <Canvas
        shadows={shadows}
        dpr={dpr}
        frameloop={visible ? 'always' : 'demand'}
        camera={{ position: [0, 0.99, 2.02], fov: 42, near: 0.1, far: 60 }}
        gl={{ antialias, powerPreference: 'high-performance' }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.06;
        }}
      >
        <color attach="background" args={['#08080a']} />
        <fog attach="fog" args={['#08080a', 4.2, 11]} />

        <PerformanceMonitor
          bounds={() => [50, 60]}
          onDecline={() => setDpr((d) => Math.max(0.7, +(d - 0.25).toFixed(2)))}
          onIncline={() => setDpr((d) => Math.min(1.5, +(d + 0.25).toFixed(2)))}
          onFallback={() => {
            setDpr(0.7);
            setShadows(false);
          }}
        />

        <Suspense fallback={null}>
          <Reflections />
          <Lamps shadows={shadows} />
          <Floor />
          <PoolTable animate={!reduced} shadows={shadows} />
          <CameraRig interactive={!reduced} />
        </Suspense>
      </Canvas>
    </div>
  );
}
