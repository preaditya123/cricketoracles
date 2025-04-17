
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface TeamScore {
  name: string;
  shortName: string;
  runs: number;
  wickets: number;
  overs: string;
}

export interface MatchProps {
  id: string;
  team1: TeamScore;
  team2: TeamScore;
  status: "live" | "completed";
  venue: string;
  time: string;
  series: string;
  result?: string;
  battingTeam?: "team1" | "team2";
  isFromApi?: boolean; // New flag to indicate if data is from real API
}

const LiveMatchCard: React.FC<MatchProps> = ({
  id,
  team1,
  team2,
  status,
  venue,
  time,
  series,
  result,
  battingTeam,
  isFromApi = false
}) => {
  const getStatusClass = () => {
    switch (status) {
      case "live":
        return "status-live";
      case "completed":
        return "status-completed";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "live":
        return "LIVE";
      case "completed":
        return "COMPLETED";
    }
  };

  return (
    <Link to={`/match/${id}`}>
      <Card className="cricket-card h-full">
        <CardContent className="pt-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-500">{series}</span>
            <div className="flex items-center space-x-2">
              {isFromApi && (
                <Badge variant="outline" className="bg-blue-50 text-blue-600 text-xs border-blue-200">
                  API
                </Badge>
              )}
              <span className={getStatusClass()}>{getStatusText()}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 bg-cricket-gray rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">{team1.shortName}</span>
                </div>
                <span className="team-name text-sm">{team1.name}</span>
              </div>
              <div className="flex items-center">
                <span className={`score text-sm font-medium ${battingTeam === "team1" ? "text-cricket-red" : ""}`}>
                  {`${team1.runs}/${team1.wickets}`}
                </span>
                <span className="text-xs text-gray-500 ml-1">
                  {battingTeam === "team1" ? `(${team1.overs})` : ""}
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 bg-cricket-gray rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">{team2.shortName}</span>
                </div>
                <span className="team-name text-sm">{team2.name}</span>
              </div>
              <div className="flex items-center">
                <span className={`score text-sm font-medium ${battingTeam === "team2" ? "text-cricket-red" : ""}`}>
                  {`${team2.runs}/${team2.wickets}`}
                </span>
                <span className="text-xs text-gray-500 ml-1">
                  {battingTeam === "team2" ? `(${team2.overs})` : ""}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-2 pb-2">
          <div className="w-full">
            <p className="text-xs text-gray-500">{venue}</p>
            {result && <p className="text-sm font-medium mt-1">{result}</p>}
            {status === "live" && (
              <Badge variant="outline" className="mt-2 bg-cricket-green/10 text-cricket-green border-cricket-green">
                Watch Live
              </Badge>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default LiveMatchCard;
