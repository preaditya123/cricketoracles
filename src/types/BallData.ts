
export interface BallData {
  ball_number: number;
  batsman: string;
  bowler: string;
  runs_scored: number;
  extras: {
    wides: number;
    no_balls: number;
    byes: number;
    leg_byes: number;
  };
  wicket: {
    is_wicket: boolean;
    dismissal_type?: string;
    player_out?: string;
    fielder?: string;
  };
  match_context: {
    current_score: {
      runs: number;
      wickets: number;
    };
    overs: number;
    target: number | null;
  };
}
