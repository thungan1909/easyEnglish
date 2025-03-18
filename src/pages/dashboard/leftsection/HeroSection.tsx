import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { exampleSlides, settingSlider } from "../const";
import { FaHourglass, FaMicrophone } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <div className=" min-h-80 cursor-pointer ">
      <Slider {...settingSlider}>
        {exampleSlides.map((slide) => (
          <div
            key={slide.title}
            className="relative flex w-full h-80 -2xl overflow-hidden "
          >
            <img
              src={slide.image}
              alt={slide.title}
              decoding="async"
              className="absolute inset-0 object-cover w-full h-full rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-red-400 to-transparent rounded-2xl" />

            <div className="relative text-white flex flex-col justify-between h-full p-6 space-y-28">
              <Typography
                className="text-xl font-bold max-w-[80%] line-clamp-2"
                variant="h3"
              >
                {slide.title}
              </Typography>
              <Typography variant="body2" className="text-sm">
                {slide.description}
              </Typography>

              <div className="flex items-center space-x-8 text-xs">
                <span className="flex items-center space-x-1">
                  <FaMicrophone aria-hidden="true" />
                  <span>{slide.stats.numberPodcast}</span>
                  <span>
                    {slide.stats.numberPodcast > 1 ? "podcasts" : "podcast"}
                  </span>
                </span>
                <span className="flex items-center space-x-1">
                  <FaUserGroup aria-hidden="true" />
                  <span>{slide.stats.numberParticipant}</span>
                  <span>
                    {slide.stats.numberParticipant > 1
                      ? "participants"
                      : "participant"}
                  </span>
                </span>
                <span className="flex items-center space-x-1">
                  <FaHourglass aria-hidden="true" />
                  <span>{slide.stats.daysLeft}</span>
                  <span>
                    {slide.stats.daysLeft > 1 ? "days left" : "day left"}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default HeroSection;
