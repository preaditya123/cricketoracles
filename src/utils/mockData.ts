
import { MatchProps } from "@/components/LiveMatchCard";
import { CommentaryItem } from "@/components/Commentary";
import { BallData } from "@/types/BallData";

// Centralized mock data for consistent use across the application
export const mockData = {
  liveMatches: [
    {
      id: "match1",
      team1: {
        name: "India",
        shortName: "IND",
        runs: 256,
        wickets: 4,
        overs: "42.3"
      },
      team2: {
        name: "Australia",
        shortName: "AUS",
        runs: 0,
        wickets: 0,
        overs: "0.0"
      },
      status: "live" as const,
      venue: "Melbourne Cricket Ground, Australia",
      time: "14:30",
      series: "Border-Gavaskar Trophy 2025",
      battingTeam: "team1" as const
    }
  ],
  
  pastMatches: [
    {
      id: "past1",
      team1: {
        name: "India",
        shortName: "IND",
        runs: 302,
        wickets: 8,
        overs: "50.0"
      },
      team2: {
        name: "Pakistan",
        shortName: "PAK",
        runs: 289,
        wickets: 10,
        overs: "48.4"
      },
      status: "completed" as const,
      venue: "Dubai International Stadium",
      time: "",
      series: "Asia Cup 2025",
      result: "India won by 13 runs"
    },
    {
      id: "past2",
      team1: {
        name: "New Zealand",
        shortName: "NZ",
        runs: 241,
        wickets: 10,
        overs: "50.0"
      },
      team2: {
        name: "England",
        shortName: "ENG",
        runs: 241,
        wickets: 10,
        overs: "50.0"
      },
      status: "completed" as const,
      venue: "Lord's, London",
      time: "",
      series: "ICC World Cup 2025",
      result: "Match tied, England won on boundary count"
    },
    {
      id: "past3",
      team1: {
        name: "Australia",
        shortName: "AUS",
        runs: 328,
        wickets: 7,
        overs: "50.0"
      },
      team2: {
        name: "West Indies",
        shortName: "WI",
        runs: 273,
        wickets: 10,
        overs: "46.2"
      },
      status: "completed" as const,
      venue: "Sydney Cricket Ground",
      time: "",
      series: "ODI Series 2025",
      result: "Australia won by 55 runs"
    }
  ],
  
  commentary: [
    {
      id: "ball1",
      ball_data: {
        ball_number: 42.3,
        batsman: "Virat Kohli",
        bowler: "Pat Cummins",
        runs_scored: 1,
        extras: { wides: 0, no_balls: 0, byes: 0, leg_byes: 0 },
        wicket: { is_wicket: false },
        match_context: {
          current_score: { runs: 256, wickets: 4 },
          overs: 42.3,
          target: null
        }
      },
      text: "Cummins to Kohli, full delivery on middle and leg, driven firmly through mid-on for a single.",
      timestamp: "14:32"
    },
    {
      id: "ball2",
      ball_data: {
        ball_number: 42.2,
        batsman: "Virat Kohli",
        bowler: "Pat Cummins",
        runs_scored: 4,
        extras: { wides: 0, no_balls: 0, byes: 0, leg_byes: 0 },
        wicket: { is_wicket: false },
        match_context: {
          current_score: { runs: 255, wickets: 4 },
          overs: 42.2,
          target: null
        }
      },
      text: "Cummins to Kohli, FOUR! Beautiful shot! Slightly overpitched and Kohli drives it through the covers with impeccable timing. The ball races away to the boundary.",
      timestamp: "14:31",
      isBoundary: true
    },
    {
      id: "ball3",
      ball_data: {
        ball_number: 42.1,
        batsman: "Virat Kohli",
        bowler: "Pat Cummins",
        runs_scored: 0,
        extras: { wides: 0, no_balls: 0, byes: 0, leg_byes: 0 },
        wicket: { is_wicket: false },
        match_context: {
          current_score: { runs: 251, wickets: 4 },
          overs: 42.1,
          target: null
        }
      },
      text: "Cummins to Kohli, short of a length on off, defended back to the bowler.",
      timestamp: "14:30"
    },
    {
      id: "ball4",
      ball_data: {
        ball_number: 41.6,
        batsman: "KL Rahul",
        bowler: "Mitchell Starc",
        runs_scored: 1,
        extras: { wides: 0, no_balls: 0, byes: 0, leg_byes: 0 },
        wicket: { is_wicket: false },
        match_context: {
          current_score: { runs: 251, wickets: 4 },
          overs: 41.6,
          target: null
        }
      },
      text: "Starc to Rahul, yorker on leg stump, dug out towards midwicket for a quick single.",
      timestamp: "14:28"
    },
    {
      id: "ball5",
      ball_data: {
        ball_number: 41.5,
        batsman: "KL Rahul",
        bowler: "Mitchell Starc",
        runs_scored: 0,
        extras: { wides: 0, no_balls: 0, byes: 0, leg_byes: 0 },
        wicket: { is_wicket: false },
        match_context: {
          current_score: { runs: 250, wickets: 4 },
          overs: 41.5,
          target: null
        }
      },
      text: "Starc to Rahul, bouncer outside off, Rahul ducks under it comfortably.",
      timestamp: "14:27"
    },
    {
      id: "ball6",
      ball_data: {
        ball_number: 41.4,
        batsman: "Rishabh Pant",
        bowler: "Mitchell Starc",
        runs_scored: 0,
        extras: { wides: 0, no_balls: 0, byes: 0, leg_byes: 0 },
        wicket: { 
          is_wicket: true,
          dismissal_type: "caught",
          player_out: "Rishabh Pant",
          fielder: "Alex Carey"
        },
        match_context: {
          current_score: { runs: 250, wickets: 4 },
          overs: 41.4,
          target: null
        }
      },
      text: "WICKET! Starc to Pant, caught behind! Pant tries to slash a wide delivery but only manages a thick edge. Carey takes an easy catch behind the stumps.",
      timestamp: "14:26"
    },
    {
      id: "ball7",
      ball_data: {
        ball_number: 41.3,
        batsman: "Rishabh Pant",
        bowler: "Mitchell Starc",
        runs_scored: 6,
        extras: { wides: 0, no_balls: 0, byes: 0, leg_byes: 0 },
        wicket: { is_wicket: false },
        match_context: {
          current_score: { runs: 250, wickets: 3 },
          overs: 41.3,
          target: null
        }
      },
      text: "Starc to Pant, SIX! Monster hit! Pant steps down the track and launches the ball over long-on for a massive six!",
      timestamp: "14:25"
    }
  ]
};

// Match details function that works with any match ID
export const getMatchDetails = (id: string) => {
  // Find the match in live matches first, then past matches
  const match = [...mockData.liveMatches, ...mockData.pastMatches].find(m => m.id === id) 
    // If not found, return the first live match as fallback
    || mockData.liveMatches[0];
  
  return {
    match,
    commentary: mockData.commentary
  };
};
