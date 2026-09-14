import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Atlantic City Billiard Club. All rights reserved.</p>
      <p>6701 Black Horse Pike # A8, Egg Harbor Township, NJ 08234 | Phone: (609) 555-0199</p>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/tournaments">Tournaments</Link></li>
          <li><Link href="/tables-and-rates">Rates</Link></li>
          <li><Link href="/food-and-amenities">Menu</Link></li>
          <li><Link href="/private-events">Private Events</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/admin">Admin Portal</Link></li>
        </ul>
      </nav>
    </footer>
  );
}
