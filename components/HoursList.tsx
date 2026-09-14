'use client';

import { useEffect, useState } from 'react';
import { CLUB } from '@/lib/club';

/**
 * Today's row is highlighted on the client only — rendering it on the server
 * would bake the build machine's date into the HTML for every visitor.
 */
export default function HoursList() {
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    setToday(new Date().toLocaleDateString('en-US', { weekday: 'long' }));
  }, []);

  return (
    <ul className="hours-list">
      {CLUB.hours.map((h) => (
        <li key={h.day} className={h.day === today ? 'today' : undefined}>
          <span className="day">{h.day}</span>
          <span className="time">
            {h.open ? `${h.open} — ${h.close}` : ('label' in h && h.label) || 'Closed'}
          </span>
        </li>
      ))}
    </ul>
  );
}
