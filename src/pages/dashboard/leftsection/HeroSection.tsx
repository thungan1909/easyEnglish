import banner from '../../../assets/banner-wele.png'
const HeroSection = () => {
    return (
        <div className="relative w-180 z-10 bg-white shadow-md rounded-lg p-6 flex">
            {/* Background Image */}
            <img src={banner} alt="Hero" className="absolute inset-0 w-full h-full object-cover rounded-lg" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-400 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 text-white p-4 ">
                <h1 className="text-xl lg:text-2xl font-bold">
                    Chuyến phiêu lưu của WELE the Wallaby
                </h1>
                <p className="mt-8 text-sm lg:text-base">
                    8 tập kể về hành trình của WELE từ Việt Nam qua nhiều nước Đông Nam Á.
                </p>

                {/* Stats */}
                <div className="mt-8 flex items-center space-x-4 text-xs lg:text-sm">
                    <span>🎙️ 8 podcasts</span>
                    <span>👥 182 người tham gia</span>
                    <span>⏳ Còn 137 ngày</span>
                </div>

                {/* Button */}
                <button className="mt-6 bg-white text-red-600 rounded-lg  hover:bg-gray-100 transition">
                    Tìm hiểu thêm
                </button>
            </div>

        </div>
    )
}

export default HeroSection;