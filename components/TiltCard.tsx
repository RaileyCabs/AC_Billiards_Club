'use client';

import { useRef } from 'react';

/**
 * A card that leans toward the pointer. The rotation is written to CSS custom
 * properties rather than the transform itself, so the stylesheet keeps control
 * of the perspective and can flatten the whole effect on small screens.
 */
export default function TiltCard({
  children,
  className = '',
  max = 7,
}: {
  children: React.ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== 'mouse') return;

    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;

    el.style.setProperty('--ry', `${px * max * 2}deg`);
    el.style.setProperty('--rx', `${-py * max * 2}deg`);
    el.style.setProperty('--ty', '-4px');
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ty', '0px');
  };

  return (
    <div
      ref={ref}
      className={`card tilt ${className}`.trim()}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </div>
  );
}
