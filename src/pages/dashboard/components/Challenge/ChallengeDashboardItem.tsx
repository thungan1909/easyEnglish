import { useNavigate } from "react-router-dom";
import { ChallengeDTO } from "../../../../types/dtos/challenge.dto";
import { ROUTES_CONSTANTS } from "../../../../routers/constants";
import { Typography } from "@mui/material";
import CIconTextItem from "../../../../components/molecules/cIconTextItem/cIconTextItem";
import { FaHourglass, FaMicrophone } from "react-icons/fa";

export interface ChallengeItemProps {
  challenge: ChallengeDTO;
}

const ChallengeDashboardItem = ({ challenge }: ChallengeItemProps) => {
  const navigate = useNavigate();

  const handleClickOnChallengeItem = () => {
    navigate(ROUTES_CONSTANTS.CHALLENGE.DETAIL.replace(":id", challenge._id));
  };

  return (
    <div
      className="w-full flex flex-col shadow rounded-2xl bg-white p-4"
      onClick={handleClickOnChallengeItem}
    >
      <img
        src={challenge.imageFile}
        className="h-32 rounded-2xl object-cover"
      />
      <div className="flex flex-col gap-4">
        <Typography variant="subtitle1" className="line-clamp-1">
          {challenge.title}
        </Typography>
        <div className="md:flex text-xs justify-between">
          <CIconTextItem
            icon={FaMicrophone}
            value={challenge.lessons.length || 0}
            label={challenge.lessons.length > 1 ? "podcasts" : "podcast"}
          />
          <CIconTextItem
            icon={FaHourglass}
            value={
              challenge?.timeLeft && challenge.timeLeft > 0
                ? `${Math.ceil(challenge.timeLeft / 24)} ${
                    Math.ceil(challenge.timeLeft / 24) > 1 ? "days" : "day"
                  } left`
                : "Expired"
            }
            color={
              challenge?.timeLeft && challenge.timeLeft > 0
                ? "text-green-500"
                : "text-red-500"
            }
          />
        </div>
        <Typography variant="caption" className="text-gray-500 line-clamp-2">
          {challenge.description}
        </Typography>
      </div>
    </div>
  );
};

export default ChallengeDashboardItem;
