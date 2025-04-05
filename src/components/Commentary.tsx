
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface CommentaryItem {
  id: string;
  over: string;
  text: string;
  timestamp: string;
  isWicket?: boolean;
  isBoundary?: boolean;
  runs?: number;
}

interface CommentaryProps {
  commentary: CommentaryItem[];
}

const Commentary: React.FC<CommentaryProps> = ({ commentary }) => {
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
                  item.isWicket 
                    ? "bg-cricket-red/10 border-l-2 border-cricket-red" 
                    : item.isBoundary 
                      ? "bg-cricket-green/10 border-l-2 border-cricket-green" 
                      : "bg-gray-50"
                }`}
              >
                <div className="flex justify-between">
                  <span className="text-xs font-bold bg-gray-200 px-2 py-0.5 rounded-full">
                    {item.over}
                  </span>
                  <span className="text-xs text-gray-500">{item.timestamp}</span>
                </div>
                <p className="mt-2 text-sm">{item.text}</p>
                {item.runs !== undefined && !item.isWicket && (
                  <div className="mt-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      item.isBoundary 
                        ? (item.runs === 4 
                          ? "bg-blue-100 text-blue-700" 
                          : "bg-cricket-gold/20 text-yellow-700")
                        : "bg-gray-200"
                    }`}>
                      {item.runs} {item.runs === 1 ? "Run" : "Runs"}
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
