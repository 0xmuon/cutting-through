export interface Player {
  username: string;
  tag: string;
  stats: PlayerStats;
}

export interface PlayerStats {
  rank: string;
  elo: number;
  killDeathRatio: number;
  winRate: number;
  matches: Match[];
}

export interface Match {
  map: string;
  agent: string;
  score: string;
  kills: number;
  deaths: number;
  assists: number;
}