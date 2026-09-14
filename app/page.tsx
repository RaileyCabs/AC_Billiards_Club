import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section with Neon Centerpiece */}
      <section id="hero" style={{ textAlign: 'center', background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 0%, rgba(5, 5, 8, 0.95) 70%)', border: '1px solid rgba(168, 85, 247, 0.3)', padding: '50px 24px', boxShadow: '0 0 30px rgba(168, 85, 247, 0.2)' }}>
        
        {/* Neon Vector SVG Logo Centerpiece */}
        <div style={{ display: 'inline-block', marginBottom: '24px' }}>
          <svg width="110" height="110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,12 88,82 12,82" stroke="#a855f7" strokeWidth="4.5" fill="none" style={{ filter: 'drop-shadow(0 0 10px #a855f7)' }} />
            <circle cx="50" cy="56" r="16" fill="#00f0ff" style={{ filter: 'drop-shadow(0 0 12px #00f0ff)' }} />
            <text x="50" y="62" textAnchor="middle" fill="#050508" fontSize="16" fontWeight="900" fontFamily="sans-serif">8</text>
          </svg>
        </div>

        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #00f0ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', filter: 'drop-shadow(0 0 15px rgba(0, 240, 255, 0.3))', marginBottom: '16px' }}>
          South Jersey&apos;s Premier Billiards Lounge &amp; Tournament Venue
        </h2>

        <p style={{ maxWidth: '820px', margin: '0 auto 28px auto', fontSize: '1.05rem', color: '#cbd5e1', lineHeight: '1.7' }}>
          Located in Egg Harbor Township, NJ &mdash; 10 minutes from the Atlantic City Boardwalk &amp; Casinos. 
          Featuring pro-grade 9ft Diamond and Brunswick Gold Crown tables, 12ft Regulation Snooker, 
          3-Cushion Heated Carom, weekly open cash tournaments, hot kitchen, craft beers, and APA leagues.
        </p>

        <div className="button-group" style={{ justifyContent: 'center', gap: '16px' }}>
          <Link href="/tournaments" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #ff1744 0%, #d50000 100%)', boxShadow: '0 0 20px rgba(255, 23, 68, 0.5)', padding: '14px 28px', fontSize: '0.95rem' }}>
            View Tournament Schedule &amp; Register &rarr;
          </Link>
          <Link href="/contact" className="btn btn-outline" style={{ borderColor: '#00f0ff', color: '#00f0ff', boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)', padding: '14px 24px', fontSize: '0.95rem' }}>
            Get Directions &amp; Hours &rarr;
          </Link>
        </div>
      </section>

      {/* Quick Info Grid */}
      <section id="quick-info">
        <h2>Quick Info &amp; Hours</h2>
        <div className="grid-3">
          <div className="card">
            <h3 style={{ color: '#00f0ff' }}>Operating Hours</h3>
            <p><strong>Mon &ndash; Thu:</strong> 12:00 PM &ndash; 12:00 AM</p>
            <p><strong>Fri &ndash; Sat:</strong> 12:00 PM &ndash; 2:00 AM</p>
            <p><strong>Sunday:</strong> 12:00 PM &ndash; 11:00 PM</p>
          </div>

          <div className="card">
            <h3 style={{ color: '#00f0ff' }}>Address &amp; Contact</h3>
            <p>6701 Black Horse Pike # A8</p>
            <p>Egg Harbor Township, NJ 08234</p>
            <p><strong>Phone:</strong> (609) 555-0199</p>
          </div>

          <div className="card">
            <h3 style={{ color: '#00f0ff' }}>Environment</h3>
            <p><span className="badge badge-open" style={{ background: 'rgba(0, 240, 255, 0.15)', color: '#00f0ff', border: '1px solid rgba(0, 240, 255, 0.4)' }}>All Ages Welcome</span></p>
            <p>Family-friendly environment until 9:00 PM daily. Full bar and hot kitchen available.</p>
          </div>
        </div>
      </section>

      {/* Featured Event Spotlight */}
      <section id="featured-tournament">
        <h2>Featured Event Spotlight</h2>
        
        <div className="card" style={{ border: '1px solid rgba(0, 240, 255, 0.35)', boxShadow: '0 0 20px rgba(0, 240, 255, 0.15)' }}>
          <div className="card-header">
            <div>
              <h3 style={{ fontSize: '1.35rem', color: '#f8fafc' }}>$500 Added 9-Ball Open Championship</h3>
              <p><strong>Saturday, September 26, 2026</strong> | Doors: 11:00 AM | Play Begins: 1:00 PM</p>
            </div>
            <span className="badge badge-open" style={{ background: 'rgba(0, 240, 255, 0.15)', color: '#00f0ff', border: '1px solid rgba(0, 240, 255, 0.4)' }}>Registration Open</span>
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
              <p><strong>Format:</strong> Double Elimination. Race to 7 Winner&apos;s / Race to 5 Loser&apos;s.</p>
              <p style={{ display: 'flex', gap: '6px', alignItems: 'center', flexWrap: 'wrap' }}>
                <strong>Spot Tracker:</strong> 
                <span className="badge badge-info">18 Confirmed</span>
                <span className="badge badge-pending">2 Pending</span>
                <span className="badge badge-open">12 Open Spots</span>
              </p>
              <p style={{ marginTop: '12px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <em>Cutoff Policy: Reserved spots must be paid 30 mins prior to tournament start (12:00 PM), after which unpaid spots forfeit to waitlist.</em>
              </p>
              <div style={{ marginTop: '16px' }}>
                <Link href="/tournaments#signup-modal" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #ff1744 0%, #d50000 100%)', boxShadow: '0 0 15px rgba(255, 23, 68, 0.4)' }}>
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
          </div>
        </div>
      </section>
    </main>
  );
}
