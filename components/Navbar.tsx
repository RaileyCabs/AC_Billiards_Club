'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <div id="announcement-banner">
        <span>
          <strong>[EVENT NOTICE]</strong> Open late this week for US Open Pool Championship players! Check tournament schedule for cash payouts.
        </span>
      </div>

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
              <Link href="/tables-and-rates" className={isActive('/tables-and-rates') ? 'active' : ''}>
                Tables &amp; Rates
              </Link>
            </li>
            <li>
              <Link href="/food-and-amenities" className={isActive('/food-and-amenities') ? 'active' : ''}>
                Food, Bar &amp; Amenities
              </Link>
            </li>
            <li>
              <Link href="/private-events" className={isActive('/private-events') ? 'active' : ''}>
                Private Events
              </Link>
            </li>
            <li>
              <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>
                Location &amp; Contact
              </Link>
            </li>
            <li>
              <Link href="/admin" className={isActive('/admin') ? 'active' : ''} style={{ color: '#ef4444', fontWeight: 600 }}>
                [Owner / Admin]
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

