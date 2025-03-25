import { Typography } from "@mui/material";
import ChallengeBanner from "./components/ChallengeBanner";
import { useMemo } from "react";
import ChallengeItem from "./components/ChallengeItem";
import { ChallengeDTO } from "../../types/dtos/challenge.dto";
import { useGetChallengeList } from "../../hooks/challenge/get-challenge.hook";

const Challenges = () => {
  const { data: challengeList = [] } = useGetChallengeList();

  const newestChallenge = useMemo(() => {
    return challengeList.reduce<ChallengeDTO | undefined>((latest, item) => {
      return !latest || item.startDate > latest.endDate ? item : latest;
    }, undefined);
  }, [challengeList]);

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
        {challengeList.map((item: ChallengeDTO) => (
          <ChallengeItem key={item._id} challenge={item} />
        ))}
      </div>
    </div>
  );
};
export default Challenges;
