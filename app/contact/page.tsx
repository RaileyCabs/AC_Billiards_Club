export default function ContactPage() {
  return (
    <main>
      <section id="contact-header">
        <h2>Location, Directions &amp; Contact</h2>
        <p>
          Atlantic City Billiard Club is located on Black Horse Pike (US-40 / US-322) in Egg Harbor Township, New Jersey. 
          We are situated just 10&ndash;12 minutes from Atlantic City&apos;s famous boardwalk, casinos, and the Atlantic City Expressway.
        </p>
      </section>

      {/* SECTION 1: CORE CONTACT & HOURS */}
      <section id="contact-details">
        <div className="grid-2">
          <div className="card">
            <h3>Address &amp; Contact</h3>
            <p><strong>Atlantic City Billiard Club</strong></p>
            <p>6701 Black Horse Pike # A8</p>
            <p>Egg Harbor Township, NJ 08234</p>
            <p style={{ marginTop: '12px' }}><strong>Phone:</strong> <a href="tel:6095550199">(609) 555-0199</a></p>
            <p><strong>Email:</strong> info@acbilliardclub.com</p>
          </div>

          <div className="card">
            <h3>Hours of Operation</h3>
            <ul>
              <li><strong>Mon &ndash; Thu:</strong> 12:00 PM &ndash; 12:00 AM</li>
              <li><strong>Fri &ndash; Sat:</strong> 12:00 PM &ndash; 2:00 AM</li>
              <li><strong>Sunday:</strong> 12:00 PM &ndash; 11:00 PM</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2: DRIVING DIRECTIONS */}
      <section id="driving-directions">
        <h2>Turn-by-Turn Driving Directions</h2>

        <div className="grid-2">
          <div className="card">
            <h3>From Atlantic City Boardwalk &amp; Casinos</h3>
            <ol style={{ paddingLeft: '20px', fontSize: '0.9rem' }}>
              <li>Take AC Expressway West from downtown Atlantic City.</li>
              <li>Take Exit 2 toward US-40 West / Black Horse Pike.</li>
              <li>Merge onto Black Horse Pike West toward Egg Harbor Township.</li>
              <li>Proceed 4 miles. Atlantic City Billiard Club will be on your right in the plaza complex.</li>
            </ol>
          </div>

          <div className="card">
            <h3>From Garden State Parkway</h3>
            <ol style={{ paddingLeft: '20px', fontSize: '0.9rem' }}>
              <li>Take Garden State Parkway to Exit 37 toward US-40 / US-322.</li>
              <li>Merge onto Black Horse Pike East toward Atlantic City.</li>
              <li>Proceed 1.5 miles. U-turn at traffic light to enter plaza on Black Horse Pike West.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 3: MAP CONTAINER */}
      <section id="map-section">
        <h2>Interactive Google Map</h2>
        <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
          <div className="photo-placeholder" style={{ aspectRatio: '21 / 9' }}>
            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span>[ Google Maps Interactive Map Embed Placeholder ]</span>
            <small>6701 Black Horse Pike # A8, Egg Harbor Township, NJ 08234</small>
          </div>
          <a href="https://maps.google.com/?q=6701+Black+Horse+Pike+Egg+Harbor+Township+NJ" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginTop: '16px' }}>
            Open Map in Google Maps App &rarr;
          </a>
        </div>
      </section>
    </main>
  );
}
