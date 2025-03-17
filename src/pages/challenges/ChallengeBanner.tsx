import { Typography } from "@mui/material";
import { FaCalendar, FaCoins, FaHourglass, FaMicrophone } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import CButton from "../../components/atoms/CButton/CButton";
import { calculateDayLeft } from "../../utils/helpers/caculateDayLeft";
import { useMemo } from "react";
import ChallengeInfoItem from "./ChallengeInfoItem";
import { IChallenge } from "./types";

export interface ChallengeBannerProps {
  challenge: IChallenge;
}

const ChallengeBanner = ({ challenge }: ChallengeBannerProps) => {
  const dayLeft = useMemo(
    () => calculateDayLeft(challenge.endTime),
    [challenge.endTime]
  );

  return (
    <div>
      {challenge ? (
        <div className="p-4 rounded-2xl flex md:gap-12 gap-4 shadow-lg ">
          <img
            src={challenge.imageSrc}
            className="md:w-100 md:h-50 w-32 rounded-xl "
            alt="Challenge"
          />
          <div className="flex-1 flex flex-col justify-between items-start w-1/2 gap-4">
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
              className="line-clamp-5"
            >
              {challenge.description}
            </Typography>

            <div className="flex flex-col md:gap-4 gap-2">
              <div className="flex md:flex-row flex-col md:gap-8 gap-2 text-xs ">
                <ChallengeInfoItem
                  icon={FaCalendar}
                  value={`${challenge.startTime.toLocaleDateString(
                    "en-GB"
                  )} - ${challenge.endTime.toLocaleDateString("en-GB")}`}
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
                <ChallengeInfoItem
                  icon={FaUserGroup}
                  value={challenge.participants}
                  label={
                    challenge.participants > 1 ? "participants" : "participant"
                  }
                />
              </div>
              <div className="flex md:flex-row flex-col md:gap-8 gap-2 text-xs">
                <ChallengeInfoItem
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
            <CButton className="w-[30%]" textTransform="capitalize">
              Learn more
            </CButton>
          </div>
        </div>
      ) : (
        <>No challenge</>
      )}
    </div>
  );
};

export default ChallengeBanner;
