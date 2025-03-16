import { Typography } from "@mui/material";
import ChallengeBanner from "./ChallengeBanner";
import exampleChallenge from "./constants";
import ChallengeItem from "./ChallengeItem";
import { IChallenge } from "./types";
import { useMemo } from "react";

const Challenges = () => {
  // Handle call API get array challenge list
  // find 1 newest challenge to show challenge banner

  const newestChallenge = useMemo(() => {
    return exampleChallenge.reduce<IChallenge | undefined>((latest, item) => {
      return !latest || item.startTime > latest.startTime ? item : latest;
    }, undefined);
  }, [exampleChallenge]);

  return (
    <div className="flex flex-col mt-24 md:mx-48 mx-8 gap-8">
      <div>
        <Typography variant="h6">Challenges</Typography>
        <Typography variant="caption" className="text-gray-400">
          List of all current challenges
        </Typography>
      </div>

      {/* Render the newest challenge in the banner if available */}
      {newestChallenge && <ChallengeBanner challenge={newestChallenge} />}

      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {exampleChallenge.map((item) => (
          <ChallengeItem key={item.id} challenge={item} />
        ))}
      </div>
    </div>
  );
};
export default Challenges;
