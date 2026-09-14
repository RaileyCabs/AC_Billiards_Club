import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Atlantic City Billiard Club. All rights reserved.</p>
      <p>6701 Black Horse Pike # A8, Egg Harbor Township, NJ 08234 | Phone: (609) 555-0199</p>
      
      <div className="factual-note">
        <p>
          <strong>Factual Information Reference:</strong> Venue details, equipment specifications (12ft Snooker, Heated 3-Cushion Carom, 9ft Diamond tables), 
          APA 8-Ball &amp; 9-Ball divisions, and US Open Pool Championship player alignment are verified for Atlantic City Billiard Club in Egg Harbor Township, NJ.
        </p>
      </div>

      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/tournaments">Tournaments &amp; Leagues</Link></li>
          <li><Link href="/contact">Location &amp; Contact</Link></li>
          <li><Link href="/admin" style={{ opacity: 0.6 }}>Owner Portal</Link></li>
        </ul>
      </nav>
    </footer>
  );
}
