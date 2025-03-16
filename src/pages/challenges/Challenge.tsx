import { Typography } from "@mui/material";
import ChallengeBanner from "./ChallengeBanner";
import exampleChallenge from "./constants";

export interface IChallenge {
  title: string;
  description: string;
  imageSrc: string;
  startTime: Date;
  endTime: Date;
  timeLeft?: number;
  participants: number;
  podcastCount: number;
  coin: number;
  fee: number;
}

const Challenges = () => {
  console.log("Challenges");

  // Handle call API get array challenge list
  // find 1 newest challenge to show challenge banner

  const getNewestChallenge = () => {
    let newestChallenge: IChallenge | undefined = undefined;
    exampleChallenge.forEach((item) => {
      if (!newestChallenge || item.startTime > newestChallenge.startTime) {
        newestChallenge = item;
      }
    });

    return newestChallenge;
  };

  console.log(getNewestChallenge());

  return (
    <div className="flex flex-col mt-24 md:m-20 gap-8">
      <div>
        <Typography variant="h6">Challenges</Typography>
        <Typography variant="caption" className="text-gray-400">
          List of all current challenges
        </Typography>
      </div>
      {getNewestChallenge && (
        <ChallengeBanner challenge={getNewestChallenge()} />
      )}
    </div>
  );
};
export default Challenges;
