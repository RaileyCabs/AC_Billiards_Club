'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { useAppState } from '@/context/AppStateContext';

export default function Navbar() {
  const pathname = usePathname();
  const { banner } = useAppState();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {banner.active && (
        <div id="announcement-banner">
          <span>
            <strong>[EVENT NOTICE]</strong> {banner.text}
          </span>
        </div>
      )}

      <header>
        <div id="site-logo">
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Neon Rack Triangle */}
              <polygon points="50,15 85,80 15,80" stroke="#a855f7" strokeWidth="4.5" fill="none" style={{ filter: 'drop-shadow(0 0 6px #a855f7)' }} />
              {/* Pool Ball 8 inside */}
              <circle cx="50" cy="55" r="14" fill="#00f0ff" style={{ filter: 'drop-shadow(0 0 8px #00f0ff)' }} />
              <text x="50" y="60" textAnchor="middle" fill="#050508" fontSize="14" fontWeight="900" fontFamily="sans-serif">8</text>
            </svg>
            <div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.35rem', fontWeight: 900, background: 'linear-gradient(135deg, #ff1744 0%, #00f0ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.4))' }}>
                Atlantic City Billiard Club
              </h1>
              <p style={{ fontSize: '0.725rem', color: '#00f0ff', fontWeight: 800, letterSpacing: '0.12em', margin: 0, textTransform: 'uppercase' }}>
                Egg Harbor Township, NJ
              </p>
            </div>
          </Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link href="/" className={isActive('/') ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>
                Location &amp; Contact
              </Link>
            </li>
            <li>
              <Link href="/tournaments" className={isActive('/tournaments') ? 'active' : ''}>
                Tournaments &amp; Leagues
              </Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
            <li>
              <Link href="/tournaments#signup-modal" className="nav-cta" style={{ background: 'linear-gradient(135deg, #ff1744 0%, #d50000 100%)', boxShadow: '0 0 15px rgba(255, 23, 68, 0.5)' }}>
                Register Now
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
