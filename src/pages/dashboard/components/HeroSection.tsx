import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settingSlider } from "../const";
import { FaMicrophone } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { Typography } from "@mui/material";
import CIconTextItem from "../../../components/molecules/cIconTextItem/cIconTextItem";
import { LessonDTO } from "../../../types/dtos/lesson.dto";
import NoDataSection from "../../common-pages/NoDataSection";

export interface HeroSectionProps {
  lessons: LessonDTO[];
}

const HeroSection = ({ lessons }: HeroSectionProps) => {
  return (
    <div className="min-h-80 cursor-pointer">
      <Slider {...settingSlider}>
        {lessons.length > 0 ? (
          lessons.map((lesson) => (
            <div
              key={lesson._id}
              className="relative flex w-full h-80 overflow-hidden "
            >
              <img
                src={
                  typeof lesson?.imageFile === "string" ? lesson.imageFile : ""
                }
                alt={lesson.title}
                className="absolute inset-0 object-cover w-full h-full rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-red-400 to-transparent rounded-2xl" />

              <div className="relative text-white flex flex-col justify-between h-full p-6 space-y-28">
                <Typography className="max-w-[80%] line-clamp-2" variant="h3">
                  {lesson.title}
                </Typography>
                <Typography
                  variant="body2"
                  className="max-w-[80%] line-clamp-3"
                >
                  {lesson.description}
                </Typography>

                <div className="flex items-center space-x-8 text-xs">
                  <CIconTextItem
                    icon={FaMicrophone}
                    value={lesson.listenCount}
                    label={lesson.listenCount > 1 ? "podcasts" : "podcast"}
                  />
                  <CIconTextItem
                    icon={FaUserGroup}
                    value={lesson.listenCount}
                    label={
                      lesson.listenCount > 1 ? "participants" : "participant"
                    }
                  />
                  {/* <CIconTextItem
                  icon={FaHourglass}
                  iconSize={16}
                  value={slide.stats.daysLeft}
                  label={slide.stats.daysLeft > 1 ? "days left" : "day left"}
                /> */}
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
