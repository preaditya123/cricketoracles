
import { MatchProps } from "@/components/LiveMatchCard";
import { CommentaryItem } from "@/components/Commentary";
import { mockData, getMatchDetails } from "./mockData";
import { mockCommentary } from "./mockCommentary";

// This is a mock API service that simulates fetching data from an API
export const apiService = {
  getLiveMatches: async (): Promise<MatchProps[]> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockData.liveMatches;
  },
  
  getPastMatches: async (): Promise<MatchProps[]> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockData.pastMatches;
  },
  
  getMatchDetails: async (id: string): Promise<{
    match: MatchProps, 
    commentary: CommentaryItem[],
    bowlingStats: any,
    powerplays: any,
    fallOfWickets: any
  }> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 700));
    
    // For past matches, use the detailed commentary
    if (id.startsWith("past")) {
      const details = getMatchDetails(id);
      return {
        match: details.match,
        commentary: mockCommentary,
        bowlingStats: details.bowlingStats,
        powerplays: details.powerplays,
        fallOfWickets: details.fallOfWickets
      };
    }
    
    // For live matches, use the regular commentary and details
    return getMatchDetails(id);
  }
};
