'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

export interface Tournament {
  id: string;
  title: string;
  dateTime: string;
  gameType: string;
  entryFee: number;
  greenFee: number;
  houseAdded: number;
  confirmedCount: number;
  pendingCount: number;
  maxSpots: number;
  status: 'Registration Open' | 'Weekly Event' | 'Full';
}

export interface PlayerRecord {
  id: number;
  name: string;
  phone: string;
  rating: string;
  status: 'paid' | 'pending' | 'forfeited';
  method: string;
  registeredAt: string;
  tournamentId: string;
}

export interface BannerState {
  active: boolean;
  text: string;
}

interface AppStateContextType {
  banner: BannerState;
  tournaments: Tournament[];
  players: PlayerRecord[];
  ready: boolean;
  updateBanner: (active: boolean, text: string) => void;
  markPlayerPaid: (id: number, method: string) => void;
  forfeitPlayerSpot: (id: number) => void;
  addTournament: (t: Omit<Tournament, 'id' | 'confirmedCount' | 'pendingCount' | 'status'>) => void;
  removeTournament: (id: string) => void;
  addPlayer: (p: { name: string; phone: string; rating: string; method: string; tournamentId: string }) => void;
}

/**
 * The club starts with an empty board. Everything the public sees is entered by
 * the owner through /admin — no placeholder events and no sample players,
 * because a real venue must never advertise a tournament that is not happening.
 */
const INITIAL_TOURNAMENTS: Tournament[] = [];
const INITIAL_PLAYERS: PlayerRecord[] = [];

const STORAGE_KEY = 'ac_billiards_state_v1';

interface Persisted {
  banner: BannerState;
  tournaments: Tournament[];
  players: PlayerRecord[];
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [banner, setBanner] = useState<BannerState>({ active: false, text: '' });
  const [tournaments, setTournaments] = useState<Tournament[]>(INITIAL_TOURNAMENTS);
  const [players, setPlayers] = useState<PlayerRecord[]>(INITIAL_PLAYERS);

  // `ready` gates the first write so hydration never clobbers saved state, and
  // lets the UI avoid a server/client markup mismatch on first paint.
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as Partial<Persisted>;
        if (saved.banner) setBanner(saved.banner);
        if (Array.isArray(saved.tournaments)) setTournaments(saved.tournaments);
        if (Array.isArray(saved.players)) setPlayers(saved.players);
      }
    } catch {
      // Corrupt or blocked storage: fall back to an empty board.
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ banner, tournaments, players } satisfies Persisted)
      );
    } catch {
      // Private browsing or a full quota: the session still works in memory.
    }
  }, [ready, banner, tournaments, players]);

  const updateBanner = useCallback((active: boolean, text: string) => {
    setBanner({ active, text });
  }, []);

  const markPlayerPaid = useCallback((id: number, method: string) => {
    setPlayers((prev) => prev.map((p) => (p.id === id ? { ...p, status: 'paid', method } : p)));
  }, []);

  const forfeitPlayerSpot = useCallback((id: number) => {
    setPlayers((prev) => prev.map((p) => (p.id === id ? { ...p, status: 'forfeited' } : p)));
  }, []);

  const addTournament = useCallback(
    (newT: Omit<Tournament, 'id' | 'confirmedCount' | 'pendingCount' | 'status'>) => {
      setTournaments((prev) => [
        {
          ...newT,
          id: `t-${Date.now()}`,
          confirmedCount: 0,
          pendingCount: 0,
          status: 'Registration Open' as const,
        },
        ...prev,
      ]);
    },
    []
  );

  const removeTournament = useCallback((id: string) => {
    setTournaments((prev) => prev.filter((t) => t.id !== id));
    setPlayers((prev) => prev.filter((p) => p.tournamentId !== id));
  }, []);

  const addPlayer = useCallback(
    (p: { name: string; phone: string; rating: string; method: string; tournamentId: string }) => {
      setPlayers((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: p.name,
          phone: p.phone,
          rating: p.rating || 'Unrated',
          status: 'pending',
          method: p.method,
          registeredAt: new Date().toLocaleString([], {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          }),
          tournamentId: p.tournamentId,
        },
      ]);
    },
    []
  );

  // Counts are derived from the roster the owner actually entered.
  const syncedTournaments = tournaments.map((t) => {
    const roster = players.filter((p) => p.tournamentId === t.id);
    return {
      ...t,
      confirmedCount: roster.filter((p) => p.status === 'paid').length,
      pendingCount: roster.filter((p) => p.status === 'pending').length,
    };
  });

  return (
    <AppStateContext.Provider
      value={{
        banner,
        tournaments: syncedTournaments,
        players,
        ready,
        updateBanner,
        markPlayerPaid,
        forfeitPlayerSpot,
        addTournament,
        removeTournament,
        addPlayer,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState must be used within an AppStateProvider');
  return ctx;
}
