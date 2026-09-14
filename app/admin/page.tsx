'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAppState } from '@/context/AppStateContext';

const PIN = '1976';
const PIN_KEY = 'ac_billiards_admin';

/**
 * A client-side gate, and deliberately nothing more.
 *
 * Every value this portal edits lives in this browser's localStorage and never
 * reaches a server, so there is no shared data behind this screen to protect —
 * the PIN only stops a curious visitor from poking at the controls. If the club
 * ever wants the board shared across devices, this needs a real backend and a
 * real login.
 */
export default function AdminPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [entry, setEntry] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(PIN_KEY) === 'ok') setUnlocked(true);
    } catch {
      // Storage unavailable: the owner just re-enters the PIN.
    }
  }, []);

  if (!unlocked) {
    return (
      <main>
        <section>
          <div className="container" style={{ maxWidth: '420px' }}>
            <p className="eyebrow">Owner portal</p>
            <h2>Enter PIN</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (entry === PIN) {
                  setUnlocked(true);
                  try {
                    sessionStorage.setItem(PIN_KEY, 'ok');
                  } catch {
                    // Non-fatal.
                  }
                } else {
                  setError(true);
                  setEntry('');
                }
              }}
            >
              <label htmlFor="pin">Passcode</label>
              <input
                id="pin"
                type="password"
                inputMode="numeric"
                autoComplete="off"
                value={entry}
                onChange={(e) => {
                  setEntry(e.target.value);
                  setError(false);
                }}
              />
              {error && (
                <p style={{ color: 'var(--text)', fontSize: '0.85rem', marginTop: '10px' }}>
                  Incorrect PIN.
                </p>
              )}
              <div className="button-group">
                <button type="submit" className="btn btn-primary">
                  Unlock
                </button>
                <Link href="/" className="btn btn-outline">
                  Back to site
                </Link>
              </div>
            </form>
          </div>
        </section>
      </main>
    );
  }

  return <Dashboard />;
}

