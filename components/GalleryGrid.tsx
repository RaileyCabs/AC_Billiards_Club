'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { GALLERY } from '@/lib/gallery';

export default function GalleryGrid() {
  const [open, setOpen] = useState<number | null>(null);

  const move = useCallback((step: number) => {
    setOpen((i) => (i === null ? null : (i + step + GALLERY.length) % GALLERY.length));
  }, []);

  // Arrow keys and Escape, plus a scroll lock so the page behind stays put.
  useEffect(() => {
    if (open === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      else if (e.key === 'ArrowRight') move(1);
      else if (e.key === 'ArrowLeft') move(-1);
    };

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, move]);

  const shot = open === null ? null : GALLERY[open];

  return (
    <>
      <ul className="gallery">
        {GALLERY.map((s, i) => (
          <li key={s.slug} className={s.feature ? 'is-feature' : undefined}>
            <button type="button" onClick={() => setOpen(i)} aria-label={`Open: ${s.caption}`}>
              <Image
                src={`/gallery/${s.slug}-thumb.jpg`}
                alt={s.alt}
                width={560}
                height={560}
                sizes="(max-width: 640px) 50vw, (max-width: 1000px) 33vw, 280px"
                loading={i < 4 ? 'eager' : 'lazy'}
              />
              <span className="gallery-cap">
                {s.caption}
                {s.dated && <em>{s.dated}</em>}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {shot && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={shot.caption}>
          <button
            type="button"
            className="lightbox-scrim"
            aria-label="Close"
            onClick={() => setOpen(null)}
          />

          <div className="lightbox-inner">
            <Image
              src={`/gallery/${shot.slug}.jpg`}
              alt={shot.alt}
              width={1200}
              height={1200}
              sizes="(max-width: 900px) 92vw, 760px"
              style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '72svh' }}
              priority
            />

            <p className="lightbox-cap">
              {shot.caption}
              {shot.dated && <em> — {shot.dated}</em>}
            </p>

            <div className="lightbox-nav">
              <button type="button" className="btn btn-outline" onClick={() => move(-1)}>
                Prev
              </button>
              <span>
                {(open ?? 0) + 1} / {GALLERY.length}
              </span>
              <button type="button" className="btn btn-outline" onClick={() => move(1)}>
                Next
              </button>
              <button type="button" className="btn btn-primary" onClick={() => setOpen(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
