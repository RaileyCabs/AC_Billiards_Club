'use client';

export default function PrivateEventsPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Private Event Quote Inquiry Submitted! Our Event Coordinator will respond within 24 hours.');
  };

  return (
    <main>
      <section id="events-header">
        <h2>Private Events, Parties &amp; Table Buyouts</h2>
        <p>
          Looking for a unique venue for a birthday party, corporate team outing, bachelor party, or private tournament? 
          Atlantic City Billiard Club offers table block rentals, VIP lounge sections, custom catering platters, and full facility buyouts.
        </p>
      </section>

      {/* SECTION 1: EVENT PACKAGES */}
      <section id="event-packages">
        <h2>Private Event Packages</h2>

        <div className="grid-3">
          <div className="card">
            <h3>Package A: Reserved Table Block</h3>
            <p><strong>8 – 16 Guests</strong></p>
            <ul>
              <li>3 Reserved 9ft Pro Tables for 3 hours.</li>
              <li>Appetizer Sampler Platter included.</li>
              <li>Unlimited fountain soda &amp; server.</li>
            </ul>
            <p style={{ marginTop: '12px' }}><strong>Starting at $350</strong></p>
          </div>

          <div className="card">
            <h3>Package B: VIP Section Rental</h3>
            <p><strong>15 – 30 Guests</strong></p>
            <ul>
              <li>Semi-private lounge area with 5 tables for 4 hours.</li>
              <li>Dedicated Snooker or Carom table access.</li>
              <li>Full Kitchen Buffet platter.</li>
            </ul>
            <p style={{ marginTop: '12px' }}><strong>Starting at $750</strong></p>
          </div>

          <div className="card">
            <h3>Package C: Full Venue Buyout</h3>
            <p><strong>Up to 120 Guests</strong></p>
            <ul>
              <li>Exclusive access to all 20+ tables, Snooker room, Carom, kitchen &amp; bar.</li>
              <li>Custom tournament director to organize mini-tournament for your group.</li>
            </ul>
            <p style={{ marginTop: '12px' }}><strong>Custom Quote</strong></p>
          </div>
        </div>
      </section>

      {/* SECTION 2: EVENT INQUIRY FORM */}
      <section id="event-inquiry" className="card" style={{ border: '2px solid #18181b' }}>
        <h2>Request a Private Event Quote</h2>
        <p>Fill out the form below and our Event Coordinator will respond within 24 hours with custom pricing.</p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="contact_name">Your Name *</label>
            <input type="text" id="contact_name" name="contact_name" required placeholder="e.g. Robert Smith" />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="company_name">Company / Organization Name (Optional)</label>
            <input type="text" id="company_name" name="company_name" placeholder="e.g. Acme Corp / AC Casino Group" />
          </div>

          <div className="grid-2" style={{ gap: '16px' }}>
            <div>
              <label htmlFor="contact_email">Email Address *</label>
              <input type="email" id="contact_email" name="contact_email" required placeholder="e.g. robert@example.com" />
            </div>
            <div>
              <label htmlFor="contact_phone">Phone Number *</label>
              <input type="tel" id="contact_phone" name="contact_phone" required placeholder="e.g. (609) 555-0155" />
            </div>
          </div>

          <div className="grid-2" style={{ gap: '16px', marginTop: '16px' }}>
            <div>
              <label htmlFor="event_date">Requested Event Date *</label>
              <input type="date" id="event_date" name="event_date" required />
            </div>
            <div>
              <label htmlFor="guest_count">Estimated Guests *</label>
              <select id="guest_count" name="guest_count" required>
                <option value="10-15">10 - 15 Guests</option>
                <option value="16-30">16 - 30 Guests</option>
                <option value="31-50">31 - 50 Guests</option>
                <option value="50+">50+ Guests (Full Buyout Candidate)</option>
              </select>
            </div>
          </div>

          <div style={{ margin: '16px 0' }}>
            <label htmlFor="event_type">Type of Event</label>
            <select id="event_type" name="event_type">
              <option value="birthday">Birthday Party</option>
              <option value="corporate">Corporate Team Outing</option>
              <option value="bachelor_bachelorette">Bachelor / Bachelorette Party</option>
              <option value="private_tournament">Private Tournament Event</option>
              <option value="other">Other / Social Gathering</option>
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="event_details">Tell Us About Your Event &amp; Special Requests</label>
            <textarea id="event_details" name="event_details" rows={4} placeholder="Specify catering preferences, desired start time, bar package needs..."></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Submit Private Event Inquiry
          </button>
        </form>
      </section>
    </main>
  );
}
