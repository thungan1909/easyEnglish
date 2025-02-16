import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { exampleSlides, settingSlider } from '../const';

const HeroSection = () => {
    return (
        <div className="relative h-80 shadow-md rounded-lg w-full md:w-[480px] lg:w-[600px] xl:w-[720px]">
            <Slider {...settingSlider}>
                {exampleSlides.map((slide) => (
                    <div key={slide.title} className="relative w-180 h-80 z-10 bg-white shadow-md rounded-lg p-6 flex">
                        <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                        <div className="absolute inset-0 bg-gradient-to-r from-red-300 via-red-400 to-transparent"></div>

                        <div className="relative z-10 text-white p-3">
                            <h1 className="text-xl lg:text-2xl font-bold">
                                {slide.title}
                            </h1>
                            <p className="mt-8 text-sm lg:text-base">
                                {slide.description}
                            </p>
                            <div className="mt-8 flex items-center space-x-4 text-xs lg:text-sm">
                                <span>🎙️ {slide.stats.numberPodcast} podcasts</span>
                                <span>👥 {slide.stats.numberParticipant} participant</span>
                                <span>⏳ {slide.stats.daysLeft} days left</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default HeroSection