
import { MatchProps } from "@/components/LiveMatchCard";
import { CommentaryItem } from "@/components/Commentary";
import { BallData } from "@/types/BallData";
import { mockData, getMatchDetails } from "./mockData";
import { convertApiDataToMatchProps, convertApiBallDataToCommentary } from "./dataConverters";
import { useToast } from "@/hooks/use-toast";

const API_KEY = "950ed689-61ef-4a4f-8fbf-1d9cdc1828a7";
const CRICKET_API_URL = "https://api.cricapi.com/v1";

// This service handles API calls and fallback to mock data
export const apiService = {
  getLiveMatches: async (): Promise<MatchProps[]> => {
    try {
      const response = await fetch(`${CRICKET_API_URL}/currentMatches?apikey=${API_KEY}`);
      
      if (!response.ok) {
        console.error("API Error:", response.statusText);
        return mockData.liveMatches; // Fallback to mock data
      }
      
      const data = await response.json();
      
      if (data.status !== "success" || !data.data) {
        console.error("API Error:", data.status);
        return mockData.liveMatches; // Fallback to mock data
      }
      
      // Convert API data to our MatchProps format
      const matches = data.data.map(convertApiDataToMatchProps).filter(Boolean);
      return matches.length > 0 ? matches : mockData.liveMatches;
    } catch (error) {
      console.error("Error fetching live matches:", error);
      // Fallback to mock data
      return mockData.liveMatches;
    }
  },
  
  getPastMatches: async (): Promise<MatchProps[]> => {
    // Since we can't connect to MongoDB directly from frontend,
    // we'll continue using mock data for past matches
    // In a real app, you would call your backend API here
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockData.pastMatches;
  },
  
  getMatchDetails: async (id: string): Promise<{match: MatchProps, commentary: CommentaryItem[]}> => {
    try {
      // Try to get match from current matches API first
      const liveMatches = await apiService.getLiveMatches();
      const match = liveMatches.find(m => m.id === id);
      
      if (match) {
        // It's a live match, try to get ball-by-ball commentary
        try {
          const response = await fetch(`${CRICKET_API_URL}/match_info?apikey=${API_KEY}&id=${id}`);
          
          if (response.ok) {
            const matchData = await response.json();
            
            if (matchData.status === "success" && matchData.data && matchData.data.bbb) {
              // Convert API ball-by-ball data to our format
              const commentary = matchData.data.bbb.map(convertApiBallDataToCommentary).filter(Boolean);
              return { match, commentary: commentary.length > 0 ? commentary : mockData.commentary };
            }
          }
        } catch (error) {
          console.error("Error fetching match commentary:", error);
        }
        
        // If we couldn't get commentary, use mock data
        return { match, commentary: mockData.commentary };
      }
      
      // If not found in live matches or API call failed, use mock data
      return getMatchDetails(id);
    } catch (error) {
      console.error("Error fetching match details:", error);
      return getMatchDetails(id);
    }
  }
};

