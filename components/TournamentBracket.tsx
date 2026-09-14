'use client';

import { useState } from 'react';

export default function TournamentBracket() {
  const [activeTab, setActiveTab] = useState<'winners' | 'losers'>('winners');

  return (
    <div className="card" style={{ padding: '20px', overflow: 'hidden' }}>
      {/* Header & Tabs */}
      <div className="card-header" style={{ marginBottom: '16px' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '4px', color: 'var(--text-primary)' }}>
            Official Live Tournament Bracket Engine
          </h3>
          <p style={{ margin: 0, fontSize: '0.825rem', color: 'var(--text-muted)' }}>
            $500 Added 9-Ball Open &bull; Double Elimination &bull; Real-Time Table Calls
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '8px' }}>
          <button 
            className={`btn ${activeTab === 'winners' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('winners')}
            style={{ fontSize: '0.775rem', padding: '5px 12px' }}
          >
            Winner&apos;s Bracket
          </button>
          <button 
            className={`btn ${activeTab === 'losers' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('losers')}
            style={{ fontSize: '0.775rem', padding: '5px 12px' }}
          >
            Loser&apos;s Bracket
          </button>
        </div>
      </div>

      {activeTab === 'winners' ? (
        /* RESPONSIVE WINNER'S BRACKET (FITS SCREEN WITHOUT HORIZONTAL SCROLLBAR) */
        <div style={{ width: '100%', overflow: 'hidden', padding: '6px 0' }}>
          <div style={{ display: 'flex', width: '100%', alignItems: 'center', gap: '2px' }}>
            
            {/* COLUMN 1: QUARTER FINALS */}
            <div style={{ flex: '1 1 0%', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div className="bracket-column-header" style={{ fontSize: '0.7rem', padding: '4px 6px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Quarter-Finals (Race 7)
              </div>

              {/* Match 1 */}
              <div className="match-box" style={{ margin: 0, padding: '4px' }}>
                <div className="match-box-header" style={{ fontSize: '0.65rem', padding: '2px 4px' }}>
                  <span>Match 1 &bull; T1</span>
                  <span className="badge badge-paid" style={{ fontSize: '0.55rem', padding: '1px 3px' }}>FINAL</span>
                </div>
                <div className="match-player winner" style={{ fontSize: '0.75rem', padding: '4px' }}>
                  <span style={{ fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>1. Ray Martin</span>
                  <span className="score">7</span>
                </div>
                <div className="match-player" style={{ fontSize: '0.75rem', padding: '4px', opacity: 0.65 }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>8. K. O&apos;Connor</span>
                  <span className="score">3</span>
                </div>
              </div>

              {/* Match 2 */}
              <div className="match-box" style={{ margin: 0, padding: '4px' }}>
                <div className="match-box-header" style={{ fontSize: '0.65rem', padding: '2px 4px' }}>
                  <span>Match 2 &bull; T2</span>
                  <span className="badge badge-paid" style={{ fontSize: '0.55rem', padding: '1px 3px' }}>FINAL</span>
                </div>
                <div className="match-player winner" style={{ fontSize: '0.75rem', padding: '4px' }}>
                  <span style={{ fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>4. D. Ramirez</span>
                  <span className="score">7</span>
                </div>
                <div className="match-player" style={{ fontSize: '0.75rem', padding: '4px', opacity: 0.65 }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>5. M. Vance</span>
                  <span className="score">5</span>
                </div>
              </div>

              {/* Match 3 */}
              <div className="match-box" style={{ margin: 0, padding: '4px' }}>
                <div className="match-box-header" style={{ fontSize: '0.65rem', padding: '2px 4px' }}>
                  <span>Match 3 &bull; T3</span>
                  <span className="badge badge-paid" style={{ fontSize: '0.55rem', padding: '1px 3px' }}>FINAL</span>
                </div>
                <div className="match-player winner" style={{ fontSize: '0.75rem', padding: '4px' }}>
                  <span style={{ fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>2. M. Sullivan</span>
                  <span className="score">7</span>
                </div>
                <div className="match-player" style={{ fontSize: '0.75rem', padding: '4px', opacity: 0.65 }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>7. C. Pastore</span>
                  <span className="score">2</span>
                </div>
              </div>

              {/* Match 4 */}
              <div className="match-box" style={{ margin: 0, padding: '4px' }}>
                <div className="match-box-header" style={{ fontSize: '0.65rem', padding: '2px 4px' }}>
                  <span>Match 4 &bull; T4</span>
                  <span className="badge badge-paid" style={{ fontSize: '0.55rem', padding: '1px 3px' }}>FINAL</span>
                </div>
                <div className="match-player winner" style={{ fontSize: '0.75rem', padding: '4px' }}>
                  <span style={{ fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>3. J. Chen</span>
                  <span className="score">7</span>
                </div>
                <div className="match-player" style={{ fontSize: '0.75rem', padding: '4px', opacity: 0.65 }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>6. T. Vance</span>
                  <span className="score">4</span>
                </div>
              </div>
            </div>

            {/* SVG CONNECTOR 1 */}
            <div style={{ width: '24px', height: '420px', flexShrink: 0, marginTop: '24px' }}>
              <svg width="100%" height="100%" viewBox="0 0 24 420" fill="none" preserveAspectRatio="none">
                <defs>
                  <marker id="arrow-cyan" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#00f0ff" />
                  </marker>
                  <marker id="arrow-muted" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#a855f7" />
                  </marker>
                </defs>
                <path d="M 0 40 H 12 V 95 H 20" stroke="#00f0ff" strokeWidth="2" fill="none" markerEnd="url(#arrow-cyan)" />
                <path d="M 0 150 H 12 V 95 H 20" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 2" fill="none" markerEnd="url(#arrow-muted)" />
                <path d="M 0 265 H 12 V 320 H 20" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 2" fill="none" markerEnd="url(#arrow-muted)" />
                <path d="M 0 375 H 12 V 320 H 20" stroke="#00f0ff" strokeWidth="2" fill="none" markerEnd="url(#arrow-cyan)" />
              </svg>
            </div>

            {/* COLUMN 2: SEMI FINALS */}
            <div style={{ flex: '1 1 0%', minWidth: 0, display: 'flex', flexDirection: 'column', height: '420px', marginTop: '24px' }}>
              <div className="bracket-column-header" style={{ fontSize: '0.7rem', padding: '4px 6px', marginBottom: '36px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Semi-Finals
              </div>

              {/* Match 5 */}
              <div className="match-box" style={{ margin: 0, padding: '4px', border: '1.5px solid #00f0ff', boxShadow: '0 0 10px rgba(0, 240, 255, 0.2)' }}>
                <div className="match-box-header" style={{ fontSize: '0.65rem', padding: '2px 4px' }}>
                  <span>Match 5 &bull; T1</span>
                  <span className="badge badge-pending" style={{ fontSize: '0.55rem', padding: '1px 3px' }}>LIVE</span>
                </div>
                <div className="match-player winner" style={{ fontSize: '0.75rem', padding: '4px' }}>
                  <span style={{ fontWeight: 700, color: '#00f0ff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Ray Martin</span>
                  <span className="score">5</span>
                </div>
                <div className="match-player" style={{ fontSize: '0.75rem', padding: '4px' }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>D. Ramirez</span>
                  <span className="score">4</span>
                </div>
              </div>

              {/* Match 6 */}
              <div className="match-box" style={{ marginTop: '115px', padding: '4px', border: '1.5px solid #00f0ff', boxShadow: '0 0 10px rgba(0, 240, 255, 0.2)' }}>
                <div className="match-box-header" style={{ fontSize: '0.65rem', padding: '2px 4px' }}>
                  <span>Match 6 &bull; T2</span>
                  <span className="badge badge-pending" style={{ fontSize: '0.55rem', padding: '1px 3px' }}>LIVE</span>
                </div>
                <div className="match-player" style={{ fontSize: '0.75rem', padding: '4px' }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>M. Sullivan</span>
                  <span className="score">3</span>
                </div>
                <div className="match-player winner" style={{ fontSize: '0.75rem', padding: '4px' }}>
                  <span style={{ fontWeight: 700, color: '#00f0ff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Jason Chen</span>
                  <span className="score">6</span>
                </div>
              </div>
            </div>

            {/* SVG CONNECTOR 2 */}
            <div style={{ width: '24px', height: '420px', flexShrink: 0, marginTop: '24px' }}>
              <svg width="100%" height="100%" viewBox="0 0 24 420" fill="none" preserveAspectRatio="none">
                <path d="M 0 95 H 12 V 205 H 20" stroke="#00f0ff" strokeWidth="2" fill="none" markerEnd="url(#arrow-cyan)" />
                <path d="M 0 320 H 12 V 205 H 20" stroke="#00f0ff" strokeWidth="2" fill="none" markerEnd="url(#arrow-cyan)" />
              </svg>
            </div>

            {/* COLUMN 3: WINNER'S FINALS */}
            <div style={{ flex: '1 1 0%', minWidth: 0, display: 'flex', flexDirection: 'column', height: '420px', marginTop: '24px' }}>
              <div className="bracket-column-header" style={{ fontSize: '0.7rem', padding: '4px 6px', marginBottom: '146px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Winner&apos;s Finals
              </div>

              {/* Match 7 */}
              <div className="match-box" style={{ margin: 0, padding: '4px', border: '1.5px dashed #00f0ff' }}>
                <div className="match-box-header" style={{ fontSize: '0.65rem', padding: '2px 4px' }}>
                  <span>Match 7 &bull; T1</span>
                  <span className="badge badge-open" style={{ fontSize: '0.55rem', padding: '1px 3px' }}>NEXT</span>
                </div>
                <div className="match-player" style={{ fontSize: '0.75rem', padding: '4px', color: '#00f0ff', fontWeight: 600 }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Ray Martin</span>
                  <span className="score">0</span>
                </div>
                <div className="match-player" style={{ fontSize: '0.75rem', padding: '4px', color: '#00f0ff', fontWeight: 600 }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Jason Chen</span>
                  <span className="score">0</span>
                </div>
              </div>
            </div>

            {/* SVG CONNECTOR 3 */}
            <div style={{ width: '24px', height: '420px', flexShrink: 0, marginTop: '24px' }}>
              <svg width="100%" height="100%" viewBox="0 0 24 420" fill="none" preserveAspectRatio="none">
                <path d="M 0 205 H 20" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 2" fill="none" markerEnd="url(#arrow-muted)" />
              </svg>
            </div>

            {/* COLUMN 4: GRAND FINALS */}
            <div style={{ flex: '1 1 0%', minWidth: 0, display: 'flex', flexDirection: 'column', height: '420px', marginTop: '24px' }}>
              <div className="bracket-column-header" style={{ fontSize: '0.7rem', padding: '4px 6px', marginBottom: '146px', background: 'linear-gradient(135deg, #ff1744 0%, #a855f7 100%)', color: '#ffffff', border: 'none', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Championship Final
              </div>

              {/* Match 8 */}
              <div className="match-box" style={{ margin: 0, padding: '4px', border: '1.5px solid #ff1744', boxShadow: '0 0 15px rgba(255, 23, 68, 0.3)' }}>
                <div className="match-box-header" style={{ fontSize: '0.65rem', padding: '2px 4px', background: '#ff1744', color: '#ffffff' }}>
                  <span>GRAND FINALS</span>
                  <span style={{ fontWeight: 800 }}>$500 ADDED</span>
                </div>
                <div className="match-player" style={{ fontSize: '0.75rem', padding: '4px' }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Winner Bracket Champ</span>
                  <span className="score">0</span>
                </div>
                <div className="match-player" style={{ fontSize: '0.75rem', padding: '4px' }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Loser Bracket Champ</span>
                  <span className="score">0</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      ) : (
        /* RESPONSIVE LOSER'S BRACKET (FITS SCREEN WITHOUT SCROLLBAR) */
        <div style={{ width: '100%', overflow: 'hidden', padding: '6px 0' }}>
          <div style={{ display: 'flex', width: '100%', alignItems: 'center', gap: '4px' }}>
            
            {/* LOSER ROUND 1 */}
            <div style={{ flex: '1 1 0%', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="bracket-column-header" style={{ fontSize: '0.7rem', padding: '4px 6px' }}>Elimination R1</div>

              <div className="match-box" style={{ margin: 0, padding: '4px' }}>
                <div className="match-box-header" style={{ fontSize: '0.65rem', padding: '2px 4px' }}>
                  <span>Match L1 &bull; T5</span>
                  <span className="badge badge-paid" style={{ fontSize: '0.55rem', padding: '1px 3px' }}>FINAL</span>
                </div>
                <div className="match-player winner" style={{ fontSize: '0.75rem', padding: '4px' }}>
                  <span style={{ fontWeight: 700 }}>K. O&apos;Connor</span>
                  <span className="score">5</span>
                </div>
                <div className="match-player" style={{ fontSize: '0.75rem', padding: '4px', opacity: 0.6 }}>
                  <span>M. Vance</span>
                  <span className="score">2</span>
                </div>
              </div>

              <div className="match-box" style={{ margin: 0, padding: '4px' }}>
                <div className="match-box-header" style={{ fontSize: '0.65rem', padding: '2px 4px' }}>
                  <span>Match L2 &bull; T6</span>
                  <span className="badge badge-paid" style={{ fontSize: '0.55rem', padding: '1px 3px' }}>FINAL</span>
                </div>
                <div className="match-player winner" style={{ fontSize: '0.75rem', padding: '4px' }}>
                  <span style={{ fontWeight: 700 }}>T. Vance</span>
                  <span className="score">5</span>
                </div>
                <div className="match-player" style={{ fontSize: '0.75rem', padding: '4px', opacity: 0.6 }}>
                  <span>C. Pastore</span>
                  <span className="score">3</span>
                </div>
              </div>
            </div>

            {/* SVG CONNECTOR LOSER 1 */}
            <div style={{ width: '24px', height: '220px', flexShrink: 0, marginTop: '24px' }}>
              <svg width="100%" height="100%" viewBox="0 0 24 220" fill="none" preserveAspectRatio="none">
                <path d="M 0 40 H 12 V 110 H 20" stroke="#00f0ff" strokeWidth="2" fill="none" markerEnd="url(#arrow-cyan)" />
                <path d="M 0 180 H 12 V 110 H 20" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 2" fill="none" markerEnd="url(#arrow-muted)" />
              </svg>
            </div>

            {/* LOSER SEMI FINALS */}
            <div style={{ flex: '1 1 0%', minWidth: 0, display: 'flex', flexDirection: 'column', height: '220px', marginTop: '24px' }}>
              <div className="bracket-column-header" style={{ fontSize: '0.7rem', padding: '4px 6px', marginBottom: '45px' }}>Loser Semi-Final</div>

              <div className="match-box" style={{ margin: 0, padding: '4px', border: '1.5px solid #ffaa00' }}>
                <div className="match-box-header" style={{ fontSize: '0.65rem', padding: '2px 4px' }}>
                  <span>Match L3 &bull; T3</span>
                  <span className="badge badge-pending" style={{ fontSize: '0.55rem', padding: '1px 3px' }}>NEXT</span>
                </div>
                <div className="match-player" style={{ fontSize: '0.75rem', padding: '4px' }}>
                  <span>K. O&apos;Connor</span>
                  <span className="score">0</span>
                </div>
                <div className="match-player" style={{ fontSize: '0.75rem', padding: '4px' }}>
                  <span>T. Vance</span>
                  <span className="score">0</span>
                </div>
              </div>
            </div>

            {/* SVG CONNECTOR LOSER 2 */}
            <div style={{ width: '24px', height: '220px', flexShrink: 0, marginTop: '24px' }}>
              <svg width="100%" height="100%" viewBox="0 0 24 220" fill="none" preserveAspectRatio="none">
                <path d="M 0 110 H 20" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 2" fill="none" markerEnd="url(#arrow-muted)" />
              </svg>
            </div>

            {/* LOSER FINALS */}
            <div style={{ flex: '1 1 0%', minWidth: 0, display: 'flex', flexDirection: 'column', height: '220px', marginTop: '24px' }}>
              <div className="bracket-column-header" style={{ fontSize: '0.7rem', padding: '4px 6px', marginBottom: '45px' }}>Loser&apos;s Finals</div>

              <div className="match-box" style={{ margin: 0, padding: '4px', border: '1.5px dashed #ffaa00' }}>
                <div className="match-box-header" style={{ fontSize: '0.65rem', padding: '2px 4px' }}>
                  <span>Match L4 &bull; T1</span>
                  <span className="badge badge-open" style={{ fontSize: '0.55rem', padding: '1px 3px' }}>UPCOMING</span>
                </div>
                <div className="match-player" style={{ fontSize: '0.75rem', padding: '4px' }}>
                  <span>Winner Match L3</span>
                  <span className="score">0</span>
                </div>
                <div className="match-player" style={{ fontSize: '0.75rem', padding: '4px' }}>
                  <span>Loser Match 7</span>
                  <span className="score">0</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Bracket Legend & Notes */}
      <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-card)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          <span><strong style={{ color: '#00f0ff' }}>Solid Cyan Line:</strong> Winner Path</span>
          <span><strong style={{ color: '#a855f7' }}>Dashed Purple Line:</strong> Upcoming Path</span>
        </div>
        <div>
          <span>Tables 1 &ndash; 4: 9ft Diamond Pro Tables</span>
        </div>
      </div>
    </div>
  );
}
