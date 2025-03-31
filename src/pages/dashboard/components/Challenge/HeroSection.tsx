import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settingSlider } from "../../const";
import { FaHourglass, FaMicrophone } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { Typography } from "@mui/material";
import CIconTextItem from "../../../../components/molecules/cIconTextItem/cIconTextItem";
import NoDataSection from "../../../common-pages/NoDataSection";
import { ChallengeDTO } from "../../../../types/dtos/challenge.dto";
import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../../../routers/constants";

export interface HeroSectionProps {
  challenges: ChallengeDTO[];
}

const HeroSection = ({ challenges }: HeroSectionProps) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-80 cursor-pointer">
      <Slider {...settingSlider}>
        {challenges.length > 0 ? (
          challenges.map((challenge) => (
            <div
              key={challenge._id}
              className="relative flex w-full h-80 overflow-hidden "
              onClick={() =>
                navigate(
                  ROUTES_CONSTANTS.CHALLENGE.DETAIL.replace(
                    ":id",
                    challenge._id
                  )
                )
              }
            >
              <img
                src={
                  typeof challenge?.imageFile === "string"
                    ? challenge.imageFile
                    : ""
                }
                alt={challenge.title}
                className="absolute inset-0 object-cover w-full h-full rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-red-400 to-transparent rounded-2xl" />

              <div className="relative text-white flex flex-col justify-between h-full p-6 space-y-28">
                <Typography className="max-w-[80%] line-clamp-2" variant="h3">
                  {challenge.title}
                </Typography>
                <Typography
                  variant="body2"
                  className="max-w-[80%] line-clamp-3"
                >
                  {challenge.description}
                </Typography>

                <div className="flex items-center space-x-8 text-xs">
                  <CIconTextItem
                    icon={FaMicrophone}
                    value={challenge.lessons?.length}
                    label={challenge.lessons.length > 1 ? "lessons" : "lesson"}
                  />
                  <CIconTextItem
                    icon={FaUserGroup}
                    value={challenge.participants.length}
                    label={
                      challenge.participants.length > 1
                        ? "participants"
                        : "participant"
                    }
                  />
                  <CIconTextItem
                    icon={FaHourglass}
                    value={
                      challenge?.timeLeft && challenge.timeLeft > 0
                        ? `${Math.ceil(challenge.timeLeft / 24)} ${
                            Math.ceil(challenge.timeLeft / 24) > 1
                              ? "days"
                              : "day"
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
              </div>
            </div>
          ))
        ) : (
          <NoDataSection />
        )}
      </Slider>
    </div>
  );
};
export default HeroSection;
