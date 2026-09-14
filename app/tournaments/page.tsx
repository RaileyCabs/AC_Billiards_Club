'use client';

import { useState } from 'react';
import Link from 'next/link';
import TournamentBracket from '@/components/TournamentBracket';
import { useAppState } from '@/context/AppStateContext';

export default function TournamentsPage() {
  const { tournaments, registerPlayer } = useAppState();
  const [filterGame, setFilterGame] = useState('all');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    rating: '',
    paymentPreference: 'cash_at_door'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;
    
    registerPlayer({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      rating: formData.rating,
      paymentPreference: formData.paymentPreference
    });

    setFormSubmitted(true);
    alert(`Registration reserved for ${formData.name}! You are added to the roster in PENDING PAYMENT status.`);
    setFormData({ name: '', phone: '', email: '', rating: '', paymentPreference: 'cash_at_door' });
  };

  const filteredTournaments = tournaments.filter(t => {
    if (filterGame === 'all') return true;
    return t.gameType === filterGame;
  });

  return (
    <main>
      <section id="tournaments-header">
        <h2>Tournaments &amp; Leagues Hub</h2>
        <p>
          Atlantic City Billiard Club hosts South Jersey&apos;s premier weekly open tournaments, handicap chip games, 
          and sanctioned APA 8-Ball &amp; 9-Ball leagues. Reserve your spot online, track live brackets, or explore past results.
        </p>
      </section>

      {/* SECTION 1: UPCOMING TOURNAMENTS */}
      <section id="upcoming-tournaments">
        <h2>Upcoming Tournaments</h2>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="game-type-filter">Filter Game Type: </label>
          <select 
            id="game-type-filter" 
            style={{ maxWidth: '300px' }}
            value={filterGame}
            onChange={(e) => setFilterGame(e.target.value)}
          >
            <option value="all">All Games (8-Ball, 9-Ball, 10-Ball, Snooker)</option>
            <option value="9-ball">9-Ball</option>
            <option value="8-ball">8-Ball</option>
            <option value="10-ball">10-Ball</option>
            <option value="snooker">Snooker</option>
          </select>
        </div>

        {filteredTournaments.map(t => (
          <article className="card" key={t.id}>
            <div className="card-header">
              <div>
                <h3>{t.title}</h3>
                <p><strong>{t.dateTime}</strong></p>
              </div>
              <span className="badge badge-open">{t.status}</span>
            </div>

            <div className="grid-2">
              <div className="photo-placeholder">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <span>[ Photo Placeholder: {t.title} Flyer Poster ]</span>
                <small>Official Flyer Photo</small>
              </div>

              <div>
                <p><strong>Entry Fee:</strong> ${t.entryFee + t.greenFee} (${t.entryFee} Entry + ${t.greenFee} Green Fee)</p>
                {t.houseAdded > 0 && <p><strong>House Added:</strong> ${t.houseAdded} Guaranteed</p>}
                <p><strong>Format:</strong> Double Elimination. Race length based on Fargo rating.</p>
                <p><strong>Real-Time Spot Tracker:</strong> 
                  {' '}<span className="badge badge-info">{t.confirmedCount} Confirmed</span>{' '}
                  <span className="badge badge-pending">{t.pendingCount} Pending</span>{' '}
                  <span className="badge badge-open">{Math.max(0, t.maxSpots - t.confirmedCount - t.pendingCount)} Open Spots</span>
                </p>

                <div style={{ backgroundColor: 'var(--bg-card-hover)', border: '1px solid var(--border-card)', padding: '12px', borderRadius: 'var(--radius-md)', margin: '16px 0' }}>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                    <strong>Cutoff Notice:</strong> Reserved spots are held until <strong>30 mins before start</strong>, after which unpaid spots forfeit to waitlisted players.
                  </p>
                </div>

                <a href="#signup-modal" className="btn btn-primary">
                  Reserve Your Spot Now &rarr;
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* PLAYER REGISTRATION FORM CARD */}
      <section id="signup-modal" className="card" style={{ border: '2px solid var(--border-card)' }}>
        <div className="card-header">
          <h3>Player Tournament Registration Form</h3>
          <span className="badge badge-pending">Pending Payment Spot</span>
        </div>

        {formSubmitted && (
          <div style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '12px', borderRadius: 'var(--radius-md)', marginBottom: '16px' }}>
            🎉 <strong>Registration Successful!</strong> Your spot is reserved on the live roster as Pending Payment.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <p><strong>Selected Event:</strong> {tournaments[0]?.title || '$500 Added 9-Ball Open'}</p>
          
          <div style={{ marginBottom: '14px' }}>
            <label htmlFor="player_name">Full Name *</label>
            <input 
              type="text" 
              id="player_name" 
              name="player_name" 
              required 
              placeholder="e.g. Johnny McDermott" 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label htmlFor="player_phone">Cell Phone Number * (For SMS Confirmation &amp; Cutoff Alerts)</label>
            <input 
              type="tel" 
              id="player_phone" 
              name="player_phone" 
              required 
              placeholder="e.g. (609) 555-0123" 
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label htmlFor="player_email">Email Address * (For Digital Receipt &amp; Calendar Add)</label>
            <input 
              type="email" 
              id="player_email" 
              name="player_email" 
              required 
              placeholder="e.g. johnny@example.com" 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label htmlFor="skill_level">Skill Rating / League Handicap</label>
            <input 
              type="text" 
              id="skill_level" 
              name="skill_level" 
              placeholder="e.g. Fargo 520 / APA 6" 
              value={formData.rating}
              onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="payment_preference">Intended Payment Method</label>
            <select 
              id="payment_preference" 
              name="payment_preference"
              value={formData.paymentPreference}
              onChange={(e) => setFormData({ ...formData, paymentPreference: e.target.value })}
            >
              <option value="Cash at Counter">Pay Cash at Counter (Must pay by 12:00 PM day of event)</option>
              <option value="Venmo Advance">Venmo Advance Payment</option>
              <option value="Zelle Advance">Zelle Advance Payment</option>
              <option value="Card at Counter">Credit/Debit Card at Counter</option>
            </select>
          </div>

          <div style={{ backgroundColor: 'var(--bg-card-hover)', border: '1px solid var(--border-card)', padding: '14px', borderRadius: 'var(--radius-md)', marginBottom: '16px' }}>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', margin: 0 }}>
              <strong>Anti-Dropout Policy:</strong> Clicking &quot;Complete Registration&quot; reserves your spot as <strong>[PENDING PAYMENT]</strong> on the public roster. Payment must be completed prior to cutoff time on tournament day.
            </p>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Complete Registration &amp; Get Digital Receipt
          </button>
        </form>
      </section>

      {/* SECTION 2: NATIVE LIVE VISUAL TOURNAMENT BRACKET */}
      <section id="live-bracket-tracker">
        <h2>Live Bracket Tracker &amp; Match Progression</h2>
        <p>Native double-elimination bracket engine with real-time match progression lines, scores, and table assignments.</p>

        <TournamentBracket />
      </section>

      {/* SECTION 3: TOURNAMENT ARCHIVE */}
      <section id="tournament-archive">
        <h2>Tournament Archive &amp; Past Results</h2>
        <p>Historical tournament records and official prize money payouts from recent events.</p>

        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Tournament Title</th>
                <th>Field Size</th>
                <th>Total Purse</th>
                <th>1st Place Winner</th>
                <th>2nd Place</th>
                <th>3rd Place</th>
                <th>Final Bracket</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sept 12, 2026</td>
                <td>Saturday 8-Ball Handicap Open</td>
                <td>24 Players</td>
                <td>$720</td>
                <td><strong>Mike Sullivan</strong> ($360)</td>
                <td>Dave Ramirez ($210)</td>
                <td>Chris Pastore ($150)</td>
                <td><a href="#" className="btn btn-outline" style={{ padding: '3px 8px', fontSize: '0.75rem' }}>View Bracket</a></td>
              </tr>
              <tr>
                <td>Aug 29, 2026</td>
                <td>$1,000 Added Summer 9-Ball Classic</td>
                <td>32 Players</td>
                <td>$1,800</td>
                <td><strong>Ray &quot;The Razor&quot; Martin</strong> ($900)</td>
                <td>Jason Chen ($500)</td>
                <td>Tommy Vance ($400)</td>
                <td><a href="#" className="btn btn-outline" style={{ padding: '3px 8px', fontSize: '0.75rem' }}>View Bracket</a></td>
              </tr>
              <tr>
                <td>Aug 15, 2026</td>
                <td>10-Ball Open Shootout</td>
                <td>16 Players</td>
                <td>$480</td>
                <td><strong>Dave Ramirez</strong> ($280)</td>
                <td>Marcus Vance ($140)</td>
                <td>Kevin O&apos;Connor ($60)</td>
                <td><a href="#" className="btn btn-outline" style={{ padding: '3px 8px', fontSize: '0.75rem' }}>View Bracket</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 4: LEAGUE NIGHTS */}
      <section id="league-nights">
        <h2>APA Leagues &amp; In-House Divisions</h2>
        <div className="grid-3">
          <div className="card">
            <h3>Monday Night APA 8-Ball</h3>
            <p><strong>Time:</strong> 7:00 PM Start</p>
            <p><strong>Equipment:</strong> 7ft Valley Bar Boxes</p>
            <p><strong>Contact:</strong> Dan M. - (609) 555-0144</p>
          </div>

          <div className="card">
            <h3>Wednesday Night APA 9-Ball</h3>
            <p><strong>Time:</strong> 7:00 PM Start</p>
            <p><strong>Equipment:</strong> 7ft Valley Bar Boxes</p>
            <p><strong>Contact:</strong> Sarah T. - (609) 555-0188</p>
          </div>

          <div className="card">
            <h3>Thursday Pro 9-Ball League</h3>
            <p><strong>Time:</strong> 7:30 PM Start</p>
            <p><strong>Equipment:</strong> 9ft Diamond Pro Tables</p>
            <p><strong>Contact:</strong> Front Desk - (609) 555-0199</p>
          </div>
        </div>
      </section>
    </main>
  );
}
