import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { exampleSlides, settingSlider } from "../const";
import { FaHourglass, FaMicrophone } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="shadow-xl rounded-lg min-h-80">
      <Slider {...settingSlider}>
        {exampleSlides.map((slide) => (
          <div
            key={slide.title}
            className="relative shadow-md rounded-lg flex w-full h-80"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 object-cover rounded-lg w-full h-full "
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-red-400 to-transparent"></div>

            <div className="relative text-white flex flex-col space-y-16 justify-between h-full p-6">
              <h1 className="text-xl font-bold max-w-[80%] line-clamp-2">
                {slide.title}
              </h1>
              <p className="text-sm">{slide.description}</p>
              <div className="flex items-center space-x-8 text-xs absolute bottom-4 left-4  ">
                <span className="flex items-center space-x-1">
                  <FaMicrophone />
                  <span>{slide.stats.numberPodcast} </span>
                  <span> podcasts</span>
                </span>
                <span className="flex items-center space-x-1">
                  <FaUserGroup />
                  <span>{slide.stats.numberParticipant} </span>
                  <span> participant</span>
                </span>
                <span className="flex items-center space-x-1">
                  <FaHourglass />
                  <span>{slide.stats.daysLeft} </span>
                  <span> days left</span>
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
