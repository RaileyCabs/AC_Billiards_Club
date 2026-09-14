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
          <Link href="/" style={{ textDecoration: 'none' }}>
            <h1>Atlantic City Billiard Club</h1>
            <p>Egg Harbor Township, NJ</p>
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
              <Link href="/tournaments" className={isActive('/tournaments') ? 'active' : ''}>
                Tournaments &amp; Leagues
              </Link>
            </li>
            <li>
              <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>
                Location &amp; Contact
              </Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
            <li>
              <Link href="/tournaments#signup-modal" className="nav-cta">
                Register Now
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
