'use client';

import React, { createContext, useContext, useState } from 'react';

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
  updateBanner: (active: boolean, text: string) => void;
  markPlayerPaid: (id: number, method: string) => void;
  forfeitPlayerSpot: (id: number) => void;
  addTournament: (tournament: Omit<Tournament, 'id' | 'confirmedCount' | 'pendingCount' | 'status'>) => void;
  registerPlayer: (player: { name: string; phone: string; email: string; rating: string; paymentPreference: string }) => void;
}

const INITIAL_TOURNAMENTS: Tournament[] = [
  {
    id: 't-1',
    title: '$500 Added 9-Ball Open Championship',
    dateTime: 'Saturday, September 26, 2026 | Doors: 11:00 AM | Play: 1:00 PM',
    gameType: '9-ball',
    entryFee: 20,
    greenFee: 5,
    houseAdded: 500,
    confirmedCount: 18,
    pendingCount: 2,
    maxSpots: 32,
    status: 'Registration Open',
  },
  {
    id: 't-2',
    title: 'Friday Night 8-Ball Handicap Chip Tournament',
    dateTime: 'Every Friday Night | Check-in: 6:30 PM | Play: 7:00 PM',
    gameType: '8-ball',
    entryFee: 12,
    greenFee: 3,
    houseAdded: 0,
    confirmedCount: 12,
    pendingCount: 2,
    maxSpots: 24,
    status: 'Weekly Event',
  }
];

const INITIAL_PLAYERS: PlayerRecord[] = [
  { id: 1, name: 'Ray "The Razor" Martin', phone: '(609) 555-0111', rating: 'Fargo 680', status: 'paid', method: 'Cash ($25.00)', registeredAt: 'Sept 14, 10:15 AM', tournamentId: 't-1' },
  { id: 2, name: 'Mike Sullivan', phone: '(609) 555-0122', rating: 'Fargo 650', status: 'paid', method: 'Venmo (@MikeS-Pool)', registeredAt: 'Sept 14, 11:30 AM', tournamentId: 't-1' },
  { id: 3, name: 'Johnny McDermott', phone: '(609) 555-0123', rating: 'Fargo 520', status: 'pending', method: 'Unpaid (At Counter)', registeredAt: 'Sept 14, 01:05 PM', tournamentId: 't-1' },
  { id: 4, name: 'Chris Pastore', phone: '(609) 555-0144', rating: 'Fargo 520', status: 'pending', method: 'Unpaid (Zelle)', registeredAt: 'Sept 14, 01:20 PM', tournamentId: 't-1' },
];

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [banner, setBanner] = useState<BannerState>({
    active: false,
    text: '',
  });

  const [tournaments, setTournaments] = useState<Tournament[]>(INITIAL_TOURNAMENTS);
  const [players, setPlayers] = useState<PlayerRecord[]>(INITIAL_PLAYERS);

  const updateBanner = (active: boolean, text: string) => {
    setBanner({ active, text });
  };

  const markPlayerPaid = (id: number, method: string) => {
    setPlayers(prev => prev.map(p => p.id === id ? { ...p, status: 'paid', method } : p));
  };

  const forfeitPlayerSpot = (id: number) => {
    setPlayers(prev => prev.map(p => p.id === id ? { ...p, status: 'forfeited' } : p));
  };

  const addTournament = (newT: Omit<Tournament, 'id' | 'confirmedCount' | 'pendingCount' | 'status'>) => {
    const created: Tournament = {
      ...newT,
      id: `t-${Date.now()}`,
      confirmedCount: 0,
      pendingCount: 0,
      status: 'Registration Open',
    };
    setTournaments(prev => [created, ...prev]);
  };

  const registerPlayer = (data: { name: string; phone: string; email: string; rating: string; paymentPreference: string }) => {
    const newPlayer: PlayerRecord = {
      id: Date.now(),
      name: data.name,
      phone: data.phone,
      rating: data.rating || 'Unrated',
      status: 'pending',
      method: `Unpaid (${data.paymentPreference})`,
      registeredAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      tournamentId: 't-1',
    };
    setPlayers(prev => [...prev, newPlayer]);
  };

  // Sync tournament counts dynamically based on players
  const t1PaidCount = 16 + players.filter(p => p.tournamentId === 't-1' && p.status === 'paid').length;
  const t1PendingCount = players.filter(p => p.tournamentId === 't-1' && p.status === 'pending').length;

  const syncedTournaments = tournaments.map(t => {
    if (t.id === 't-1') {
      return {
        ...t,
        confirmedCount: t1PaidCount,
        pendingCount: t1PendingCount,
      };
    }
    return t;
  });

  return (
    <AppStateContext.Provider
      value={{
        banner,
        tournaments: syncedTournaments,
        players,
        updateBanner,
        markPlayerPaid,
        forfeitPlayerSpot,
        addTournament,
        registerPlayer,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
}
