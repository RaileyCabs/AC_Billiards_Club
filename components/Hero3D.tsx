'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const HeroScene = dynamic(() => import('./three/HeroScene'), {
  ssr: false,
  loading: () => <div className="hero-canvas hero-canvas--idle" aria-hidden="true" />,
});

/** Cheap probe so machines without WebGL get the gradient instead of a crash. */
function hasWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      canvas.getContext('webgl2') ||
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl')
    );
  } catch {
    return false;
  }
}

export default function Hero3D() {
  const [ready, setReady] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    if (!hasWebGL()) {
      setSupported(false);
      return;
    }
    // Let the page paint and settle before we hand the GPU a scene to build.
    const id = window.setTimeout(() => setReady(true), 80);
    return () => window.clearTimeout(id);
  }, []);

  if (!supported || !ready) {
    return <div className="hero-canvas hero-canvas--idle" aria-hidden="true" />;
  }

  return <HeroScene />;
}
