import {
  FaBell,
  FaChartBar,
  FaCoins,
  FaFire,
  FaPlusCircle,
  FaSearch,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center shadow-md px-6 py-3 fixed  top-0 w-full backdrop-blur-md bg-white z-50 h-16 space-x-4">
      {/* Left Section - Logo & Navigation */}
      <div className="flex items-center gap-x-6">
        {/* Logo */}
        <img src={logo} alt="EasyEnglish logo" className="h-8" />

        {/* Navigation Links */}
        <ul className="flex gap-x-6 text-gray-700 font-semibold">
          <li className="text-red-500 cursor-pointer">Home</li>
          <li className="cursor-pointer hover:text-red-500 transition">
            Podcasts
          </li>
          <li className="cursor-pointer hover:text-red-500 transition">
            Challenges
          </li>
          <li className="cursor-pointer hover:text-red-500 transition">
            Classes
          </li>
          <li className="flex items-center cursor-pointer hover:text-red-500 transition">
            More <IoMdArrowDropdown className="ml-1" />
          </li>
        </ul>
      </div>

      {/* Middle - Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search something..."
          className="bg-gray-100 rounded-full px-4 py-2 pl-10 text-sm outline-none focus:ring-2 focus:ring-red-300"
        />
        <FaSearch className="absolute left-3 top-2 text-gray-500" />
      </div>

      {/* Right Section - Icons & Profile */}
      <div className="absolute right-0 flex items-center space-x-4 mr-4">
        <button className="bg-blue-400 text-white p-3 rounded-full font-semibold flex items-center space-x-2" onClick={() => {navigate('/addnew')}}>
          <FaPlusCircle />
          <span> Add new</span>
        </button>

        {/* Coins */}
        <div className="flex items-center space-x-1 bg-orange-100 text-orange-500 px-3 py-2 rounded-full">
          <FaCoins />
          <span className="font-semibold">100</span>
        </div>

        {/* Fire Streak */}
        <div className="relative flex items center bg-red-100 text-red-500 px-4 py-2 rounded-full space-x-1">
          <FaFire />
          <span className="rounded-full font-semibold">11</span>
        </div>

        {/* Chart & Notifications */}
        <FaChartBar className="text-gray-500 cursor-pointer hover:text-black transition" />
        <FaBell className="text-gray-500 cursor-pointer hover:text-black transition" />

        {/* Profile Button */}
        <div className="bg-pink-500 text-white px-3 py-2 rounded-full font-bold cursor-pointer hover:bg-pink-600 transition">
          DO
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
