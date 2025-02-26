import {
  FaBars,
  FaBell,
  FaChartBar,
  FaCoins,
  FaFire,
  FaPlusCircle,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { ROUTES_CONSTANTS } from "../routers/constants";
import CButton from "./atoms/CButton/CButton";
import { useLogoutMutation } from "../apis/hooks/auth.hook";

interface NavbarProps {
  isAuth: boolean;
}

const Navbar = ({ isAuth }: NavbarProps) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const { mutate: logoutMutation } = useLogoutMutation();
  const handleLogout = () => {
    logoutMutation({});
  };

  return (
    <nav className="flex items-center shadow-md px-6 py-3 fixed  top-0 w-full backdrop-blur-md bg-white z-50 h-16 space-x-4">
      {/* Left Section - Logo & Navigation */}
      <div className="flex items-center gap-x-6">
        {/* Logo */}
        <img src={logo} alt="EasyEnglish logo" className="h-8" />

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-x-6 text-gray-700 font-semibold">
          <li className="text-purple-500 cursor-pointer">Home</li>
          <li className="cursor-pointer hover:text-purple-500 transition">
            Podcasts
          </li>
          <li className="cursor-pointer hover:text-purple-500 transition">
            Challenges
          </li>
          <li className="cursor-pointer hover:text-purple-500 transition">
            Classes
          </li>
          <li className="flex items-center cursor-pointer hover:text-purple-500 transition">
            More <IoMdArrowDropdown className="ml-1" />
          </li>
        </ul>

        {/* Hamburger Icon - Mobile */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}

          {menuOpen ? (
            <div className="flex flex-col bg-purple-300 relative top-20 w-40  items-center">
              <ul className="gap-x-6 text-gray-700 font-semibold">
                <li className="text-purple-500 cursor-pointer">Home</li>
                <li className="cursor-pointer hover:text-purple-500 transition">
                  Podcasts
                </li>
                <li className="cursor-pointer hover:text-purple-500 transition">
                  Challenges
                </li>
                <li className="cursor-pointer hover:text-purple-500 transition">
                  Classes
                </li>
                <li className="flex items-center cursor-pointer hover:text-purple-500 transition text-center">
                  More <IoMdArrowDropdown className="ml-1" />
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>

      {/* Middle - Search Bar */}
      <div className="relative invisible md:visible">
        <input
          type="text"
          placeholder="Search something..."
          className="bg-gray-100 rounded-full px-4 py-2 pl-10 text-sm outline-none focus:ring-2 focus:ring-purple-300"
        />
        <FaSearch className="absolute left-3 top-2 text-gray-500" />
      </div>
      {isAuth ? (
        <div className="absolute right-0 flex items-center space-x-4 mr-4">
          <CButton
            startIcon={<FaPlusCircle />}
            className="invisible md:visible !mr-3 !normal-case space-x-1.5"
            onClick={() => {
              navigate(ROUTES_CONSTANTS.LESSON.ADD_NEW);
            }}
          >
            <span> Add new</span>
          </CButton>
          <CButton
            className="!mr-3 !normal-case space-x-1.5"
            onClick={handleLogout}
          >
            <span> LOG OUT</span>
          </CButton>
          {/* Coins */}
          <div className="flex items-center space-x-1 bg-orange-100 text-orange-500 px-3 py-2 rounded-full">
            <FaCoins />
            <span className="font-semibold">100</span>
          </div>

          <div className="flex items-center space-x-1 bg-orange-100 text-orange-500 px-3 py-2 rounded-full">
            <FaFire />
            <span className="font-semibold">100</span>
          </div>

          {/* Chart & Notifications */}
          <FaChartBar className="text-gray-500 cursor-pointer hover:text-black transition" />
          <FaBell className="text-gray-500 cursor-pointer hover:text-black transition" />

          {/* Profile Button */}
          <div className="bg-pink-500 text-white px-3 py-2 rounded-full font-bold cursor-pointer hover:bg-pink-600 transition">
            DO
          </div>
        </div>
      ) : (
        <div className="absolute right-0 flex items-center mr-32 !space-x-4">
          <CButton
            className="!normal-case space-x-1.5 "
            variant="text"
            fullWidth
            onClick={() => {
              navigate(ROUTES_CONSTANTS.AUTH.LOGIN);
            }}
          >
            Login
          </CButton>

          <CButton
            className="!normal-case space-x-1.5"
            fullWidth
            onClick={() => {
              navigate(ROUTES_CONSTANTS.AUTH.REGISTER);
            }}
          >
            Register now
          </CButton>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
