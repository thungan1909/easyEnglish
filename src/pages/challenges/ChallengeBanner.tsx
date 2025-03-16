import { Typography } from "@mui/material";
import { IChallenge } from "./Challenge";
import {
  FaCalendar,
  FaCoins,
  FaGlassCheers,
  FaHourglass,
  FaMicroblog,
  FaMicrophone,
} from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import CButton from "../../components/atoms/CButton/CButton";

export interface ChallengeBannerProps {
  challenge?: IChallenge;
}
const ChallengeBanner = ({ challenge }: ChallengeBannerProps) => {
  console.log(challenge);

  const dayleft = challenge
    ? Math.ceil(
        (challenge.endTime.getTime() - new Date().getTime()) /
          (1000 * 60 * 60 * 24)
      )
    : 0;
  return (
    <div>
      {challenge ? (
        <div className=" p-4 rounded-2xl flex gap-12 shadow-2xl">
          <img src={challenge.imageSrc} className="h-50 w-100 rounded-2xl" />
          <div className="flex flex-col gap-4">
            <Typography variant="h5">{challenge.title}</Typography>
            <Typography variant="caption" className="text-gray-500">
              {challenge.description}
            </Typography>
            <div className="flex gap-8 text-xs">
              <div className="flex gap-1 items-center">
                <FaCalendar />
                {challenge.startTime.toLocaleDateString("en-GB")}
                <span>-</span>
                {challenge.endTime.toLocaleDateString("en-GB")}
              </div>
              <div className="flex gap-1 items-center">
                <FaHourglass />

                {dayleft > 0 ? (
                  <span className="text-green-500">
                    {dayleft} {dayleft > 1 ? "days" : "day"} left
                  </span>
                ) : (
                  <span className="text-red-500">Expired</span>
                )}
              </div>
              <div className="flex gap-1 items-center">
                <FaUserGroup />
                {challenge.participants}
                <span>
                  {challenge.participants > 1 ? "participants" : "participant"}
                </span>
              </div>
            </div>
            <div className="flex gap-8 text-xs mb-8">
              <div className="flex gap-1 items-center">
                <FaMicrophone />
                {challenge.podcastCount}
                <span>
                  {challenge.podcastCount > 1 ? "podcasts" : "podcast"}
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <FaCoins />
                <span className="text-green-500">+{challenge.coin}</span>
                <span>/</span>
                <span className="text-red-500">-{challenge.fee}</span>
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
