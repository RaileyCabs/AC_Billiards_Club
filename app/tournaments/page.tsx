'use client';

import TournamentBracket from '@/components/TournamentBracket';
import Reveal from '@/components/Reveal';
import { useAppState } from '@/context/AppStateContext';
import { CLUB } from '@/lib/club';

export default function TournamentsPage() {
  const { tournaments, players, ready } = useAppState();

  return (
    <main>
      <section>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Tournaments</p>
              <h2>What&apos;s on the board</h2>
              <p className="lede">
                Tournament nights are posted by the club. For the current schedule,
                entry, and format, call the room or check the club&apos;s Facebook
                page — that is where changes go up first.
              </p>
            </div>
          </Reveal>

          <div className="button-group" style={{ marginTop: 0, marginBottom: '40px' }}>
            <a href={CLUB.phone.href} className="btn btn-primary">
              Call {CLUB.phone.display}
            </a>
            <a
              href={CLUB.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Facebook updates
            </a>
          </div>

          {!ready ? null : tournaments.length === 0 ? (
            <Reveal>
              <div className="card" style={{ textAlign: 'center', padding: '52px 26px' }}>
                <h3>No events posted right now</h3>
                <p style={{ maxWidth: '46ch', margin: '0 auto' }}>
                  When the club posts a tournament it appears here with entry, format,
                  and the live bracket. In the meantime, the room is open for regular
                  play at {CLUB.rate.display} {CLUB.rate.unit}.
                </p>
              </div>
            </Reveal>
          ) : (
            <div className="grid grid-2">
              {tournaments.map((t, i) => {
                const roster = players.filter((p) => p.tournamentId === t.id);
                const open = Math.max(0, t.maxSpots - t.confirmedCount - t.pendingCount);

                return (
                  <Reveal key={t.id} delay={i * 100}>
                    <article className="card">
                      <span className="badge badge-open">{t.status}</span>
                      <h3 style={{ marginTop: '14px' }}>{t.title}</h3>
                      <p>
                        <strong>{t.dateTime}</strong>
                      </p>

                      <hr className="rule" style={{ margin: '18px 0' }} />

                      <p style={{ marginBottom: '6px' }}>
                        <strong>Entry</strong> ${t.entryFee + t.greenFee}
                        {t.greenFee > 0 && ` (${t.entryFee} + ${t.greenFee} table)`}
                      </p>
                      {t.houseAdded > 0 && (
                        <p style={{ marginBottom: '6px' }}>
                          <strong>Added</strong> ${t.houseAdded}
                        </p>
                      )}
                      <p style={{ marginBottom: '6px' }}>
                        <strong>Game</strong> {t.gameType}
                      </p>
                      <p>
                        <strong>Spots</strong> {t.confirmedCount} paid · {t.pendingCount} pending ·{' '}
                        {open} open
                      </p>

                      {roster.length > 0 && (
                        <>
                          <hr className="rule" style={{ margin: '18px 0' }} />
                          <span className="stat-label">Roster</span>
                          <ul style={{ marginTop: '8px' }}>
                            {roster.map((p) => (
                              <li key={p.id}>
                                {p.name}
                                {p.status !== 'paid' && (
                                  <span style={{ color: 'var(--text-faint)' }}> — {p.status}</span>
                                )}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      <div className="button-group">
                        <a href={CLUB.phone.href} className="btn btn-outline">
                          Call to enter
                        </a>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <div className="section-head">
              <p className="eyebrow">Live bracket</p>
              <h2>Bracket tracker</h2>
              <p className="lede">
                When an event is running, the club updates this board from the
                counter so players can see the draw without crowding the desk.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <TournamentBracket />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <div className="card">
              <h3>Entering an event</h3>
              <p>
                Spots are taken at the counter and by phone. Call{' '}
                <a href={CLUB.phone.href} style={{ borderBottom: '1px solid var(--line-strong)' }}>
                  {CLUB.phone.display}
                </a>{' '}
                to ask about the next tournament, entry, and what time to be there.
              </p>
              <p style={{ marginBottom: 0, fontSize: '0.86rem', color: 'var(--text-faint)' }}>
                There is no online entry form on this site — the club takes entries
                directly so nobody&apos;s spot depends on a form nobody is watching.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
