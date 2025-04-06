
import { BallData } from "@/types/BallData";

// This is a mock AI prediction service that simulates generating predictions

interface PredictionResult {
  team1: {
    name: string;
    shortName: string;
    winProbability: number;
    predictedScore?: string;
  };
  team2: {
    name: string;
    shortName: string;
    winProbability: number;
    predictedScore?: string;
  };
  predictedWinner: string;
  analysis: string;
}

export const aiPredictionService = {
  getPrediction: async (matchId: string): Promise<PredictionResult> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    // In a real app, this would call an AI model API
    // For now, return mock predictions
    return {
      team1: {
        name: "India",
        shortName: "IND",
        winProbability: 65,
        predictedScore: "342/7 (50)"
      },
      team2: {
        name: "Australia",
        shortName: "AUS",
        winProbability: 35,
        predictedScore: "315/9 (50)"
      },
      predictedWinner: "India",
      analysis: "Based on current form, pitch conditions, and head-to-head records, India has a higher probability of winning this match. Their strong batting lineup and in-form bowlers give them an edge over Australia in these conditions."
    };
  },
  
  generateCommentary: async (ballData: BallData): Promise<string> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    // In a real app, this would call an AI model API
    // For now, return mock commentary based on ball update
    if (ballData.wicket.is_wicket) {
      return `The batsman ${ballData.batsman} tried to play an ambitious shot but couldn't connect properly. The fielder took a comfortable catch. A crucial wicket at this stage of the game!`;
    } else if (ballData.runs_scored === 4) {
      return `Beautiful shot by ${ballData.batsman}! Perfect timing and placement in the gap between cover and point. The ball races away to the boundary for FOUR!`;
    } else if (ballData.runs_scored === 6) {
      return `MASSIVE HIT from ${ballData.batsman}! Clears the front leg and smashes it over long-on. That's gone all the way for SIX! The crowd is loving it!`;
    } else if (ballData.runs_scored === 0) {
      return `Good delivery from ${ballData.bowler}, right on the spot. ${ballData.batsman} defends it watchfully back to the bowler.`;
    } else {
      return `${ballData.batsman} works it into the gap off ${ballData.bowler} for ${ballData.runs_scored} run${ballData.runs_scored > 1 ? 's' : ''}.`;
    }
  }
};
