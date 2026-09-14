import Link from 'next/link';
import { CLUB } from '@/lib/club';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <h4>{CLUB.shortName}</h4>
          <p style={{ fontSize: '0.9rem' }}>{CLUB.intro}</p>
        </div>

        <div>
          <h4>Visit</h4>
          <ul>
            <li>{CLUB.address.street}</li>
            <li>
              {CLUB.address.city}, {CLUB.address.state} {CLUB.address.zip}
            </li>
            <li>
              <a href={`https://maps.google.com/?q=${CLUB.mapQuery}`} target="_blank" rel="noopener noreferrer">
                Get directions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={CLUB.phone.href}>{CLUB.phone.display}</a>
            </li>
            <li>
              <a href={`mailto:${CLUB.email}`}>{CLUB.email}</a>
            </li>
            <li>
              <a href={CLUB.facebook} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Pages</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/tables-and-rates">Tables &amp; Rates</Link>
            </li>
            <li>
              <Link href="/contact">Location &amp; Hours</Link>
            </li>
            <li>
              <Link href="/tournaments">Tournaments</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-base">
        <span>
          &copy; {new Date().getFullYear()} {CLUB.name}
        </span>
        <span>
          <Link href="/admin" style={{ opacity: 0.55 }}>
            Owner portal
          </Link>
        </span>
      </div>
    </footer>
  );
}
