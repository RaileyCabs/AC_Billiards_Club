'use client';

import { useState } from 'react';

export default function TournamentBracket() {
  const [activeTab, setActiveTab] = useState<'winners' | 'losers'>('winners');
  const [highlightedPlayer, setHighlightedPlayer] = useState<string | null>(null);

  return (
    <div className="card" style={{ padding: '24px', overflow: 'hidden' }}>
      {/* Header & Tabs */}
      <div className="card-header" style={{ marginBottom: '20px' }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>
            Official Live Tournament Bracket &amp; Progression Engine
          </h3>
          <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            $500 Added 9-Ball Open &bull; Race to 7 (Winner&apos;s) / Race to 5 (Loser&apos;s) &bull; Double Elimination
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '8px' }}>
          <button 
            className={`btn ${activeTab === 'winners' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('winners')}
            style={{ fontSize: '0.8rem', padding: '6px 14px' }}
          >
            Winner&apos;s Bracket
          </button>
          <button 
            className={`btn ${activeTab === 'losers' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setActiveTab('losers')}
            style={{ fontSize: '0.8rem', padding: '6px 14px' }}
          >
            Loser&apos;s Bracket
          </button>
        </div>
      </div>

      {activeTab === 'winners' ? (
        /* WINNER'S BRACKET LAYOUT WITH CONNECTING LINES */
        <div className="bracket-wrapper" style={{ padding: '10px 0', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'stretch', width: '100%', gap: '4px', position: 'relative' }}>
            
            {/* ROUND 1: QUARTER FINALS */}
            <div style={{ flex: '1 1 0%', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="bracket-column-header">Quarter-Finals</div>

              {/* Match 1 */}
              <div 
                className="match-box" 
                style={{ margin: 0, border: '1px solid var(--border-card)' }}
                onMouseEnter={() => setHighlightedPlayer('Ray Martin')}
                onMouseLeave={() => setHighlightedPlayer(null)}
              >
                <div className="match-box-header">
                  <span>Match 1 &bull; T1</span>
                  <span className="badge badge-paid" style={{ fontSize: '0.6rem', padding: '1px 5px' }}>FINAL</span>
                </div>
                <div className="match-player winner">
                  <span style={{ fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>1. Ray Martin (680)</span>
                  <span className="score">7</span>
                </div>
                <div className="match-player" style={{ opacity: 0.7 }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>8. K. O&apos;Connor (510)</span>
                  <span className="score">3</span>
                </div>
              </div>

              {/* Match 2 */}
              <div 
                className="match-box" 
                style={{ margin: 0, border: '1px solid var(--border-card)' }}
                onMouseEnter={() => setHighlightedPlayer('Dave Ramirez')}
                onMouseLeave={() => setHighlightedPlayer(null)}
              >
                <div className="match-box-header">
                  <span>Match 2 &bull; T2</span>
                  <span className="badge badge-paid" style={{ fontSize: '0.6rem', padding: '1px 5px' }}>FINAL</span>
                </div>
                <div className="match-player winner">
                  <span style={{ fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>4. D. Ramirez (610)</span>
                  <span className="score">7</span>
                </div>
                <div className="match-player" style={{ opacity: 0.7 }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>5. M. Vance (580)</span>
                  <span className="score">5</span>
                </div>
              </div>

              {/* Match 3 */}
              <div 
                className="match-box" 
                style={{ margin: 0, border: '1px solid var(--border-card)' }}
                onMouseEnter={() => setHighlightedPlayer('Mike Sullivan')}
                onMouseLeave={() => setHighlightedPlayer(null)}
              >
                <div className="match-box-header">
                  <span>Match 3 &bull; T3</span>
                  <span className="badge badge-paid" style={{ fontSize: '0.6rem', padding: '1px 5px' }}>FINAL</span>
                </div>
                <div className="match-player winner">
                  <span style={{ fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>2. M. Sullivan (650)</span>
                  <span className="score">7</span>
                </div>
                <div className="match-player" style={{ opacity: 0.7 }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>7. C. Pastore (520)</span>
                  <span className="score">2</span>
                </div>
              </div>

              {/* Match 4 */}
              <div 
                className="match-box" 
                style={{ margin: 0, border: '1px solid var(--border-card)' }}
                onMouseEnter={() => setHighlightedPlayer('Jason Chen')}
                onMouseLeave={() => setHighlightedPlayer(null)}
              >
                <div className="match-box-header">
                  <span>Match 4 &bull; T4</span>
                  <span className="badge badge-paid" style={{ fontSize: '0.6rem', padding: '1px 5px' }}>FINAL</span>
                </div>
                <div className="match-player winner">
                  <span style={{ fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>3. Jason Chen (630)</span>
                  <span className="score">7</span>
                </div>
                <div className="match-player" style={{ opacity: 0.7 }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>6. T. Vance (540)</span>
                  <span className="score">4</span>
                </div>
              </div>
            </div>

            {/* SVG CONNECTOR COLUMN 1 */}
            <div style={{ flex: '0 0 24px', height: '440px', marginTop: '32px' }}>
              <svg width="100%" height="100%" viewBox="0 0 24 440" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
                  </marker>
                  <marker id="arrow-muted" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
                  </marker>
                </defs>

                {/* Match 1 -> Semi 5 */}
                <path d="M 0 40 H 12 V 100 H 22" stroke="#10b981" strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />
                {/* Match 2 -> Semi 5 */}
                <path d="M 0 160 H 12 V 100 H 22" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 2" fill="none" markerEnd="url(#arrow-muted)" />
                {/* Match 3 -> Semi 6 */}
                <path d="M 0 280 H 12 V 340 H 22" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 2" fill="none" markerEnd="url(#arrow-muted)" />
                {/* Match 4 -> Semi 6 */}
                <path d="M 0 400 H 12 V 340 H 22" stroke="#10b981" strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />
              </svg>
            </div>

            {/* ROUND 2: SEMI-FINALS */}
            <div style={{ flex: '1 1 0%', minWidth: 0, display: 'flex', flexDirection: 'column', height: '440px', marginTop: '32px' }}>
              <div className="bracket-column-header" style={{ marginBottom: '40px' }}>Semi-Finals</div>

              {/* Match 5 */}
              <div 
                className="match-box" 
                style={{ margin: 0, border: '2px solid #10b981', boxShadow: '0 0 12px rgba(16,185,129,0.2)' }}
                onMouseEnter={() => setHighlightedPlayer('Ray Martin')}
                onMouseLeave={() => setHighlightedPlayer(null)}
              >
                <div className="match-box-header">
                  <span>Match 5 &bull; T1</span>
                  <span className="badge badge-pending" style={{ fontSize: '0.6rem', padding: '1px 5px' }}>LIVE</span>
                </div>
                <div className="match-player winner">
                  <span style={{ fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Ray Martin</span>
                  <span className="score">5</span>
                </div>
                <div className="match-player">
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Dave Ramirez</span>
                  <span className="score">4</span>
                </div>
              </div>

              {/* Match 6 */}
              <div 
                className="match-box" 
                style={{ marginTop: '120px', border: '2px solid #10b981', boxShadow: '0 0 12px rgba(16,185,129,0.2)' }}
                onMouseEnter={() => setHighlightedPlayer('Jason Chen')}
                onMouseLeave={() => setHighlightedPlayer(null)}
              >
                <div className="match-box-header">
                  <span>Match 6 &bull; T2</span>
                  <span className="badge badge-pending" style={{ fontSize: '0.6rem', padding: '1px 5px' }}>LIVE</span>
                </div>
                <div className="match-player">
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Mike Sullivan</span>
                  <span className="score">3</span>
                </div>
                <div className="match-player winner">
                  <span style={{ fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Jason Chen</span>
                  <span className="score">6</span>
                </div>
              </div>
            </div>

            {/* SVG CONNECTOR COLUMN 2 */}
            <div style={{ flex: '0 0 24px', height: '440px', marginTop: '32px' }}>
              <svg width="100%" height="100%" viewBox="0 0 24 440" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                {/* Match 5 -> Winner Finals Match 7 */}
                <path d="M 0 100 H 12 V 220 H 22" stroke="#10b981" strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />
                {/* Match 6 -> Winner Finals Match 7 */}
                <path d="M 0 340 H 12 V 220 H 22" stroke="#10b981" strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />
              </svg>
            </div>

            {/* ROUND 3: WINNER'S FINALS */}
            <div style={{ flex: '1 1 0%', minWidth: 0, display: 'flex', flexDirection: 'column', height: '440px', marginTop: '32px' }}>
              <div className="bracket-column-header" style={{ marginBottom: '160px' }}>Winner&apos;s Finals</div>

              {/* Match 7 */}
              <div className="match-box" style={{ margin: 0, border: '2px dashed #10b981' }}>
                <div className="match-box-header">
                  <span>Match 7 &bull; T1</span>
                  <span className="badge badge-open" style={{ fontSize: '0.6rem', padding: '1px 5px' }}>ON DECK</span>
                </div>
                <div className="match-player" style={{ color: '#10b981', fontWeight: 600 }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>R. Martin (M5)</span>
                  <span className="score">0</span>
                </div>
                <div className="match-player" style={{ color: '#10b981', fontWeight: 600 }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>J. Chen (M6)</span>
                  <span className="score">0</span>
                </div>
              </div>
            </div>

            {/* SVG CONNECTOR COLUMN 3 */}
            <div style={{ flex: '0 0 24px', height: '440px', marginTop: '32px' }}>
              <svg width="100%" height="100%" viewBox="0 0 24 440" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                {/* Match 7 -> Grand Finals Match 8 */}
                <path d="M 0 220 H 22" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 2" fill="none" markerEnd="url(#arrow-muted)" />
              </svg>
            </div>

            {/* ROUND 4: GRAND FINALS */}
            <div style={{ flex: '1.1 1 0%', minWidth: 0, display: 'flex', flexDirection: 'column', height: '440px', marginTop: '32px' }}>
              <div className="bracket-column-header" style={{ marginBottom: '160px', background: '#10b981', color: '#ffffff', border: 'none' }}>
                Championship Final
              </div>

              {/* Match 8 */}
              <div className="match-box" style={{ margin: 0, border: '2px solid #10b981', boxShadow: '0 6px 20px rgba(16,185,129,0.2)' }}>
                <div className="match-box-header" style={{ background: '#10b981', color: '#ffffff' }}>
                  <span>GRAND FINALS</span>
                  <span style={{ fontWeight: 800 }}>$500 ADDED</span>
                </div>
                <div className="match-player">
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Winner Bracket Champ</span>
                  <span className="score">0</span>
                </div>
                <div className="match-player">
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Loser Bracket Champ</span>
                  <span className="score">0</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      ) : (
        /* LOSER'S BRACKET LAYOUT WITH CONNECTING LINES */
        <div className="bracket-wrapper" style={{ padding: '10px 0', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'stretch', width: '100%', gap: '4px' }}>
            
            {/* LOSER ROUND 1 */}
            <div style={{ flex: '1 1 0%', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="bracket-column-header">Elimination R1</div>

              <div className="match-box" style={{ margin: 0 }}>
                <div className="match-box-header">
                  <span>Match L1 &bull; T5</span>
                  <span className="badge badge-paid" style={{ fontSize: '0.6rem' }}>FINAL</span>
                </div>
                <div className="match-player winner">
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Kevin O&apos;Connor</span>
                  <span className="score">5</span>
                </div>
                <div className="match-player" style={{ opacity: 0.6 }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Marcus Vance</span>
                  <span className="score">2</span>
                </div>
              </div>

              <div className="match-box" style={{ margin: 0 }}>
                <div className="match-box-header">
                  <span>Match L2 &bull; T6</span>
                  <span className="badge badge-paid" style={{ fontSize: '0.6rem' }}>FINAL</span>
                </div>
                <div className="match-player winner">
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Tommy Vance</span>
                  <span className="score">5</span>
                </div>
                <div className="match-player" style={{ opacity: 0.6 }}>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Chris Pastore</span>
                  <span className="score">3</span>
                </div>
              </div>
            </div>

            {/* SVG CONNECTOR LOSERS 1 */}
            <div style={{ flex: '0 0 24px', height: '240px', marginTop: '32px' }}>
              <svg width="100%" height="100%" viewBox="0 0 24 240" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 45 H 12 V 120 H 22" stroke="#10b981" strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />
                <path d="M 0 195 H 12 V 120 H 22" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 2" fill="none" markerEnd="url(#arrow-muted)" />
              </svg>
            </div>

            {/* LOSER SEMI FINALS */}
            <div style={{ flex: '1 1 0%', minWidth: 0, display: 'flex', flexDirection: 'column', height: '240px', marginTop: '32px' }}>
              <div className="bracket-column-header" style={{ marginBottom: '55px' }}>Loser Semi-Final</div>

              <div className="match-box" style={{ margin: 0, border: '2px solid #f59e0b' }}>
                <div className="match-box-header">
                  <span>Match L3 &bull; T3</span>
                  <span className="badge badge-pending" style={{ fontSize: '0.6rem' }}>ON DECK</span>
                </div>
                <div className="match-player">
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Kevin O&apos;Connor</span>
                  <span className="score">0</span>
                </div>
                <div className="match-player">
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Tommy Vance</span>
                  <span className="score">0</span>
                </div>
              </div>
            </div>

            {/* SVG CONNECTOR LOSERS 2 */}
            <div style={{ flex: '0 0 24px', height: '240px', marginTop: '32px' }}>
              <svg width="100%" height="100%" viewBox="0 0 24 240" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 120 H 22" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 2" fill="none" markerEnd="url(#arrow-muted)" />
              </svg>
            </div>

            {/* LOSER FINALS */}
            <div style={{ flex: '1 1 0%', minWidth: 0, display: 'flex', flexDirection: 'column', height: '240px', marginTop: '32px' }}>
              <div className="bracket-column-header" style={{ marginBottom: '55px' }}>Loser Finals</div>

              <div className="match-box" style={{ margin: 0, border: '2px dashed #f59e0b' }}>
                <div className="match-box-header">
                  <span>Match L4 &bull; T1</span>
                  <span className="badge badge-open" style={{ fontSize: '0.6rem' }}>UPCOMING</span>
                </div>
                <div className="match-player">
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Winner Match L3</span>
                  <span className="score">0</span>
                </div>
                <div className="match-player">
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Loser Match 7</span>
                  <span className="score">0</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Bracket Legend & Notes */}
      <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-card)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <span><strong style={{ color: '#10b981' }}>Solid Green Line:</strong> Winner Path Progression</span>
          <span><strong style={{ color: '#94a3b8' }}>Dashed Gray Line:</strong> Upcoming Match Path</span>
        </div>
        <div>
          <span>Tables 1 &ndash; 4: 9ft Diamond Pro Tables</span>
        </div>
      </div>
    </div>
  );
}
