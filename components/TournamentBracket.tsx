'use client';

import { useMemo, useState } from 'react';
import { useAppState } from '@/context/AppStateContext';
import type { PlayerRecord, Tournament } from '@/context/AppStateContext';

interface Seat {
  name: string | null;
  bye: boolean;
}

interface Match {
  a: Seat;
  b: Seat;
}

/**
 * Builds a single-elimination draw from the entered roster.
 *
 * Round one is padded with byes up to the next power of two; later rounds are
 * rendered as empty slots, because who advances is decided at the table and
 * entered by the club, not guessed here.
 */
function buildRounds(names: string[]): Match[][] {
  if (names.length < 2) return [];

  let size = 1;
  while (size < names.length) size *= 2;

  const seats: Seat[] = Array.from({ length: size }, (_, i) =>
    i < names.length ? { name: names[i], bye: false } : { name: null, bye: true }
  );

  const rounds: Match[][] = [];
  let count = size;
  let first = true;

  while (count >= 2) {
    const round: Match[] = [];
    for (let i = 0; i < count; i += 2) {
      round.push(
        first
          ? { a: seats[i], b: seats[i + 1] }
          : { a: { name: null, bye: false }, b: { name: null, bye: false } }
      );
    }
    rounds.push(round);
    count /= 2;
    first = false;
  }

  return rounds;
}

function roundLabel(index: number, total: number): string {
  const fromEnd = total - index;
  if (fromEnd === 1) return 'Final';
  if (fromEnd === 2) return 'Semi-finals';
  if (fromEnd === 3) return 'Quarter-finals';
  return `Round ${index + 1}`;
}

export default function TournamentBracket() {
  const { tournaments, players, ready } = useAppState();
  const [selected, setSelected] = useState<string>('');

  const active: Tournament | undefined =
    tournaments.find((t) => t.id === selected) ?? tournaments[0];

  const roster: PlayerRecord[] = useMemo(
    () =>
      active
        ? players.filter((p) => p.tournamentId === active.id && p.status !== 'forfeited')
        : [],
    [active, players]
  );

  const rounds = useMemo(() => buildRounds(roster.map((p) => p.name)), [roster]);

  if (!ready) return null;

  if (!active || rounds.length === 0) {
    return (
      <div className="card" style={{ textAlign: 'center', padding: '52px 26px' }}>
        <h3>No bracket running</h3>
        <p style={{ maxWidth: '44ch', margin: '0 auto 0' }}>
          A draw appears here once the club posts an event and enters the players
          at the counter.
        </p>
      </div>
    );
  }

  return (
    <div className="card" style={{ padding: '24px', overflow: 'hidden' }}>
      <div className="bracket-head">
        <div>
          <h3 style={{ marginBottom: '2px' }}>{active.title}</h3>
          <p style={{ margin: 0, fontSize: '0.86rem' }}>
            {roster.length} {roster.length === 1 ? 'player' : 'players'} · single elimination
          </p>
        </div>

        {tournaments.length > 1 && (
          <select
            aria-label="Choose tournament"
            value={active.id}
            onChange={(e) => setSelected(e.target.value)}
            style={{ maxWidth: '260px' }}
          >
            {tournaments.map((t) => (
              <option key={t.id} value={t.id}>
                {t.title}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="bracket-scroll">
        <div className="bracket">
          {rounds.map((round, r) => (
            <div className="bracket-round" key={r}>
              <div className="bracket-round-head">{roundLabel(r, rounds.length)}</div>

              <div className="bracket-matches">
                {round.map((m, i) => (
                  <div className="match" key={i}>
                    {[m.a, m.b].map((seat, k) => (
                      <div
                        key={k}
                        className={`match-seat${seat.bye ? ' is-bye' : ''}${
                          seat.name ? '' : ' is-empty'
                        }`}
                      >
                        <span>{seat.name ?? (seat.bye ? 'Bye' : '—')}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
