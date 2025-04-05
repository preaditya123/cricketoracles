
import { MatchProps } from "@/components/LiveMatchCard";
import { CommentaryItem } from "@/components/Commentary";

// This is a mock API service that simulates fetching data from an API
export const apiService = {
  getLiveMatches: async (): Promise<MatchProps[]> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    return [
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
        status: "live",
        venue: "Melbourne Cricket Ground, Australia",
        time: "14:30",
        series: "Border-Gavaskar Trophy 2025",
        battingTeam: "team1"
      },
      {
        id: "match2",
        team1: {
          name: "England",
          shortName: "ENG",
          runs: 0,
          wickets: 0,
          overs: "0.0"
        },
        team2: {
          name: "South Africa",
          shortName: "SA",
          runs: 0,
          wickets: 0,
          overs: "0.0"
        },
        status: "upcoming",
        venue: "Lord's, London",
        time: "Tomorrow, 15:00",
        series: "Test Series 2025"
      }
    ];
  },
  
  getPastMatches: async (): Promise<MatchProps[]> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    return [
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
        status: "completed",
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
        status: "completed",
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
        status: "completed",
        venue: "Sydney Cricket Ground",
        time: "",
        series: "ODI Series 2025",
        result: "Australia won by 55 runs"
      }
    ];
  },
  
  getMatchDetails: async (id: string): Promise<{match: MatchProps, commentary: CommentaryItem[]}> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 700));
    
    // For simplicity, return the same match details regardless of ID
    const match: MatchProps = {
      id: id,
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
      status: "live",
      venue: "Melbourne Cricket Ground, Australia",
      time: "14:30",
      series: "Border-Gavaskar Trophy 2025",
      battingTeam: "team1"
    };
    
    const commentary: CommentaryItem[] = [
      {
        id: "ball1",
        over: "42.3",
        text: "Cummins to Kohli, full delivery on middle and leg, driven firmly through mid-on for a single.",
        timestamp: "14:32",
        runs: 1
      },
      {
        id: "ball2",
        over: "42.2",
        text: "Cummins to Kohli, FOUR! Beautiful shot! Slightly overpitched and Kohli drives it through the covers with impeccable timing. The ball races away to the boundary.",
        timestamp: "14:31",
        runs: 4,
        isBoundary: true
      },
      {
        id: "ball3",
        over: "42.1",
        text: "Cummins to Kohli, short of a length on off, defended back to the bowler.",
        timestamp: "14:30",
        runs: 0
      },
      {
        id: "ball4",
        over: "41.6",
        text: "Starc to Rahul, yorker on leg stump, dug out towards midwicket for a quick single.",
        timestamp: "14:28",
        runs: 1
      },
      {
        id: "ball5",
        over: "41.5",
        text: "Starc to Rahul, bouncer outside off, Rahul ducks under it comfortably.",
        timestamp: "14:27",
        runs: 0
      },
      {
        id: "ball6",
        over: "41.4",
        text: "WICKET! Starc to Pant, caught behind! Pant tries to slash a wide delivery but only manages a thick edge. Carey takes an easy catch behind the stumps.",
        timestamp: "14:26",
        isWicket: true
      },
      {
        id: "ball7",
        over: "41.3",
        text: "Starc to Pant, SIX! Monster hit! Pant steps down the track and launches the ball over long-on for a massive six!",
        timestamp: "14:25",
        runs: 6,
        isBoundary: true
      }
    ];
    
    return { match, commentary };
  }
};
