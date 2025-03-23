import { Typography } from "@mui/material";
import { FaCoins, FaHourglass, FaMicrophone } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { useMemo } from "react";
import { calculateDayLeft } from "../../../utils/helpers/caculateDayLeft";
import CIconTextItem from "../../../components/molecules/cIconTextItem/cIconTextItem";
import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import { ChallengeDTO } from "../../../types/dtos/challenge.dto";

export interface ChallengeItemProps {
  challenge: ChallengeDTO;
}

const ChallengeItem = ({ challenge }: ChallengeItemProps) => {
  const navigate = useNavigate();
  const dayLeft = useMemo(
    () => calculateDayLeft(challenge.endTime),
    [challenge.endTime]
  );

  const handleClickOnChallengeItem = () => {
    navigate(ROUTES_CONSTANTS.CHALLENGE.DETAIL.replace(":id", challenge._id));
  };

  return (
    <div
      className="w-full flex flex-col shadow rounded-2xl bg-white p-4"
      onClick={handleClickOnChallengeItem}
    >
      <img
        src={challenge.imageSrc}
        className="w-full h-32 md:h-40 lg:h-48 rounded-2xl"
      />
      <div className="flex flex-col gap-4">
        <Typography variant="subtitle1" className="line-clamp-1">
          {challenge.title}
        </Typography>
        <div className="md:flex text-xs justify-between">
          <CIconTextItem
            icon={FaMicrophone}
            value={challenge.podcastCount}
            label={challenge.podcastCount > 1 ? "podcasts" : "podcast"}
          />
          <CIconTextItem
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
        <div className="md:flex text-xs justify-between">
          <CIconTextItem
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
