
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BallData } from "@/types/BallData";

export interface CommentaryItem {
  id: string;
  ball_data: BallData;
  text: string;
  timestamp: string;
}

interface CommentaryProps {
  commentary: CommentaryItem[];
}

const Commentary: React.FC<CommentaryProps> = ({ commentary }) => {
  const formatOver = (ballNumber: number): string => {
    const over = Math.floor(ballNumber);
    const ball = Math.round((ballNumber - over) * 10);
    return `${over}.${ball}`;
  };

  const isWicket = (ball: BallData): boolean => {
    return ball.wicket.is_wicket;
  };

  const isBoundary = (ball: BallData): boolean => {
    return ball.runs_scored === 4 || ball.runs_scored === 6;
  };

  return (
    <Card className="cricket-card h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Live Commentary</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {commentary.map((item) => (
              <div 
                key={item.id} 
                className={`p-3 rounded-md ${
                  isWicket(item.ball_data) 
                    ? "bg-cricket-red/10 border-l-2 border-cricket-red" 
                    : isBoundary(item.ball_data) 
                      ? "bg-cricket-green/10 border-l-2 border-cricket-green" 
                      : "bg-gray-50"
                }`}
              >
                <div className="flex justify-between">
                  <span className="text-xs font-bold bg-gray-200 px-2 py-0.5 rounded-full">
                    {formatOver(item.ball_data.ball_number)}
                  </span>
                  <span className="text-xs text-gray-500">{item.timestamp}</span>
                </div>
                <p className="mt-2 text-sm">{item.text}</p>
                {item.ball_data.runs_scored > 0 && !isWicket(item.ball_data) && (
                  <div className="mt-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      isBoundary(item.ball_data) 
                        ? (item.ball_data.runs_scored === 4 
                          ? "bg-blue-100 text-blue-700" 
                          : "bg-cricket-gold/20 text-yellow-700")
                        : "bg-gray-200"
                    }`}>
                      {item.ball_data.runs_scored} {item.ball_data.runs_scored === 1 ? "Run" : "Runs"}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default Commentary;
