import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import TiltCard from '@/components/TiltCard';
import { CLUB } from '@/lib/club';

export const metadata: Metadata = {
  title: 'Tables & Rates',
  description: `${CLUB.rate.display} ${CLUB.rate.unit}. Snooker, three-cushion carom, and tight-pocket tables in ${CLUB.address.city}, ${CLUB.address.state}.`,
};

export default function TablesAndRatesPage() {
  return (
    <main>
      <section>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Tables &amp; rates</p>
              <h2>What it costs to play</h2>
              <p className="lede">
                One hourly rate, per person, on the clock. The club lists itself at
                a {CLUB.priceRange} price range, and the rate below is the one it
                publishes.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="card" style={{ padding: '38px 28px' }}>
              <span className="stat-label">Hourly rate</span>
              <div
                className="stat-value"
                style={{ fontSize: 'clamp(2.8rem, 9vw, 5rem)', margin: '6px 0 10px' }}
              >
                {CLUB.rate.display}
              </div>
              <p style={{ marginBottom: '6px' }}>{CLUB.rate.unit}</p>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-faint)', marginBottom: 0 }}>
                {CLUB.rate.note}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Specialty equipment</p>
              <h2>The tables</h2>
            </div>
          </Reveal>

          <div className="grid grid-3">
            {CLUB.tables.map((t, i) => (
              <Reveal key={t.id} delay={i * 110}>
                <TiltCard>
                  <h3>{t.name}</h3>
                  <p style={{ marginBottom: 0 }}>{t.blurb}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p style={{ marginTop: '32px', fontSize: '0.9rem' }}>
              Standard pool tables are available alongside the specialty equipment.
              For table availability, group play, or to hold a table for a specific
              night, call the room directly at{' '}
              <a href={CLUB.phone.href} style={{ borderBottom: '1px solid var(--line-strong)' }}>
                {CLUB.phone.display}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <div className="card">
              <h3>House etiquette</h3>
              <ul>
                <li>Keep drinks off the rails and the table bed.</li>
                <li>Chalk away from the cloth.</li>
                <li>Set the rack down — do not drop it.</li>
                <li>Stay out of a neighbouring player&apos;s shot line.</li>
              </ul>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-faint)', marginTop: '16px', marginBottom: 0 }}>
                Standard room courtesy. The club has final say on house rules.
              </p>
            </div>
          </Reveal>

          <div className="button-group">
            <a href={CLUB.phone.href} className="btn btn-primary">
              Call the room
            </a>
            <Link href="/contact" className="btn btn-outline">
              Hours &amp; directions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
