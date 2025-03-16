import { Typography } from "@mui/material";
import { IChallenge } from "./Challenge";
import { FaCoins, FaHourglass, FaMicrophone } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { calculateDayLeft } from "../../utils/helpers/caculateDayLeft";
import { useMemo } from "react";
import ChallengeInfoItem from "./ChallengeInfoItem";

export interface ChallengeItemProps {
  challenge: IChallenge;
}

const ChallengeItem = ({ challenge }: ChallengeItemProps) => {
  const dayLeft = useMemo(
    () => calculateDayLeft(challenge.endTime),
    [challenge.endTime]
  );

  return (
    <div className="w-full rounded-2xl flex flex-col p-3 shadow-lg">
      <img
        src={challenge.imageSrc}
        className="w-full h-32 md:h-40 lg:h-48 rounded-xl"
      />
      <div className="flex flex-col gap-4">
        <Typography variant="subtitle1" className="line-clamp-1">
          {challenge.title}
        </Typography>
        <div className="flex gap-8 text-xs">
          <ChallengeInfoItem
            icon={FaMicrophone}
            value={challenge.podcastCount}
            label={challenge.podcastCount > 1 ? "podcasts" : "podcast"}
          />
          <ChallengeInfoItem
            icon={FaHourglass}
            value={
              dayLeft > 0
                ? `${dayLeft} ${dayLeft > 1 ? "days" : "day"} left`
                : "Expired"
            }
            color={dayLeft > 0 ? "text-green-500" : "text-red-500"}
          />
        </div>
        <Typography variant="caption" className="text-gray-500 line-clamp-2">
          {challenge.description}
        </Typography>
        <div className="flex gap-8 text-xs">
          <ChallengeInfoItem
            icon={FaUserGroup}
            value={challenge.participants}
            label={challenge.participants > 1 ? "participants" : "participant"}
          />
          <div className="flex gap-1 items-center">
            <FaCoins />
            <span className="text-green-500">+{challenge.coin}</span>
            <span>/</span>
            <span className="text-red-500">-{challenge.fee}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeItem;
