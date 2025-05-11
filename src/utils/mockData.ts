import { MatchProps } from "@/components/LiveMatchCard";
import { CommentaryItem } from "@/components/Commentary";
import { BallData } from "@/types/BallData";

// Centralized mock data for consistent use across the application
export const mockData = {
  liveMatches: [
    {
      id: "match1",
      team1: {
        name: "Chennai Super Kings",
        shortName: "CSK",
        runs: 183,
        wickets: 8,
        overs: "19.4"
      },
      team2: {
        name: "Kolkata Knight Riders",
        shortName: "KKR",
        runs: 179,
        wickets: 6,
        overs: "20.0"
      },
      status: "live" as const,
      venue: "Eden Gardens, Kolkata",
      time: "14:30",
      series: "Indian Premier League 2025",
      battingTeam: "team1" as const
    }
  ],
  
  pastMatches: [
    {
      id: "past1",
      team1: {
        name: "Chennai Super Kings",
        shortName: "CSK",
        runs: 183,
        wickets: 8,
        overs: "19.4"
      },
      team2: {
        name: "Kolkata Knight Riders",
        shortName: "KKR",
        runs: 179,
        wickets: 6,
        overs: "20.0"
      },
      status: "completed" as const,
      venue: "Eden Gardens, Kolkata",
      time: "",
      series: "Indian Premier League 2025",
      result: "CSK won by 2 wickets"
    },
    {
      id: "past2",
      team1: {
        name: "Chennai Super Kings",
        shortName: "CSK",
        runs: 183,
        wickets: 8,
        overs: "19.4"
      },
      team2: {
        name: "Kolkata Knight Riders",
        shortName: "KKR",
        runs: 179,
        wickets: 6,
        overs: "20.0"
      },
      status: "completed" as const,
      venue: "Eden Gardens, Kolkata",
      time: "",
      series: "Indian Premier League 2025",
      result: "CSK won by 2 wickets"
    },
    {
      id: "past3",
      team1: {
        name: "Chennai Super Kings",
        shortName: "CSK",
        runs: 183,
        wickets: 8,
        overs: "19.4"
      },
      team2: {
        name: "Kolkata Knight Riders",
        shortName: "KKR",
        runs: 179,
        wickets: 6,
        overs: "20.0"
      },
      status: "completed" as const,
      venue: "Eden Gardens, Kolkata",
      time: "",
      series: "Indian Premier League 2025",
      result: "CSK won by 2 wickets"
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
  ],

  // Add bowler statistics based on the image provided
  bowlingStats: {
    team1: [ // KKR bowlers (bowled against CSK)
      { name: "Vaibhav Arora", overs: 3, maidens: 0, runs: 48, wickets: 3, noBalls: 0, wides: 2, economy: 16.00 },
      { name: "Moeen Ali", overs: 2, maidens: 0, runs: 23, wickets: 1, noBalls: 0, wides: 0, economy: 11.50 },
      { name: "Harshit Rana", overs: 4, maidens: 0, runs: 43, wickets: 2, noBalls: 0, wides: 1, economy: 10.80 },
      { name: "Varun Chakaravarthy", overs: 4, maidens: 0, runs: 18, wickets: 2, noBalls: 0, wides: 1, economy: 4.50 },
      { name: "Sunil Narine", overs: 4, maidens: 0, runs: 28, wickets: 0, noBalls: 0, wides: 0, economy: 7.00 },
      { name: "Andre Russell", overs: 2.4, maidens: 0, runs: 22, wickets: 0, noBalls: 0, wides: 0, economy: 8.20 }
    ],
    team2: [ // CSK bowlers (bowled against KKR)
      { name: "Khaleel Ahmed", overs: 2, maidens: 0, runs: 14, wickets: 0, noBalls: 0, wides: 1, economy: 7.00 },
      { name: "Anshul Kamboj", overs: 3, maidens: 0, runs: 38, wickets: 1, noBalls: 0, wides: 0, economy: 12.70 },
      { name: "Ashwin", overs: 3, maidens: 0, runs: 19, wickets: 0, noBalls: 0, wides: 0, economy: 6.30 },
      { name: "Noor Ahmad", overs: 4, maidens: 0, runs: 31, wickets: 4, noBalls: 0, wides: 1, economy: 7.80 },
      { name: "Ravindra Jadeja", overs: 4, maidens: 0, runs: 34, wickets: 1, noBalls: 0, wides: 0, economy: 8.50 },
      { name: "Matheesha Pathirana", overs: 4, maidens: 0, runs: 39, wickets: 0, noBalls: 0, wides: 0, economy: 9.80 }
    ]
  },
  
  powerplays: {
    team1: { // CSK powerplays
      mandatory: { overs: "0.1-6", runs: 62 }
    },
    team2: { // KKR powerplays
      mandatory: { overs: "0.1-6", runs: 67 }
    }
  },
  
  fallOfWickets: {
    team1: [ // CSK fall of wickets
      { wicket: "0-1", player: "Ayush Mhatre", over: "0.2" },
      { wicket: "25-2", player: "Devon Conway", over: "1.5" },
      { wicket: "37-3", player: "Urvil Patel", over: "2.6" },
      { wicket: "56-4", player: "Ravichandran Ashwin", over: "4.6" },
      { wicket: "60-5", player: "Ravindra Jadeja", over: "5.2" },
      { wicket: "127-6", player: "Dewald Brevis", over: "12.1" },
      { wicket: "170-7", player: "Shivam Dube", over: "18.4" },
      { wicket: "172-8", player: "Noor Ahmad", over: "18.6" }
    ],
    team2: [ // KKR fall of wickets
      { wicket: "11-1", player: "Gurbaz", over: "1.3" },
      { wicket: "69-2", player: "Narine", over: "7.1" },
      { wicket: "71-3", player: "Angkrish Raghuvanshi", over: "7.4" },
      { wicket: "103-4", player: "Ajinkya Rahane", over: "12.2" },
      { wicket: "149-5", player: "Russell", over: "16.6" },
      { wicket: "167-6", player: "Rinku Singh", over: "18.3" }
    ]
  }
};

// Match details function that works with any match ID
export const getMatchDetails = (id: string) => {
  // Find the match in live matches first, then past matches
  const match = [...mockData.liveMatches, ...mockData.pastMatches].find(m => m.id === id) 
    // If not found, return the first live match as fallback
    || mockData.liveMatches[0];
  
  return {
    match,
    commentary: mockData.commentary,
    bowlingStats: mockData.bowlingStats,
    powerplays: mockData.powerplays,
    fallOfWickets: mockData.fallOfWickets
  };
};
