import { Observable } from '@nativescript/core';
import { ValorantAPI } from '../services/valorant-api';
import { Player } from '../models/player';

export class PlayerViewModel extends Observable {
  private api: ValorantAPI;
  private _player: Player | null = null;
  private _isLoading = false;
  private _errorMessage = '';

  constructor() {
    super();
    this.api = new ValorantAPI();
  }

  get player(): Player | null {
    return this._player;
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  get errorMessage(): string {
    return this._errorMessage;
  }

  async searchPlayer(username: string, tag: string) {
    try {
      this._isLoading = true;
      this.notifyPropertyChange('isLoading', true);
      
      const playerData = await this.api.getPlayerStats(username, tag);
      const matchHistory = await this.api.getMatchHistory(username, tag);
      
      this._player = {
        username,
        tag,
        stats: {
          rank: playerData.data.currenttier_patched,
          elo: playerData.data.elo,
          killDeathRatio: playerData.data.stats.overall.kd_ratio,
          winRate: playerData.data.stats.overall.win_percentage,
          matches: matchHistory.data.map(match => ({
            map: match.metadata.map,
            agent: match.metadata.agent,
            score: match.metadata.score,
            kills: match.stats.kills,
            deaths: match.stats.deaths,
            assists: match.stats.assists
          }))
        }
      };
      
      this.notifyPropertyChange('player', this._player);
      this._errorMessage = '';
    } catch (error) {
      this._errorMessage = 'Error fetching player data. Please try again.';
      this.notifyPropertyChange('errorMessage', this._errorMessage);
    } finally {
      this._isLoading = false;
      this.notifyPropertyChange('isLoading', false);
    }
  }
}