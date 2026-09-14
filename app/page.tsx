import Link from 'next/link';
import Image from 'next/image';
import Hero3D from '@/components/Hero3D';
import Reveal from '@/components/Reveal';
import TiltCard from '@/components/TiltCard';
import HoursList from '@/components/HoursList';
import { CLUB } from '@/lib/club';
import { GALLERY } from '@/lib/gallery';

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <Hero3D />

        <div className="container">
          <p className="eyebrow">{CLUB.locality}</p>
          <h1>Rack them up</h1>
          <p className="lede">{CLUB.intro}</p>

          <div className="button-group">
            <a href={CLUB.phone.href} className="btn btn-primary">
              Call {CLUB.phone.display}
            </a>
            <Link href="/tables-and-rates" className="btn btn-outline">
              Tables &amp; rates
            </Link>
          </div>

          <div className="hero-meta">
            <span>
              <strong>{CLUB.rate.display}</strong> {CLUB.rate.unit}
            </span>
            <span>
              <strong>Snooker</strong> · Three-Cushion · Tight-Pocket
            </span>
            <span>{CLUB.address.street}</span>
          </div>
        </div>

        <span className="scroll-cue">Scroll</span>
      </section>

      <section id="about">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">The room</p>
              <h2>A pool hall, not a nightclub</h2>
              <p className="lede">
                No cover, no dress code, no bottle service. Just well-kept cloth,
                honest hourly rates, and the kind of specialty equipment most rooms
                in South Jersey simply do not have.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-3">
            {[
              ['Rate', CLUB.rate.display, CLUB.rate.unit],
              ['Specialty tables', '3', 'Snooker, carom, tight-pocket'],
              ['Price range', CLUB.priceRange, 'As listed by the club'],
            ].map(([label, value, sub], i) => (
              <Reveal key={label} delay={i * 90}>
                <div className="stat">
                  <span className="stat-label">{label}</span>
                  <span className="stat-value">{value}</span>
                  <span style={{ color: 'var(--text-dim)', fontSize: '0.88rem' }}>{sub}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="tables">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Specialty equipment</p>
              <h2>Three tables worth the drive</h2>
              <p className="lede">
                Alongside the regular pool tables, the club keeps three pieces of
                equipment you will struggle to find anywhere else nearby.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-3">
            {CLUB.tables.map((t, i) => (
              <Reveal key={t.id} delay={i * 110}>
                <TiltCard>
                  <p className="eyebrow" style={{ marginBottom: '0.6rem' }}>
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3>{t.name}</h3>
                  <p style={{ marginBottom: 0 }}>{t.blurb}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <div className="button-group">
            <Link href="/tables-and-rates" className="btn btn-outline">
              See rates
            </Link>
          </div>
        </div>
      </section>

      <section id="more-than-pool">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Beyond the table</p>
              <h2>Food, drinks, and the game on</h2>
            </div>
          </Reveal>

          <div className="grid grid-3">
            {CLUB.amenities.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <TiltCard>
                  <h3>{a.title}</h3>
                  <p style={{ marginBottom: 0 }}>{a.body}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery-teaser">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Gallery</p>
              <h2>From the club&apos;s Facebook</h2>
              <p className="lede">
                Tournament nights, league nights, and the flyers the club puts out
                each week.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <ul className="gallery-strip">
              {GALLERY.slice(0, 5).map((g) => (
                <li key={g.slug}>
                  <Link href="/gallery" aria-label={g.caption}>
                    <Image
                      src={`/gallery/${g.slug}-thumb.jpg`}
                      alt={g.alt}
                      width={560}
                      height={560}
                      sizes="(max-width: 700px) 45vw, 220px"
                      loading="lazy"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="button-group">
            <Link href="/gallery" className="btn btn-outline">
              See the gallery
            </Link>
          </div>
        </div>
      </section>

      <section id="visit">
        <div className="container">
          <div className="grid grid-2">
            <Reveal>
              <div>
                <p className="eyebrow">Before you drive out</p>
                <h2>Hours</h2>
                <HoursList />
                <p style={{ fontSize: '0.86rem', marginTop: '18px' }}>{CLUB.hoursNote}</p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card">
                <h3>Find the room</h3>
                <p>
                  {CLUB.address.street}
                  <br />
                  {CLUB.address.city}, {CLUB.address.state} {CLUB.address.zip}
                </p>
                <p>
                  <a href={CLUB.phone.href}>{CLUB.phone.display}</a>
                  <br />
                  <a href={`mailto:${CLUB.email}`}>{CLUB.email}</a>
                </p>
                <div className="button-group" style={{ marginTop: '20px' }}>
                  <Link href="/contact" className="btn btn-outline">
                    Directions
                  </Link>
                  <a
                    href={CLUB.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
