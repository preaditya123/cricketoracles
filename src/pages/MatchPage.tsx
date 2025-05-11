
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import MatchDetails from "@/components/MatchDetails";
import { apiService } from "@/utils/apiService";
import { aiPredictionService } from "@/utils/aiPrediction";
import { MatchProps } from "@/components/LiveMatchCard";
import { CommentaryItem } from "@/components/Commentary";
import { Skeleton } from "@/components/ui/skeleton";

const MatchPage = () => {
  const { id } = useParams<{ id: string }>();
  const [match, setMatch] = useState<MatchProps | null>(null);
  const [commentary, setCommentary] = useState<CommentaryItem[]>([]);
  const [bowlingStats, setBowlingStats] = useState<any>(null);
  const [powerplays, setPowerplays] = useState<any>(null);
  const [fallOfWickets, setFallOfWickets] = useState<any>(null);
  const [prediction, setPrediction] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) return;
        
        const [matchData, predictionData] = await Promise.all([
          apiService.getMatchDetails(id),
          aiPredictionService.getPrediction(id)
        ]);
        
        setMatch(matchData.match);
        setCommentary(matchData.commentary);
        setBowlingStats(matchData.bowlingStats);
        setPowerplays(matchData.powerplays);
        setFallOfWickets(matchData.fallOfWickets);
        setPrediction(predictionData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching match details:", error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6">
        {loading ? (
          <div className="space-y-6">
            <Skeleton className="h-64 w-full rounded-lg" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Skeleton className="h-96 md:col-span-2 rounded-lg" />
              <Skeleton className="h-96 rounded-lg" />
            </div>
          </div>
        ) : match && prediction ? (
          <MatchDetails
            match={match}
            commentary={commentary}
            bowlingStats={bowlingStats}
            powerplays={powerplays}
            fallOfWickets={fallOfWickets}
            prediction={prediction}
          />
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">Match details not found</p>
            <a href="/" className="text-cricket-green hover:underline mt-4 inline-block">
              Return to homepage
            </a>
          </div>
        )}
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-6 mt-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm text-gray-500">© 2025 CricketOracles. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MatchPage;
