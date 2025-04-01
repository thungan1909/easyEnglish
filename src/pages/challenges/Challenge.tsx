import ChallengeBanner from "./components/ChallengeBanner";
import { useMemo } from "react";
import ChallengeItem from "./components/ChallengeItem";
import { ChallengeDTO } from "../../types/dtos/challenge.dto";
import { useGetChallengeList } from "../../hooks/challenge/get-challenge.hook";
import CPageTitle from "../../components/atoms/CPageTitle/CPageTitle";

const Challenges = () => {
  const { data: challengeList = [] } = useGetChallengeList();

  const newestChallenge = useMemo(() => {
    return challengeList.reduce<ChallengeDTO | undefined>((latest, item) => {
      return !latest || item.startDate > latest.endDate ? item : latest;
    }, undefined);
  }, [challengeList]);

  return (
    <div className="flex flex-col gap-4">
      <CPageTitle
        title="Challenges"
        titleDescription="List of all current challenges"
      />

      {newestChallenge && <ChallengeBanner challenge={newestChallenge} />}

      <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
        {challengeList.map((item: ChallengeDTO) => (
          <ChallengeItem challenge={item} type="default" key={item._id} />
        ))}
      </div>
    </div>
  );
};
export default Challenges;
