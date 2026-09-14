import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero">
        <h2>South Jersey's Premier Billiards Lounge &amp; Tournament Venue</h2>
        <p>
          Located in Egg Harbor Township, NJ — just 10 minutes from the Atlantic City Boardwalk and Casinos. 
          Featuring pro-grade 9ft Diamond and Brunswick Gold Crown tables, 12ft Regulation Snooker, 
          3-Cushion Heated Carom, weekly open cash tournaments, full kitchen, craft beers, and APA leagues.
        </p>
        
        <div className="photo-placeholder">
          <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          <span>[ Photo Placeholder: Billiards Lounge &amp; 9ft Pro Tables Hero Image ]</span>
          <small>Recommended aspect ratio: 16:9 widescreen photo of pool hall under canopy lights</small>
        </div>

        <div className="button-group">
          <Link href="/tournaments" className="btn btn-primary">
            View Tournament Schedule &amp; Register
          </Link>
          <Link href="/tables-and-rates" className="btn btn-outline">
            Explore Tables &amp; Rates
          </Link>
          <Link href="/contact" className="btn btn-outline">
            Get Directions &amp; Hours
          </Link>
        </div>
      </section>

      {/* Quick Info Grid */}
      <section id="quick-info">
        <h2>Quick Info &amp; Hours</h2>
        <div className="grid-3">
          <div className="card">
            <h3>Operating Hours</h3>
            <p><strong>Mon – Thu:</strong> 12:00 PM – 12:00 AM</p>
            <p><strong>Fri – Sat:</strong> 12:00 PM – 2:00 AM</p>
            <p><strong>Sunday:</strong> 12:00 PM – 11:00 PM</p>
          </div>

          <div className="card">
            <h3>Address &amp; Contact</h3>
            <p>6701 Black Horse Pike # A8</p>
            <p>Egg Harbor Township, NJ 08234</p>
            <p><strong>Phone:</strong> (609) 555-0199</p>
          </div>

          <div className="card">
            <h3>Environment</h3>
            <p><span className="badge badge-open">All Ages Welcome</span></p>
            <p>Family-friendly environment until 9:00 PM daily. Full bar and hot kitchen available.</p>
          </div>
        </div>
      </section>

      {/* Featured Tournament Spotlight */}
      <section id="featured-tournament">
        <h2>Featured Event Spotlight</h2>
        
        <div className="card">
          <div className="card-header">
            <div>
              <h3>$500 Added 9-Ball Open Championship</h3>
              <p><strong>Saturday, September 26, 2026</strong> | Doors: 11:00 AM | Play Begins: 1:00 PM</p>
            </div>
            <span className="badge badge-open">Registration Open</span>
          </div>

          <div className="grid-2">
            <div className="photo-placeholder">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span>[ Photo Placeholder: $500 Added Tournament Flyer Poster ]</span>
              <small>Official Flyer Photo</small>
            </div>

            <div>
              <p><strong>Entry Fee:</strong> $25 ($20 Entry + $5 Green Fee)</p>
              <p><strong>Format:</strong> Double Elimination. Race to 7 Winner's / Race to 5 Loser's.</p>
              <p><strong>Spot Tracker:</strong> <span className="badge badge-info">18 Confirmed</span> <span className="badge badge-pending">4 Pending</span> <span className="badge badge-open">10 Open Spots</span></p>
              <p style={{ marginTop: '12px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <em>Cutoff Policy: Reserved spots must be paid 30 mins prior to tournament start (12:00 PM), after which unpaid spots forfeit to waitlist.</em>
              </p>
              <div style={{ marginTop: '16px' }}>
                <Link href="/tournaments#signup-modal" className="btn btn-primary">
                  Register For This Event &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Equipment Grid */}
      <section id="specialty-tables-spotlight">
        <h2>Unmatched Specialty Equipment</h2>
        
        <div className="grid-2">
          <div className="card">
            <div className="photo-placeholder">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span>[ Photo Placeholder: 9ft Diamond &amp; Gold Crown Tables ]</span>
            </div>
            <h3>9ft Diamond &amp; Brunswick Gold Crown Tables</h3>
            <p>Simonis 860 cloth, Super Aramith Pro ball sets, illuminated by flicker-free LED canopy lamps.</p>
          </div>

          <div className="card">
            <div className="photo-placeholder">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span>[ Photo Placeholder: 12ft Regulation Snooker Table ]</span>
            </div>
            <h3>12ft Regulation Snooker &amp; Heated Carom</h3>
            <p>Full-size English Snooker table with Strachan 6811 cloth alongside a thermostatically heated 3-Cushion Carom table.</p>
          </div>
        </div>
        <Link href="/tables-and-rates" className="btn btn-outline">
          View All Rates &amp; Specials &rarr;
        </Link>
      </section>

      {/* Food & Bar Section */}
      <section id="kitchen-bar-summary">
        <h2>Hot Kitchen, Cold Drinks &amp; Amenities</h2>
        <div className="card grid-2">
          <div className="photo-placeholder">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <span>[ Photo Placeholder: Kitchen Food &amp; Draft Beer Bar ]</span>
          </div>
          <div>
            <p>
              Fuel your game with freshly made burgers, hot wings, philly cheesesteaks, and stone-baked pizzas. 
              We feature cold draft beers, local craft brews, TouchTunes digital jukebox, wall-to-wall HD sports TVs, and an on-site pro shop.
            </p>
            <Link href="/food-and-amenities" className="btn btn-outline" style={{ marginTop: '16px' }}>
              View Full Kitchen &amp; Drink Menu &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
