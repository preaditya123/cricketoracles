
import { MatchProps } from "@/components/LiveMatchCard";
import { CommentaryItem } from "@/components/Commentary";
import { BallData } from "@/types/BallData";

// Helper to generate unique IDs
const generateId = () => Math.random().toString(36).substring(2, 11);

// Convert CricAPI match data to our MatchProps format
export const convertApiDataToMatchProps = (apiMatch: any): MatchProps | null => {
  try {
    if (!apiMatch || !apiMatch.teams || apiMatch.teams.length < 2) {
      return null;
    }

    // Extract team names
    const team1Name = apiMatch.teams[0];
    const team2Name = apiMatch.teams[1];
    
    // Extract score data - this varies based on the API structure
    // This is a simplified approach; real implementation would need to handle different formats
    const team1Score = apiMatch.score?.[0] || { r: 0, w: 0, o: "0.0" };
    const team2Score = apiMatch.score?.[1] || { r: 0, w: 0, o: "0.0" };
    
    // Determine match status
    const isLive = apiMatch.matchStarted && !apiMatch.matchEnded;
    
    // Determine batting team (simplified logic)
    const battingTeamIndex = apiMatch.score?.[0]?.inning?.includes("Inning 1") ? "team1" : 
                            apiMatch.score?.[1]?.inning?.includes("Inning 1") ? "team2" : undefined;

    return {
      id: apiMatch.id || generateId(),
      team1: {
        name: team1Name,
        shortName: getTeamShortName(team1Name),
        runs: team1Score.r || 0,
        wickets: team1Score.w || 0,
        overs: team1Score.o || "0.0"
      },
      team2: {
        name: team2Name,
        shortName: getTeamShortName(team2Name),
        runs: team2Score.r || 0,
        wickets: team2Score.w || 0,
        overs: team2Score.o || "0.0"
      },
      status: isLive ? "live" : "completed",
      venue: apiMatch.venue || "",
      time: new Date(apiMatch.dateTimeGMT).toLocaleTimeString(),
      series: apiMatch.name || "",
      result: apiMatch.status || "",
      battingTeam: battingTeamIndex
    };
  } catch (error) {
    console.error("Error converting API match data:", error);
    return null;
  }
};

// Convert CricAPI ball-by-ball data to our CommentaryItem format
export const convertApiBallDataToCommentary = (ballData: any): CommentaryItem | null => {
  try {
    if (!ballData) return null;
    
    // Convert API ball format (e.g., over:0, ball:3) to our decimal format (0.3)
    const ballNumber = ballData.over + (ballData.ball / 10);
    
    // Extract wicket information if available
    const isWicket = ballData.wicket === true;
    
    // Extract current score from ball data
    // This is simplified; real implementation might need to calculate based on previous balls
    const currentRuns = ballData.score?.runs || ballData.runs || 0;
    const currentWickets = ballData.score?.wickets || (isWicket ? 1 : 0);
    
    // Convert to our BallData format
    const convertedBallData: BallData = {
      ball_number: ballNumber,
      batsman: ballData.batsman?.name || "Batsman",
      bowler: ballData.bowler?.name || "Bowler",
      runs_scored: ballData.runs || 0,
      extras: {
        wides: ballData.extras?.wides || 0,
        no_balls: ballData.extras?.noballs || 0,
        byes: ballData.extras?.byes || 0,
        leg_byes: ballData.extras?.legbyes || 0
      },
      wicket: {
        is_wicket: isWicket,
        dismissal_type: ballData.wicketType || undefined,
        player_out: isWicket ? ballData.batsman?.name : undefined,
        fielder: ballData.fielder?.name || undefined
      },
      match_context: {
        current_score: {
          runs: currentRuns,
          wickets: currentWickets
        },
        overs: ballNumber,
        target: ballData.target || null
      }
    };
    
    // Generate basic commentary text based on ball data
    let commentaryText = "";
    if (isWicket) {
      commentaryText = `WICKET! ${convertedBallData.bowler} to ${convertedBallData.batsman}, out ${ballData.wicketType || ""}!`;
    } else if (ballData.runs === 4) {
      commentaryText = `FOUR! ${convertedBallData.bowler} to ${convertedBallData.batsman}, beautiful shot for a boundary.`;
    } else if (ballData.runs === 6) {
      commentaryText = `SIX! ${convertedBallData.bowler} to ${convertedBallData.batsman}, massive hit over the boundary!`;
    } else {
      commentaryText = `${convertedBallData.bowler} to ${convertedBallData.batsman}, ${ballData.runs} run${ballData.runs !== 1 ? 's' : ''}.`;
    }
    
    return {
      id: generateId(),
      ball_data: convertedBallData,
      text: commentaryText,
      timestamp: new Date().toLocaleTimeString()
    };
  } catch (error) {
    console.error("Error converting API ball data:", error);
    return null;
  }
};

// Helper function to get team short name
function getTeamShortName(teamName: string): string {
  // Common team mappings
  const teamMappings: Record<string, string> = {
    "India": "IND",
    "Australia": "AUS",
    "England": "ENG",
    "Pakistan": "PAK",
    "South Africa": "SA",
    "New Zealand": "NZ",
    "West Indies": "WI",
    "Sri Lanka": "SL",
    "Bangladesh": "BAN",
    "Afghanistan": "AFG",
    "Zimbabwe": "ZIM",
    "Ireland": "IRE",
    "Mumbai Indians": "MI",
    "Chennai Super Kings": "CSK",
    "Royal Challengers Bangalore": "RCB",
    "Kolkata Knight Riders": "KKR",
    "Delhi Capitals": "DC",
    "Sunrisers Hyderabad": "SRH",
    "Punjab Kings": "PBKS",
    "Rajasthan Royals": "RR"
  };
  
  // Try to find in mappings, otherwise take first letter of each word
  return teamMappings[teamName] || teamName.split(" ").map(word => word.charAt(0)).join("");
}

