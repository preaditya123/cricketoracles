
import { MatchProps } from "@/components/LiveMatchCard";
import { CommentaryItem } from "@/components/Commentary";
import { mockData, getMatchDetails } from "./mockData";

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
  
  getMatchDetails: async (id: string): Promise<{match: MatchProps, commentary: CommentaryItem[]}> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 700));
    return getMatchDetails(id);
  }
};