function Dashboard() {
  const {
    banner,
    updateBanner,
    tournaments,
    players,
    markPlayerPaid,
    forfeitPlayerSpot,
    addTournament,
    removeTournament,
    addPlayer,
  } = useAppState();

  const [bannerOn, setBannerOn] = useState(banner.active);
  const [bannerText, setBannerText] = useState(banner.text);

  const [title, setTitle] = useState('');
  const [when, setWhen] = useState('');
  const [game, setGame] = useState('9-ball');
  const [entryFee, setEntryFee] = useState('');
  const [greenFee, setGreenFee] = useState('');
  const [added, setAdded] = useState('');
  const [spots, setSpots] = useState('16');

  const [target, setTarget] = useState('');
  const [pName, setPName] = useState('');
  const [pPhone, setPPhone] = useState('');
  const [pRating, setPRating] = useState('');

  const active = tournaments.find((t) => t.id === target) ?? tournaments[0];

  return (
    <main>
      <section>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '36px',
            }}
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>
                Owner portal
              </p>
              <h2 style={{ marginBottom: 0 }}>Dashboard</h2>
            </div>
            <Link href="/" className="btn btn-outline">
              View public site
            </Link>
          </div>

          <div
            className="card"
            style={{ marginBottom: '32px', borderStyle: 'dashed' }}
          >
            <p style={{ marginBottom: 0, fontSize: '0.88rem' }}>
              <strong>This board is saved on this device only.</strong> What you
              enter here shows on the public pages of this browser and survives a
              refresh, but it does not sync to phones, other computers, or
              visitors. Sharing it needs a backend — see the project README.
            </p>
          </div>

          {/* ------------------------------------------------ banner --- */}
          <h3>Site notice</h3>
          <form
            className="card"
            style={{ marginBottom: '40px' }}
            onSubmit={(e) => {
              e.preventDefault();
              updateBanner(bannerOn, bannerText);
            }}
          >
            <label htmlFor="banner-text">Message</label>
            <input
              id="banner-text"
              value={bannerText}
              onChange={(e) => setBannerText(e.target.value)}
              placeholder="e.g. Closing at 10 PM this Thursday"
            />
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginTop: '16px',
                textTransform: 'none',
                letterSpacing: 0,
                fontSize: '0.9rem',
                color: 'var(--text)',
              }}
            >
              <input
                type="checkbox"
                checked={bannerOn}
                onChange={(e) => setBannerOn(e.target.checked)}
                style={{ width: 'auto' }}
              />
              Show this notice at the top of every page
            </label>
            <div className="button-group">
              <button type="submit" className="btn btn-primary">
                Save notice
              </button>
            </div>
          </form>

          {/* -------------------------------------------- tournament --- */}
          <h3>Post a tournament</h3>
          <form
            className="card"
            style={{ marginBottom: '40px' }}
            onSubmit={(e) => {
              e.preventDefault();
              if (!title.trim()) return;
              addTournament({
                title: title.trim(),
                dateTime: when.trim() || 'Date to be announced',
                gameType: game,
                entryFee: parseFloat(entryFee) || 0,
                greenFee: parseFloat(greenFee) || 0,
                houseAdded: parseFloat(added) || 0,
                maxSpots: parseInt(spots, 10) || 16,
              });
              setTitle('');
              setWhen('');
              setEntryFee('');
              setGreenFee('');
              setAdded('');
            }}
          >
            <div className="grid grid-2">
              <div>
                <label htmlFor="t-title">Title</label>
                <input
                  id="t-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Friday 8-Ball"
                  required
                />
              </div>
              <div>
                <label htmlFor="t-when">Date &amp; time</label>
                <input
                  id="t-when"
                  value={when}
                  onChange={(e) => setWhen(e.target.value)}
                  placeholder="e.g. Friday, check-in 6:30 PM"
                />
              </div>
              <div>
                <label htmlFor="t-game">Game</label>
                <select id="t-game" value={game} onChange={(e) => setGame(e.target.value)}>
                  <option value="8-ball">8-ball</option>
                  <option value="9-ball">9-ball</option>
                  <option value="10-ball">10-ball</option>
                  <option value="snooker">Snooker</option>
                  <option value="three-cushion">Three-cushion</option>
                </select>
              </div>
              <div>
                <label htmlFor="t-spots">Max spots</label>
                <input
                  id="t-spots"
                  type="number"
                  min="2"
                  value={spots}
                  onChange={(e) => setSpots(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="t-entry">Entry ($)</label>
                <input
                  id="t-entry"
                  type="number"
                  min="0"
                  value={entryFee}
                  onChange={(e) => setEntryFee(e.target.value)}
                  placeholder="0"
                />
              </div>
              <div>
                <label htmlFor="t-green">Table fee ($)</label>
                <input
                  id="t-green"
                  type="number"
                  min="0"
                  value={greenFee}
                  onChange={(e) => setGreenFee(e.target.value)}
                  placeholder="0"
                />
              </div>
              <div>
                <label htmlFor="t-added">House added ($)</label>
                <input
                  id="t-added"
                  type="number"
                  min="0"
                  value={added}
                  onChange={(e) => setAdded(e.target.value)}
                  placeholder="0"
                />
              </div>
            </div>

            <div className="button-group">
              <button type="submit" className="btn btn-primary">
                Post to site
              </button>
            </div>
          </form>

          {/* ------------------------------------------------ roster --- */}
          <h3>Roster</h3>

          {tournaments.length === 0 ? (
            <div className="card">
              <p style={{ marginBottom: 0 }}>
                Post a tournament first, then add the players who enter at the counter.
              </p>
            </div>
          ) : (
            <>
              <div className="card" style={{ marginBottom: '20px' }}>
                <label htmlFor="r-target">Tournament</label>
                <select
                  id="r-target"
                  value={active?.id ?? ''}
                  onChange={(e) => setTarget(e.target.value)}
                >
                  {tournaments.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.title}
                    </option>
                  ))}
                </select>

                <div className="grid grid-3" style={{ marginTop: '18px' }}>
                  <div>
                    <label htmlFor="r-name">Player name</label>
                    <input id="r-name" value={pName} onChange={(e) => setPName(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="r-phone">Phone</label>
                    <input id="r-phone" value={pPhone} onChange={(e) => setPPhone(e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="r-rating">Rating</label>
                    <input
                      id="r-rating"
                      value={pRating}
                      onChange={(e) => setPRating(e.target.value)}
                      placeholder="optional"
                    />
                  </div>
                </div>

                <div className="button-group">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      if (!pName.trim() || !active) return;
                      addPlayer({
                        name: pName.trim(),
                        phone: pPhone.trim(),
                        rating: pRating.trim(),
                        method: 'Unpaid',
                        tournamentId: active.id,
                      });
                      setPName('');
                      setPPhone('');
                      setPRating('');
                    }}
                  >
                    Add player
                  </button>
                </div>
              </div>

              {active && (
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>Player</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Added</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {players.filter((p) => p.tournamentId === active.id).length === 0 ? (
                        <tr>
                          <td colSpan={5} style={{ color: 'var(--text-faint)' }}>
                            No players entered yet.
                          </td>
                        </tr>
                      ) : (
                        players
                          .filter((p) => p.tournamentId === active.id)
                          .map((p) => (
                            <tr key={p.id}>
                              <td>
                                <strong>{p.name}</strong>
                                {p.rating && p.rating !== 'Unrated' && (
                                  <span style={{ color: 'var(--text-faint)' }}> · {p.rating}</span>
                                )}
                              </td>
                              <td>{p.phone || '—'}</td>
                              <td>
                                <span className="badge">{p.status}</span>
                              </td>
                              <td style={{ color: 'var(--text-faint)' }}>{p.registeredAt}</td>
                              <td>
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                  {p.status !== 'paid' && (
                                    <button
                                      type="button"
                                      className="btn btn-outline"
                                      style={{ padding: '5px 11px', fontSize: '0.7rem' }}
                                      onClick={() => markPlayerPaid(p.id, 'Paid')}
                                    >
                                      Mark paid
                                    </button>
                                  )}
                                  {p.status !== 'forfeited' && (
                                    <button
                                      type="button"
                                      className="btn btn-outline"
                                      style={{ padding: '5px 11px', fontSize: '0.7rem' }}
                                      onClick={() => forfeitPlayerSpot(p.id)}
                                    >
                                      Forfeit
                                    </button>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}

          {/* ------------------------------------------------ posted --- */}
          {tournaments.length > 0 && (
            <>
              <h3 style={{ marginTop: '40px' }}>Posted events</h3>
              <div className="grid grid-2">
                {tournaments.map((t) => (
                  <div className="card" key={t.id}>
                    <h3>{t.title}</h3>
                    <p style={{ marginBottom: '10px' }}>{t.dateTime}</p>
                    <p style={{ fontSize: '0.86rem' }}>
                      {t.confirmedCount} paid · {t.pendingCount} pending · {t.maxSpots} spots
                    </p>
                    <div className="button-group" style={{ marginTop: '12px' }}>
                      <button
                        type="button"
                        className="btn btn-outline"
                        onClick={() => removeTournament(t.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
