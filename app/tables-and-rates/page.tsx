export default function TablesAndRatesPage() {
  return (
    <main>
      <section id="rates-header">
        <h2>Tables, Equipment &amp; Transparent Rates</h2>
        <p>
          Whether you&apos;re practicing solo, bringing a date, hosting a friendly game with friends, or training on regulation specialty equipment, 
          Atlantic City Billiard Club offers the cleanest felt and best maintained tables in South Jersey.
        </p>
      </section>

      {/* SECTION 1: SPECIALTY EQUIPMENT SHOWCASE */}
      <section id="equipment-showcase">
        <h2>Our Premium Equipment Selection</h2>
        
        <div className="grid-2">
          <div className="card">
            <div className="photo-placeholder">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span>[ Photo Placeholder: 9ft Diamond Pro Am &amp; Brunswick Gold Crown IV ]</span>
            </div>
            <h3>9ft Diamond &amp; Brunswick Gold Crown IV Pro Tables</h3>
            <p><strong>Quantity:</strong> 10 Tables | <strong>Cloth:</strong> Simonis 860 Blue | <strong>Balls:</strong> Super Aramith Pro</p>
            <p>Tournament-grade cloth cleaned daily, illuminated by shadowless high-output LED canopy lamps.</p>
          </div>

          <div className="card">
            <div className="photo-placeholder">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span>[ Photo Placeholder: 12ft Regulation Tournament Snooker Table ]</span>
            </div>
            <h3>12ft Regulation Tournament Snooker Table</h3>
            <p><strong>Quantity:</strong> 1 Table (Dedicated Snooker Room) | <strong>Cloth:</strong> Strachan 6811 Wool</p>
            <p>Full-size English Snooker table with Northern Rubber cushions, extension cues, spider rests, and Aramith 2-1/16&quot; balls.</p>
          </div>

          <div className="card">
            <div className="photo-placeholder">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span>[ Photo Placeholder: Heated 3-Cushion Carom Table ]</span>
            </div>
            <h3>Heated 3-Cushion Carom Billiard Table</h3>
            <p><strong>Quantity:</strong> 1 Table | <strong>Features:</strong> Thermostatically heated 60mm slate bed</p>
            <p>Simonis 300 Carom Cloth and Aramith Super 61.5mm 3-Cushion Carom balls for true billiard physics.</p>
          </div>

          <div className="card">
            <div className="photo-placeholder">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span>[ Photo Placeholder: 7ft Valley Bar Boxes ]</span>
            </div>
            <h3>7ft Valley Bar Boxes</h3>
            <p><strong>Quantity:</strong> 8 Tables | <strong>Cloth:</strong> Championship Teflon Green Cloth</p>
            <p>Maintained for APA league play and fast-paced casual games.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRANSPARENT RATES TABLE */}
      <section id="table-rates">
        <h2>Transparent Hourly Rates &amp; Specials</h2>
        <p>No hidden green fees. Rates are per person per hour or flat hourly table rate.</p>

        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Table Type</th>
                <th>Standard Rate (Per Person)</th>
                <th>2-Player Table Max Rate</th>
                <th>3+ Player Group Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>7ft Valley Bar Boxes</strong></td>
                <td>$7.00 / hr per person</td>
                <td>$12.00 / hr per table</td>
                <td>$15.00 / hr per table</td>
              </tr>
              <tr>
                <td><strong>9ft Pro Tables (Diamond / Gold Crown)</strong></td>
                <td>$9.00 / hr per person</td>
                <td>$16.00 / hr per table</td>
                <td>$20.00 / hr per table</td>
              </tr>
              <tr>
                <td><strong>12ft Snooker Table</strong></td>
                <td>$12.00 / hr per person</td>
                <td>$20.00 / hr per table</td>
                <td>$24.00 / hr per table</td>
              </tr>
              <tr>
                <td><strong>Heated 3-Cushion Carom Table</strong></td>
                <td>$12.00 / hr per person</td>
                <td>$20.00 / hr per table</td>
                <td>$24.00 / hr per table</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card" style={{ marginTop: '24px' }}>
          <h3>Daily Practice Specials</h3>
          <ul>
            <li><strong>Afternoon Solo Practice Special:</strong> Mon &ndash; Fri (12:00 PM &ndash; 4:00 PM) &mdash; <strong>$15 Unlimited Solo Pass</strong>.</li>
            <li><strong>Senior (60+) &amp; Veteran Discount:</strong> 15% off all table rates.</li>
            <li><strong>College Student Night:</strong> Wednesdays 7:00 PM &ndash; Close &mdash; $6/hr per person with student ID.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 3: HOUSE RULES */}
      <section id="house-rules">
        <h2>House Rules &amp; Equipment Etiquette</h2>
        <div className="card">
          <ul>
            <li><strong>No Food or Drinks on Table Rails:</strong> Drinks must remain on pub tables and cue racks.</li>
            <li><strong>No Mass&eacute; or Unapproved Jump Shots:</strong> Prohibited on Snooker/Carom tables. On 9ft tables, jump shots require proper phenolic jump cues and slate protection.</li>
            <li><strong>Rack &amp; Cue Care:</strong> Set racks down gently. Chalk cues away from the table bed.</li>
            <li><strong>Player Respect:</strong> Avoid standing in a player&apos;s shot line on adjacent tables during tournament play.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
