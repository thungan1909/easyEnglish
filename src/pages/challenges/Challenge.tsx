import { Typography } from "@mui/material";
import ChallengeBanner from "./components/ChallengeBanner";
import exampleChallenge from "./constants";
import { IChallenge } from "./types";
import { useMemo } from "react";
import ChallengeItem from "./components/ChallengeItem";

const Challenges = () => {
  const newestChallenge = useMemo(() => {
    return exampleChallenge.reduce<IChallenge | undefined>((latest, item) => {
      return !latest || item.startTime > latest.startTime ? item : latest;
    }, undefined);
  }, [exampleChallenge]);

  return (
    <div className="flex flex-col mt-24 md:mx-42 mx-8 gap-8">
      <div>
        <Typography variant="h6">Challenges</Typography>
        <Typography variant="caption" className="text-gray-400">
          List of all current challenges
        </Typography>
      </div>

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
