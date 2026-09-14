'use client';

import Link from 'next/link';

export default function TournamentsPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Tournament Registration Submitted! Check your email for digital receipt.');
  };

  return (
    <main>
      <section id="tournaments-header">
        <h2>Tournaments &amp; Leagues Hub</h2>
        <p>
          Atlantic City Billiard Club hosts South Jersey's premier weekly open tournaments, handicap chip games, 
          and sanctioned APA 8-Ball &amp; 9-Ball leagues. Reserve your spot online, track live brackets, or explore past results.
        </p>
      </section>

      {/* SECTION 1: UPCOMING TOURNAMENTS */}
      <section id="upcoming-tournaments">
        <h2>Upcoming Tournaments</h2>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="game-type-filter">Filter Game Type: </label>
          <select id="game-type-filter" style={{ maxWidth: '300px' }}>
            <option value="all">All Games (8-Ball, 9-Ball, 10-Ball, Snooker)</option>
            <option value="9-ball">9-Ball</option>
            <option value="8-ball">8-Ball</option>
            <option value="10-ball">10-Ball</option>
            <option value="snooker">Snooker</option>
          </select>
        </div>

        {/* Event 1 Card */}
        <article className="card">
          <div className="card-header">
            <div>
              <h3>$500 Added 9-Ball Open Championship</h3>
              <p><strong>Saturday, September 26, 2026</strong> | Doors: 11:00 AM | Play Begins: 1:00 PM</p>
            </div>
            <span className="badge badge-open">Registration Open</span>
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
              <p><strong>House Added:</strong> $500 Guaranteed (24+ players)</p>
              <p><strong>Format:</strong> Double Elimination. Race to 7 Winner's / Race to 5 Loser's.</p>
              <p><strong>Rules:</strong> Texas Express 9-Ball. Rack your own (9 on spot).</p>
              <p><strong>Real-Time Spot Tracker:</strong> <span className="badge badge-info">18 Confirmed</span> <span className="badge badge-pending">4 Pending</span> <span className="badge badge-open">10 Open Spots</span></p>

              <div style={{ backgroundColor: '#fefce8', border: '1px solid #fef08a', padding: '12px', borderRadius: 'var(--radius-md)', margin: '16px 0' }}>
                <p style={{ fontSize: '0.85rem', color: '#854d0e', margin: 0 }}>
                  <strong>Cutoff Notice:</strong> Reserved spots are held until <strong>30 mins before start (12:00 PM)</strong>, after which unpaid spots forfeit to waitlisted players.
                </p>
              </div>

              <a href="#signup-modal" className="btn btn-primary">
                Reserve Your Spot Now &rarr;
              </a>
            </div>
          </div>
        </article>

        {/* Event 2 Card */}
        <article className="card">
          <div className="card-header">
            <div>
              <h3>Friday Night 8-Ball Handicap Chip Tournament</h3>
              <p><strong>Every Friday Night</strong> | Check-in: 6:30 PM | Play Begins: 7:00 PM</p>
            </div>
            <span className="badge badge-open">Weekly Event</span>
          </div>

          <div className="grid-2">
            <div className="photo-placeholder">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span>[ Photo Placeholder: Friday Night Chip Tournament Poster ]</span>
            </div>

            <div>
              <p><strong>Entry Fee:</strong> $15 ($12 Prize Pool + $3 Green Fee)</p>
              <p><strong>Format:</strong> Chip format based on handicap rating. Last player standing wins total pot.</p>
              <p><strong>Spot Tracker:</strong> <span className="badge badge-info">12 Confirmed</span> <span className="badge badge-pending">2 Pending</span> <span className="badge badge-open">10 Open Spots</span></p>

              <div style={{ marginTop: '16px' }}>
                <a href="#signup-modal" className="btn btn-primary">
                  Reserve Your Spot Now &rarr;
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* PLAYER REGISTRATION FORM CARD */}
      <section id="signup-modal" className="card" style={{ border: '2px solid #18181b' }}>
        <div className="card-header">
          <h3>Player Tournament Registration Form</h3>
          <span className="badge badge-pending">Pending Payment Spot</span>
        </div>

        <form onSubmit={handleSubmit}>
          <p><strong>Selected Event:</strong> $500 Added 9-Ball Open (Sept 26, 2026)</p>
          
          <div style={{ marginBottom: '14px' }}>
            <label htmlFor="player_name">Full Name *</label>
            <input type="text" id="player_name" name="player_name" required placeholder="e.g. Johnny McDermott" />
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label htmlFor="player_phone">Cell Phone Number * (For SMS Confirmation &amp; Cutoff Alerts)</label>
            <input type="tel" id="player_phone" name="player_phone" required placeholder="e.g. (609) 555-0123" />
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label htmlFor="player_email">Email Address * (For Digital Receipt &amp; Calendar Add)</label>
            <input type="email" id="player_email" name="player_email" required placeholder="e.g. johnny@example.com" />
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label htmlFor="skill_level">Skill Rating / League Handicap</label>
            <input type="text" id="skill_level" name="skill_level" placeholder="e.g. Fargo 520 / APA 6" />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="payment_preference">Intended Payment Method</label>
            <select id="payment_preference" name="payment_preference">
              <option value="cash_at_door">Pay Cash at Counter (Must pay by 12:00 PM day of event)</option>
              <option value="venmo">Venmo Advance Payment</option>
              <option value="zelle">Zelle Advance Payment</option>
              <option value="card_at_door">Credit/Debit Card at Counter</option>
            </select>
          </div>

          <div style={{ backgroundColor: '#fafafa', border: '1px solid var(--border-color)', padding: '14px', borderRadius: 'var(--radius-md)', marginBottom: '16px' }}>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', margin: 0 }}>
              <strong>Anti-Dropout Policy:</strong> Clicking "Complete Registration" reserves your spot as <strong>[PENDING PAYMENT]</strong> on the public roster. Payment must be completed prior to 12:00 PM on tournament day.
            </p>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Complete Registration &amp; Get Digital Receipt
          </button>
        </form>
      </section>

      {/* SECTION 2: LIVE VISUAL TOURNAMENT BRACKET PROTOTYPE */}
      <section id="live-bracket-tracker">
        <h2>Live Bracket Tracker &amp; Match Progression</h2>
        <p>Interactive double-elimination bracket tracking active matches, scores, and table calls (Powered by DigitalPool / Challonge embed integration).</p>

        <div className="card">
          <div className="card-header">
            <div>
              <h3>Active Event: Saturday 9-Ball Open Championship</h3>
              <p><strong>Race Length:</strong> Race to 7 (Winner's) / Race to 5 (Loser's) | <strong>Status:</strong> Semi-Finals Underway</p>
            </div>
            <span className="badge badge-info">LIVE STREAM ACTIVE</span>
          </div>

          <div className="bracket-wrapper">
            <div className="bracket-container">
              
              {/* COLUMN 1: QUARTER-FINALS */}
              <div className="bracket-column">
                <div className="bracket-column-header">Quarter-Finals (Race to 7)</div>

                <div className="match-box">
                  <div className="match-box-header">
                    <span>Match 1 &bull; Table 1</span>
                    <span className="badge badge-forfeit" style={{ fontSize: '0.6rem', padding: '1px 4px' }}>FINAL</span>
                  </div>
                  <div className="match-player winner">
                    <span>1. Ray Martin (Fargo 680)</span>
                    <span className="score">7</span>
                  </div>
                  <div className="match-player">
                    <span>8. Kevin O'Connor (Fargo 510)</span>
                    <span className="score">3</span>
                  </div>
                </div>

                <div className="match-box">
                  <div className="match-box-header">
                    <span>Match 2 &bull; Table 2</span>
                    <span className="badge badge-forfeit" style={{ fontSize: '0.6rem', padding: '1px 4px' }}>FINAL</span>
                  </div>
                  <div className="match-player winner">
                    <span>4. Dave Ramirez (Fargo 610)</span>
                    <span className="score">7</span>
                  </div>
                  <div className="match-player">
                    <span>5. Marcus Vance (Fargo 580)</span>
                    <span className="score">5</span>
                  </div>
                </div>

                <div className="match-box">
                  <div className="match-box-header">
                    <span>Match 3 &bull; Table 3</span>
                    <span className="badge badge-forfeit" style={{ fontSize: '0.6rem', padding: '1px 4px' }}>FINAL</span>
                  </div>
                  <div className="match-player winner">
                    <span>2. Mike Sullivan (Fargo 650)</span>
                    <span className="score">7</span>
                  </div>
                  <div className="match-player">
                    <span>7. Chris Pastore (Fargo 520)</span>
                    <span className="score">2</span>
                  </div>
                </div>

                <div className="match-box">
                  <div className="match-box-header">
                    <span>Match 4 &bull; Table 4</span>
                    <span className="badge badge-forfeit" style={{ fontSize: '0.6rem', padding: '1px 4px' }}>FINAL</span>
                  </div>
                  <div className="match-player winner">
                    <span>3. Jason Chen (Fargo 630)</span>
                    <span className="score">7</span>
                  </div>
                  <div className="match-player">
                    <span>6. Tommy Vance (Fargo 540)</span>
                    <span className="score">4</span>
                  </div>
                </div>
              </div>

              {/* COLUMN 2: SEMI-FINALS */}
              <div className="bracket-column">
                <div className="bracket-column-header">Winner's Semi-Finals</div>

                <div className="match-box">
                  <div className="match-box-header">
                    <span>Match 5 &bull; Table 1</span>
                    <span className="badge badge-pending" style={{ fontSize: '0.6rem', padding: '1px 4px' }}>IN PROGRESS</span>
                  </div>
                  <div className="match-player winner">
                    <span>Ray Martin</span>
                    <span className="score">5</span>
                  </div>
                  <div className="match-player">
                    <span>Dave Ramirez</span>
                    <span className="score">4</span>
                  </div>
                </div>

                <div className="match-box">
                  <div className="match-box-header">
                    <span>Match 6 &bull; Table 2</span>
                    <span className="badge badge-pending" style={{ fontSize: '0.6rem', padding: '1px 4px' }}>IN PROGRESS</span>
                  </div>
                  <div className="match-player">
                    <span>Mike Sullivan</span>
                    <span className="score">3</span>
                  </div>
                  <div className="match-player winner">
                    <span>Jason Chen</span>
                    <span className="score">6</span>
                  </div>
                </div>
              </div>

              {/* COLUMN 3: WINNER'S FINALS */}
              <div className="bracket-column">
                <div className="bracket-column-header">Winner's Finals</div>

                <div className="match-box" style={{ marginTop: '60px' }}>
                  <div className="match-box-header">
                    <span>Match 7 &bull; Table 1</span>
                    <span className="badge badge-open" style={{ fontSize: '0.6rem', padding: '1px 4px' }}>ON DECK</span>
                  </div>
                  <div className="match-player">
                    <span>TBD (Winner Match 5)</span>
                    <span className="score">0</span>
                  </div>
                  <div className="match-player">
                    <span>TBD (Winner Match 6)</span>
                    <span className="score">0</span>
                  </div>
                </div>
              </div>

              {/* COLUMN 4: GRAND FINALS */}
              <div className="bracket-column">
                <div className="bracket-column-header">Championship Final</div>

                <div className="match-box" style={{ marginTop: '100px', border: '2px solid #18181b' }}>
                  <div className="match-box-header" style={{ background: '#18181b', color: 'white' }}>
                    <span>GRAND FINALS (Race to 7)</span>
                    <span style={{ color: '#bbf7d0' }}>$500 ADDED</span>
                  </div>
                  <div className="match-player">
                    <span>Winner's Bracket Champion</span>
                    <span className="score">0</span>
                  </div>
                  <div className="match-player">
                    <span>Loser's Bracket Champion</span>
                    <span className="score">0</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <a href="https://digitalpool.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Open Live Bracket in Fullscreen (DigitalPool) &rarr;
            </a>
          </div>
        </div>
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
                <td><strong>Ray "The Razor" Martin</strong> ($900)</td>
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
                <td>Kevin O'Connor ($60)</td>
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
