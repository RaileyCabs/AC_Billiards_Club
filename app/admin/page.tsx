'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function AdminPage() {
  const [filter, setFilter] = useState<'all' | 'paid' | 'pending' | 'forfeited'>('all');
  const [bannerActive, setBannerActive] = useState(true);
  const [bannerText, setBannerText] = useState('Open late this week for US Open Pool Championship players! Check tournament schedule for cash payouts.');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f4f5' }}>
      {/* Top Protected Header */}
      <div style={{ backgroundColor: '#09090b', color: '#ffffff', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ backgroundColor: '#dc2626', color: 'white', fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', fontWeight: 700, letterSpacing: '0.05em' }}>
            PRIVATE OWNER PORTAL
          </span>
          <h2 style={{ fontSize: '1.1rem', color: 'white', margin: 0 }}>Atlantic City Billiard Club Dashboard</h2>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: '#a1a1aa' }}>Logged in as: <strong>Owner (Phone Session)</strong></span>
          <Link href="/" className="btn btn-outline" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
            View Public Site
          </Link>
        </div>
      </div>

      <main style={{ maxWidth: '1140px', margin: '0 auto', padding: '32px 16px 64px 16px' }}>

        {/* OVERVIEW STATS */}
        <section id="admin-overview">
          <h2>Owner Overview &amp; Quick Actions</h2>

          <div className="grid-3">
            <div className="card" style={{ borderLeft: '4px solid #166534' }}>
              <h3>Next Event Roster</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, margin: '4px 0' }}>22 / 32 Players</p>
              <p><span className="badge badge-paid">18 Paid</span> <span className="badge badge-pending">4 Pending</span></p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Event: $500 Added 9-Ball Open (Sept 26)</p>
            </div>

            <div className="card" style={{ borderLeft: '4px solid #0284c7' }}>
              <h3>Total Entry Cash Collected</h3>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, margin: '4px 0' }}>$450.00</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>$360 Prize Pool + $90 Green Fees</p>
            </div>

            <div className="card" style={{ borderLeft: '4px solid #d97706' }}>
              <h3>Announcement Banner</h3>
              <p><span className="badge badge-paid">{bannerActive ? 'ACTIVE ON SITE' : 'DISABLED'}</span></p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>"{bannerText.substring(0, 35)}..."</p>
            </div>
          </div>
        </section>

        {/* LIVE ROSTER MANAGER */}
        <section id="admin-roster-manager">
          <h2>Live Roster &amp; Payment Manager</h2>
          <p>Manage player registrations, mark cash/Venmo payments, and forfeit unpaid spots before cutoff time.</p>

          <div className="card">
            <div className="card-header">
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button 
                  className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setFilter('all')}
                >
                  All Players (22)
                </button>
                <button 
                  className={`btn ${filter === 'paid' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setFilter('paid')}
                >
                  Paid (18)
                </button>
                <button 
                  className={`btn ${filter === 'pending' ? 'btn-primary' : 'btn-outline'}`}
                  style={filter !== 'pending' ? { borderColor: '#fef08a', background: '#fefce8' } : {}}
                  onClick={() => setFilter('pending')}
                >
                  Pending Payment (4)
                </button>
                <button 
                  className={`btn ${filter === 'forfeited' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setFilter('forfeited')}
                >
                  Forfeited (0)
                </button>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn btn-outline" onClick={() => alert('Downloading Roster CSV...')}>
                  📊 Download CSV
                </button>
                <button className="btn btn-outline" onClick={() => alert('Opening Printable PDF Check-in Sheet...')}>
                  🖨️ Print Score Sheet (PDF)
                </button>
              </div>
            </div>

            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Player Name</th>
                    <th>Phone</th>
                    <th>Rating</th>
                    <th>Payment Status</th>
                    <th>Payment Method</th>
                    <th>Registered At</th>
                    <th>One-Tap Actions</th>
                  </tr>
                </thead>
                <tbody>

                  <tr>
                    <td>1</td>
                    <td><strong>Ray "The Razor" Martin</strong></td>
                    <td>(609) 555-0111</td>
                    <td>Fargo 680</td>
                    <td><span className="badge badge-paid">🟢 PAID</span></td>
                    <td>Cash ($25.00)</td>
                    <td>Sept 14, 10:15 AM</td>
                    <td>
                      <button className="btn btn-outline" style={{ fontSize: '0.75rem', padding: '3px 8px' }} onClick={() => alert('Editing player record')}>
                        Edit
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>2</td>
                    <td><strong>Mike Sullivan</strong></td>
                    <td>(609) 555-0122</td>
                    <td>Fargo 650</td>
                    <td><span className="badge badge-paid">🟢 PAID</span></td>
                    <td>Venmo (@MikeS-Pool)</td>
                    <td>Sept 14, 11:30 AM</td>
                    <td>
                      <button className="btn btn-outline" style={{ fontSize: '0.75rem', padding: '3px 8px' }} onClick={() => alert('Editing player record')}>
                        Edit
                      </button>
                    </td>
                  </tr>

                  <tr style={{ backgroundColor: '#fffde7' }}>
                    <td>3</td>
                    <td><strong>Johnny McDermott</strong></td>
                    <td>(609) 555-0123</td>
                    <td>Fargo 520</td>
                    <td><span className="badge badge-pending">🟡 PENDING PAYMENT</span></td>
                    <td><em>Unpaid (At Counter)</em></td>
                    <td>Sept 14, 01:05 PM</td>
                    <td>
                      <div className="admin-action-cell">
                        <select defaultValue="cash">
                          <option value="cash">Cash ($25)</option>
                          <option value="venmo">Venmo</option>
                          <option value="zelle">Zelle</option>
                          <option value="card">Card</option>
                        </select>
                        <button className="btn btn-primary" style={{ background: '#166534' }} onClick={() => alert('Johnny McDermott marked PAID!')}>
                          Mark Paid
                        </button>
                        <button className="btn btn-outline" style={{ color: '#991b1b', borderColor: '#fecaca' }} onClick={() => alert('Spot forfeited!')}>
                          Forfeit Spot
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr style={{ backgroundColor: '#fffde7' }}>
                    <td>4</td>
                    <td><strong>Chris Pastore</strong></td>
                    <td>(609) 555-0144</td>
                    <td>Fargo 520</td>
                    <td><span className="badge badge-pending">🟡 PENDING PAYMENT</span></td>
                    <td><em>Unpaid (Zelle)</em></td>
                    <td>Sept 14, 01:20 PM</td>
                    <td>
                      <div className="admin-action-cell">
                        <select defaultValue="zelle">
                          <option value="zelle">Zelle ($25)</option>
                          <option value="cash">Cash</option>
                          <option value="venmo">Venmo</option>
                        </select>
                        <button className="btn btn-primary" style={{ background: '#166534' }} onClick={() => alert('Chris Pastore marked PAID!')}>
                          Mark Paid
                        </button>
                        <button className="btn btn-outline" style={{ color: '#991b1b', borderColor: '#fecaca' }} onClick={() => alert('Spot forfeited!')}>
                          Forfeit Spot
                        </button>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CREATE TOURNAMENT FORM */}
        <section id="admin-create-event">
          <h2>Create &amp; Publish New Tournament</h2>
          
          <div className="card">
            <form onSubmit={(e) => { e.preventDefault(); alert('Tournament published successfully to public site!'); }}>
              <div className="grid-2">
                <div>
                  <label htmlFor="event_title">Tournament Title *</label>
                  <input type="text" id="event_title" name="event_title" required placeholder="e.g. $1,000 Added Fall 9-Ball Classic" />
                </div>

                <div>
                  <label htmlFor="event_date_time">Date &amp; Start Time *</label>
                  <input type="datetime-local" id="event_date_time" name="event_date_time" required />
                </div>
              </div>

              <div className="grid-3" style={{ marginTop: '16px' }}>
                <div>
                  <label htmlFor="game_type">Game Format</label>
                  <select id="game_type" name="game_type">
                    <option value="9-ball">9-Ball</option>
                    <option value="8-ball">8-Ball</option>
                    <option value="10-ball">10-Ball</option>
                    <option value="one-pocket">One-Pocket</option>
                    <option value="snooker">Snooker</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="entry_fee">Entry Fee ($) *</label>
                  <input type="number" id="entry_fee" name="entry_fee" required placeholder="25.00" />
                </div>

                <div>
                  <label htmlFor="house_added">House Added Money ($)</label>
                  <input type="number" id="house_added" name="house_added" placeholder="500.00" />
                </div>
              </div>

              <div style={{ marginTop: '16px' }}>
                <label htmlFor="flyer_photo">Upload Tournament Flyer Photo (Camera / Gallery)</label>
                <input type="file" id="flyer_photo" name="flyer_photo" accept="image/*" />
              </div>

              <div style={{ marginTop: '20px' }}>
                <button type="submit" className="btn btn-primary">
                  Publish Tournament &amp; Open Registration
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* BANNER MANAGER */}
        <section id="admin-banner-manager">
          <h2>Announcement Alert Banner Manager</h2>
          <div className="card">
            <form onSubmit={(e) => { e.preventDefault(); alert('Announcement Banner Updated!'); }}>
              <div style={{ marginBottom: '16px' }}>
                <label>Banner Active Status</label><br />
                <select 
                  style={{ maxWidth: '250px' }}
                  value={bannerActive ? 'active' : 'disabled'}
                  onChange={(e) => setBannerActive(e.target.value === 'active')}
                >
                  <option value="active">Active (Visible on Header)</option>
                  <option value="disabled">Disabled (Hidden)</option>
                </select>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label htmlFor="banner_text">Banner Notice Text Message</label>
                <input 
                  type="text" 
                  id="banner_text" 
                  value={bannerText}
                  onChange={(e) => setBannerText(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Save Announcement Banner
              </button>
            </form>
          </div>
        </section>

      </main>
    </div>
  );
}
