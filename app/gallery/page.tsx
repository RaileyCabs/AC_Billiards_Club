import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import GalleryGrid from '@/components/GalleryGrid';
import { CLUB } from '@/lib/club';

export const metadata: Metadata = {
  title: 'Gallery',
  description: `Photos and event flyers from ${CLUB.name} in ${CLUB.address.city}, ${CLUB.address.state} — tournaments, league nights, and the room itself.`,
};

export default function GalleryPage() {
  return (
    <main>
      <section>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Gallery</p>
              <h2>The room, and what goes on in it</h2>
              <p className="lede">
                Photos and event flyers the club has posted to Facebook. Dated
                events are marked — for what is on this week, call the room or
                check the page directly.
              </p>
            </div>
          </Reveal>

          <GalleryGrid />

          <Reveal delay={120}>
            <div className="button-group">
              <a
                href={CLUB.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                See more on Facebook
              </a>
              <a href={CLUB.phone.href} className="btn btn-outline">
                Call {CLUB.phone.display}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
