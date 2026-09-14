'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAppState } from '@/context/AppStateContext';

export default function AdminPage() {
  const { 
    banner, 
    updateBanner, 
    tournaments,
    players, 
    markPlayerPaid, 
    forfeitPlayerSpot, 
    addTournament 
  } = useAppState();

  const [selectedTournamentId, setSelectedTournamentId] = useState<string>('t-1');
  const [filter, setFilter] = useState<'all' | 'paid' | 'pending' | 'forfeited'>('all');
  const [localBannerActive, setLocalBannerActive] = useState(banner.active);
  const [localBannerText, setLocalBannerText] = useState(banner.text);

  // New Tournament form state
  const [newTitle, setNewTitle] = useState('');
  const [newDateTime, setNewDateTime] = useState('');
  const [newGameType, setNewGameType] = useState('9-ball');
  const [newEntryFee, setNewEntryFee] = useState('20');
  const [newHouseAdded, setNewHouseAdded] = useState('500');

  // Filter players by selected tournament
  const tournamentPlayers = players.filter(p => selectedTournamentId === 'all' || p.tournamentId === selectedTournamentId);

  // Counts for selected tournament
  const paidCount = tournamentPlayers.filter(p => p.status === 'paid').length + (selectedTournamentId === 't-1' ? 16 : 0);
  const pendingCount = tournamentPlayers.filter(p => p.status === 'pending').length;
  const forfeitedCount = tournamentPlayers.filter(p => p.status === 'forfeited').length;
  const totalPlayers = paidCount + pendingCount;
  const cashCollected = paidCount * 25;

  const handlePublishTournament = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    addTournament({
      title: newTitle,
      dateTime: newDateTime || 'Upcoming Event',
      gameType: newGameType,
      entryFee: parseFloat(newEntryFee) || 20,
      greenFee: 5,
      houseAdded: parseFloat(newHouseAdded) || 0,
      maxSpots: 32,
    });

    alert(`Published "${newTitle}"! It is now live on the public Tournaments page.`);
    setNewTitle('');
    setNewDateTime('');
  };

  const handleSaveBanner = (e: React.FormEvent) => {
    e.preventDefault();
    updateBanner(localBannerActive, localBannerText);
    alert('Announcement Banner Updated Live Across The Entire Website!');
  };

  const filteredPlayers = tournamentPlayers.filter(p => {
    if (filter === 'all') return true;
    return p.status === filter;
  });

  return (
    <div>
      {/* Top Protected Header */}
      <div className="admin-top-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ backgroundColor: '#dc2626', color: '#ffffff', fontSize: '0.7rem', padding: '3px 8px', borderRadius: '4px', fontWeight: 700, letterSpacing: '0.05em' }}>
            PRIVATE OWNER PORTAL
          </span>
          <h2 style={{ fontSize: '1.1rem', color: '#ffffff', margin: 0 }}>Atlantic City Billiard Club Dashboard</h2>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: '#a1a1aa' }}>Logged in as: <strong>Owner (Phone Session)</strong></span>
          <Link href="/" className="btn btn-outline" style={{ fontSize: '0.75rem', padding: '4px 10px', color: '#ffffff', borderColor: '#4b5563' }}>
            View Public Site
          </Link>
        </div>
      </div>

      <main>
        {/* OVERVIEW STATS */}
        <section id="admin-overview">
          <h2>Owner Overview &amp; Quick Actions</h2>

          <div className="grid-3">
            <div className="card" style={{ borderLeft: '4px solid #0f172a' }}>
              <h3>Next Event Roster</h3>
              <p style={{ fontSize: '1.6rem', fontWeight: 800, margin: '4px 0', color: 'var(--text-primary)' }}>
                {totalPlayers} / 32 Players
              </p>
              <p style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="badge badge-paid">{paidCount} Paid</span> 
                <span className="badge badge-pending">{pendingCount} Pending</span>
                {forfeitedCount > 0 && <span className="badge badge-forfeit">{forfeitedCount} Forfeited</span>}
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                Event: $500 Added 9-Ball Open (Sept 26)
              </p>
            </div>

            <div className="card" style={{ borderLeft: '4px solid #0284c7' }}>
              <h3>Total Entry Cash Collected</h3>
              <p style={{ fontSize: '1.6rem', fontWeight: 800, margin: '4px 0', color: 'var(--text-primary)' }}>
                ${cashCollected}.00
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                ${paidCount * 20}.00 Prize Pool + ${paidCount * 5}.00 Green Fees
              </p>
            </div>

            <div className="card" style={{ borderLeft: '4px solid #f59e0b' }}>
              <h3>Announcement Banner</h3>
              <p><span className={`badge ${banner.active ? 'badge-paid' : 'badge-forfeit'}`}>{banner.active ? 'ACTIVE ON SITE' : 'DISABLED'}</span></p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '6px' }}>"{banner.text.substring(0, 38)}..."</p>
            </div>
          </div>
        </section>

        {/* LIVE ROSTER MANAGER */}
        <section id="admin-roster-manager">
          <h2>Live Roster &amp; Payment Manager</h2>
          <p>Select a specific tournament event to view and manage its live player roster, record cash/Venmo payments, and handle check-ins.</p>

          {/* TOURNAMENT SELECTOR DROPDOWN FOR OWNER */}
          <div style={{ backgroundColor: 'var(--bg-card-hover)', border: '1px solid var(--border-card)', padding: '16px 20px', borderRadius: 'var(--radius-md)', marginBottom: '20px' }}>
            <label htmlFor="admin-tournament-select" style={{ fontWeight: 700, fontSize: '0.9rem', display: 'block', marginBottom: '8px', color: 'var(--text-primary)' }}>
              🏆 Select Tournament Event to Manage Roster:
            </label>
            <select
              id="admin-tournament-select"
              value={selectedTournamentId}
              onChange={(e) => setSelectedTournamentId(e.target.value)}
              style={{ width: '100%', maxWidth: '520px', fontSize: '0.9rem', padding: '10px 14px', margin: 0 }}
            >
              <option value="all">⚡ All Tournaments (Combined Active Rosters)</option>
              {tournaments.map(t => (
                <option key={t.id} value={t.id}>
                  {t.title} ({t.dateTime})
                </option>
              ))}
            </select>
          </div>

          <div className="card">
            <div className="card-header">
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <button 
                  className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setFilter('all')}
                >
                  All Players ({totalPlayers})
                </button>
                <button 
                  className={`btn ${filter === 'paid' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setFilter('paid')}
                >
                  Paid ({paidCount})
                </button>
                <button 
                  className={`btn ${filter === 'pending' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setFilter('pending')}
                >
                  Pending Payment ({pendingCount})
                </button>
                <button 
                  className={`btn ${filter === 'forfeited' ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => setFilter('forfeited')}
                >
                  Forfeited ({forfeitedCount})
                </button>
              </div>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
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
                  {filteredPlayers.map((player) => (
                    <tr 
                      key={player.id}
                      className={player.status === 'pending' ? 'row-pending' : ''}
                    >
                      <td>{player.id}</td>
                      <td><strong>{player.name}</strong></td>
                      <td>{player.phone}</td>
                      <td>{player.rating}</td>
                      <td>
                        {player.status === 'paid' && <span className="badge badge-paid">🟢 PAID</span>}
                        {player.status === 'pending' && <span className="badge badge-pending">🟡 PENDING</span>}
                        {player.status === 'forfeited' && <span className="badge badge-forfeit">🔴 FORFEITED</span>}
                      </td>
                      <td>{player.status === 'pending' ? <em>{player.method}</em> : player.method}</td>
                      <td>{player.registeredAt}</td>
                      <td>
                        {player.status === 'pending' ? (
                          <div className="admin-action-cell">
                            <select id={`payment-select-${player.id}`} defaultValue="Cash ($25.00)">
                              <option value="Cash ($25.00)">Cash ($25)</option>
                              <option value="Venmo Advance">Venmo</option>
                              <option value="Zelle Advance">Zelle</option>
                              <option value="Card at Counter">Card</option>
                            </select>
                            <button 
                              className="btn btn-primary" 
                              style={{ background: '#0f172a', color: '#ffffff', padding: '4px 10px', fontSize: '0.75rem' }} 
                              onClick={() => {
                                const selectEl = document.getElementById(`payment-select-${player.id}`) as HTMLSelectElement;
                                markPlayerPaid(player.id, selectEl ? selectEl.value : 'Cash ($25.00)');
                              }}
                            >
                              Mark Paid
                            </button>
                            <button 
                              className="btn btn-outline" 
                              style={{ color: '#ef4444', borderColor: 'rgba(239,68,68,0.4)', padding: '4px 8px', fontSize: '0.75rem' }} 
                              onClick={() => forfeitPlayerSpot(player.id)}
                            >
                              Forfeit Spot
                            </button>
                          </div>
                        ) : (
                          <button className="btn btn-outline" style={{ fontSize: '0.75rem', padding: '3px 8px' }} onClick={() => alert(`Editing record for ${player.name}`)}>
                            Edit Record
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                  {filteredPlayers.length === 0 && (
                    <tr>
                      <td colSpan={8} style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)' }}>
                        No players found matching filter "{filter}".
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CREATE TOURNAMENT FORM */}
        <section id="admin-create-event">
          <h2>Create &amp; Publish New Tournament</h2>
          
          <div className="card">
            <form onSubmit={handlePublishTournament}>
              <div className="grid-2">
                <div>
                  <label htmlFor="event_title">Tournament Title *</label>
                  <input 
                    type="text" 
                    id="event_title" 
                    name="event_title" 
                    required 
                    placeholder="e.g. $1,000 Added Fall 9-Ball Classic" 
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="event_date_time">Date &amp; Start Time *</label>
                  <input 
                    type="text" 
                    id="event_date_time" 
                    name="event_date_time" 
                    required
                    placeholder="e.g. Saturday, October 10, 2026 | 1:00 PM"
                    value={newDateTime}
                    onChange={(e) => setNewDateTime(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid-3" style={{ marginTop: '16px' }}>
                <div>
                  <label htmlFor="game_type">Game Format</label>
                  <select 
                    id="game_type" 
                    name="game_type"
                    value={newGameType}
                    onChange={(e) => setNewGameType(e.target.value)}
                  >
                    <option value="9-ball">9-Ball</option>
                    <option value="8-ball">8-Ball</option>
                    <option value="10-ball">10-Ball</option>
                    <option value="one-pocket">One-Pocket</option>
                    <option value="snooker">Snooker</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="entry_fee">Entry Fee ($) *</label>
                  <input 
                    type="number" 
                    id="entry_fee" 
                    name="entry_fee" 
                    required 
                    placeholder="20.00" 
                    value={newEntryFee}
                    onChange={(e) => setNewEntryFee(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="house_added">House Added Money ($)</label>
                  <input 
                    type="number" 
                    id="house_added" 
                    name="house_added" 
                    placeholder="500.00" 
                    value={newHouseAdded}
                    onChange={(e) => setNewHouseAdded(e.target.value)}
                  />
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
            <form onSubmit={handleSaveBanner}>
              <div style={{ marginBottom: '16px' }}>
                <label htmlFor="banner_status">Banner Active Status</label><br />
                <select 
                  id="banner_status"
                  style={{ maxWidth: '250px' }}
                  value={localBannerActive ? 'active' : 'disabled'}
                  onChange={(e) => setLocalBannerActive(e.target.value === 'active')}
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
                  value={localBannerText}
                  onChange={(e) => setLocalBannerText(e.target.value)}
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
