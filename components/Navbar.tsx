'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { useAppState } from '@/context/AppStateContext';
import { CLUB } from '@/lib/club';
import { LogoMark } from './Logo';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/tables-and-rates', label: 'Tables & Rates' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Location & Hours' },
  { href: '/tournaments', label: 'Tournaments' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { banner } = useAppState();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      {banner.active && (
        <div id="announcement-banner">
          <strong>Notice</strong> — {banner.text}
        </div>
      )}

      <header>
        <div id="site-logo">
          <Link href="/">
            <LogoMark size={36} />
            <span>
              <h1>{CLUB.name}</h1>
              <p>{CLUB.locality}</p>
            </span>
          </Link>
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>

        <nav className={open ? 'open' : ''}>
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={pathname === l.href ? 'active' : ''}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
            <li>
              <a href={CLUB.phone.href} className="nav-cta">
                Call {CLUB.phone.display}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
