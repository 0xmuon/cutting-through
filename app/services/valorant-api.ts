import axios from 'axios';

export class ValorantAPI {
  private baseUrl = 'https://api.henrikdev.xyz/valorant/v1';

  async getPlayerStats(username: string, tag: string) {
    try {
      const response = await axios.get(`${this.baseUrl}/account/${username}/${tag}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching player stats:', error);
      throw error;
    }
  }

  async getMatchHistory(username: string, tag: string) {
    try {
      const response = await axios.get(`${this.baseUrl}/matchhistory/${username}/${tag}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching match history:', error);
      throw error;
    }
  }
}