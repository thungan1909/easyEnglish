import { Typography } from "@mui/material";
import { FaCalendar, FaCoins, FaHourglass, FaMicrophone } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import CButton from "../../../components/atoms/CButton/CButton";
import CIconTextItem from "../../../components/molecules/cIconTextItem/cIconTextItem";
import { ChallengeDTO } from "../../../types/dtos/challenge.dto";

export interface ChallengeBannerProps {
  challenge: ChallengeDTO;
}

const ChallengeBanner = ({ challenge }: ChallengeBannerProps) => {
  return (
    <div className="flex gap-4 p-4 shadow rounded-2xl bg-white">
      <img
        src={challenge.imageFile}
        className="md:w-96 md:h-56 w-48 h-80 object-cover rounded-2xl"
        alt="Challenge Banner"
      />
      <div className="flex flex-col md:gap-4 gap-2 items-start w-1/2">
        <Typography
          sx={{
            typography: { xs: "body1", md: "h6" },
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
          <div className="flex md:flex-row flex-col md:gap-4 gap-2 text-xs">
            <CIconTextItem
              icon={FaCalendar}
              value={`${new Date(challenge.startDate).toLocaleDateString(
                "en-GB"
              )} - ${new Date(challenge.endDate).toLocaleDateString("en-GB")}`}
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

            <CIconTextItem
              icon={FaUserGroup}
              value={challenge.participantsCount}
              label={
                challenge.participantsCount > 1 ? "participants" : "participant"
              }
            />
          </div>

          <div className="flex md:flex-row flex-col md:gap-4 gap-2 text-xs">
            <CIconTextItem
              icon={FaMicrophone}
              value={challenge.lessons?.length || 0}
              label={challenge.lessons?.length > 1 ? "podcasts" : "podcast"}
            />
            <div className="flex gap-1 items-center">
              <FaCoins />
              <span className="text-green-500"> +{challenge?.coinAward}</span>
              <span> / </span>
              <span className="text-red-500">-{challenge?.coinFee}</span>
            </div>
          </div>
        </div>

        <CButton textTransform="capitalize" isRounded>
          Learn more
        </CButton>
      </div>
    </div>
  );
};

export default ChallengeBanner;
