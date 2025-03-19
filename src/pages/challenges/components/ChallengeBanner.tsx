import { Typography } from "@mui/material";
import { FaCalendar, FaCoins, FaHourglass, FaMicrophone } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import CButton from "../../../components/atoms/CButton/CButton";
import { calculateDayLeft } from "../../../utils/helpers/caculateDayLeft";
import { useMemo } from "react";
import { IChallenge } from "../types";
import CIconTextItem from "../../../components/molecules/cIconTextItem/cIconTextItem";

export interface ChallengeBannerProps {
  challenge: IChallenge;
}

const ChallengeBanner = ({ challenge }: ChallengeBannerProps) => {
  const dayLeft = useMemo(
    () => calculateDayLeft(challenge.endTime),
    [challenge.endTime]
  );

  return (
    <div className="flex md:gap-12 gap-4 p-4 shadow rounded-2xl bg-white">
      <img
        src={challenge.imageSrc}
        className="md:w-96 md:h-48 w-32"
        alt="Challenge Banner"
      />
      <div className="flex flex-col justify-between items-start w-1/2 gap-4">
        <Typography
          sx={{
            typography: { xs: "body1", md: "h5" },
          }}
        >
          {challenge.title}
        </Typography>
        <Typography
          sx={{
            typography: { xs: "caption", md: "body2" },
          }}
          className="line-clamp-3 text-gray-500"
        >
          {challenge.description}
        </Typography>

        <div className="flex flex-col md:gap-4 gap-2">
          <div className="flex md:flex-row flex-col md:gap-8 gap-2 text-xs">
            <CIconTextItem
              icon={FaCalendar}
              value={`${challenge.startTime.toLocaleDateString(
                "en-GB"
              )} - ${challenge.endTime.toLocaleDateString("en-GB")}`}
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
            <CIconTextItem
              icon={FaUserGroup}
              value={challenge.participants}
              label={
                challenge.participants > 1 ? "participants" : "participant"
              }
            />
          </div>
          <div className="flex md:flex-row flex-col md:gap-8 gap-2 text-xs">
            <CIconTextItem
              icon={FaMicrophone}
              value={challenge.podcastCount}
              label={challenge.podcastCount > 1 ? "podcasts" : "podcast"}
            />
            <div className="flex gap-1 items-center">
              <FaCoins />
              <span className="text-green-500">+{challenge.coin}</span>
              <span>/</span>
              <span className="text-red-500">-{challenge.fee}</span>
            </div>
          </div>
        </div>
        <CButton textTransform="capitalize">Learn more</CButton>
      </div>
    </div>
  );
};

export default ChallengeBanner;
