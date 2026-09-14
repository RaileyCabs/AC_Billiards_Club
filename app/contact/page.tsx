import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import HoursList from '@/components/HoursList';
import { CLUB } from '@/lib/club';

export const metadata: Metadata = {
  title: 'Location & Hours',
  description: `${CLUB.name} is at ${CLUB.address.full}. Call ${CLUB.phone.display} for hours, tables, and tournament nights.`,
};

export default function ContactPage() {
  return (
    <main>
      <section>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Location &amp; hours</p>
              <h2>Come play</h2>
              <p className="lede">
                The club sits on Black Horse Pike (US-40 / US-322) in{' '}
                {CLUB.address.city}, a short drive inland from the Atlantic City
                boardwalk and the casinos.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-2">
            <Reveal>
              <div className="card">
                <h3>Address</h3>
                <p>
                  <strong>{CLUB.name}</strong>
                  <br />
                  {CLUB.address.street}
                  <br />
                  {CLUB.address.city}, {CLUB.address.state} {CLUB.address.zip}
                </p>

                <h3 style={{ marginTop: '28px' }}>Contact</h3>
                <p>
                  <a href={CLUB.phone.href}>{CLUB.phone.display}</a>
                  <br />
                  <a href={`mailto:${CLUB.email}`}>{CLUB.email}</a>
                </p>

                <div className="button-group">
                  <a href={CLUB.phone.href} className="btn btn-primary">
                    Call
                  </a>
                  <a
                    href={`https://maps.google.com/?q=${CLUB.mapQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={110}>
              <div className="card">
                <h3>Hours</h3>
                <HoursList />
                <p style={{ fontSize: '0.86rem', marginTop: '18px', marginBottom: 0 }}>
                  {CLUB.hoursNote}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Map</p>
              <h2>Getting here</h2>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div
              style={{
                border: '1px solid var(--line)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                lineHeight: 0,
              }}
            >
              <iframe
                title={`Map to ${CLUB.name}`}
                src={`https://www.google.com/maps?q=${CLUB.mapQuery}&output=embed`}
                width="100%"
                height="420"
                style={{ border: 0, filter: 'grayscale(1) contrast(1.05)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>

          <div className="grid grid-2" style={{ marginTop: '28px' }}>
            <Reveal>
              <div className="card">
                <h3>From Atlantic City</h3>
                <p style={{ marginBottom: 0 }}>
                  Head inland on the Black Horse Pike (US-40 / US-322) toward Egg
                  Harbor Township. The club is in the plaza at 6701, suite A8.
                </p>
              </div>
            </Reveal>
            <Reveal delay={110}>
              <div className="card">
                <h3>From the Garden State Parkway</h3>
                <p style={{ marginBottom: 0 }}>
                  Exit toward US-40 / US-322 and follow the Black Horse Pike east.
                  Use the map above for turn-by-turn directions from where you are.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
