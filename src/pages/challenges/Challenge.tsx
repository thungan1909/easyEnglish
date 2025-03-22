import { Typography } from "@mui/material";
import ChallengeBanner from "./components/ChallengeBanner";
import exampleChallenge from "./constants";
import { IChallenge } from "./types";
import { useMemo } from "react";
import ChallengeItem from "./components/ChallengeItem";
import { ChallengeDTO } from "../../types/dtos/challenge.dto";

const Challenges = () => {
  const newestChallenge = useMemo(() => {
    return exampleChallenge.reduce<ChallengeDTO | undefined>((latest, item) => {
      return !latest || item.startTime > latest.startTime ? item : latest;
    }, undefined);
  }, [exampleChallenge]);

  return (
    <div className="flex flex-col mt-24 mb-48 mx-8 md:m-24 gap-4 ">
      <div>
        <Typography variant="h5" textTransform="uppercase">
          Challenges
        </Typography>
        <Typography variant="caption" className="text-gray-400">
          List of all current challenges
        </Typography>
      </div>

      {newestChallenge && <ChallengeBanner challenge={newestChallenge} />}

      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {exampleChallenge.map((item) => (
          <ChallengeItem key={item._id} challenge={item} />
        ))}
      </div>
    </div>
  );
};
export default Challenges;
