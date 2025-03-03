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
import logo from "../../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useCallback, useEffect, useState } from "react";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import CButton from "../../atoms/CButton/CButton";
import { useLogoutMutation } from "../../../apis/hooks/auth.hook";
import { menuItems } from "./const";
import { getLinkClassName } from "../../../utils/helpers/style";

interface NavbarProps {
  isAuth: boolean;
}

const Navbar = ({ isAuth }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { mutate: logoutMutation } = useLogoutMutation();

  const handleLogout = () => {
    logoutMutation({});
  };

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) {
      setMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <nav className="flex items-center shadow-md px-6 py-3 fixed  top-0 w-full backdrop-blur-md bg-white z-50 h-16 space-x-4">
      <div className="flex items-center gap-x-6">
        <img src={logo} alt="EasyEnglish logo" className="h-8" />

        <ul className="hidden md:flex gap-x-6">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={`transition ${getLinkClassName(
                  item.href,
                  location
                )}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {menuOpen && (
          <div className="absolute top-16 left-16 w-[80%] max-w-3xs bg-purple-100 shadow-lg rounded-md">
            <ul className="flex flex-col gap-y-4 text-gray-700 m-3">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`transition ${getLinkClassName(
                      item.href,
                      location
                    )}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="relative invisible md:visible ">
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
            <span> Add new lesson</span>
          </CButton>
          <CButton
            className="!mr-3 !normal-case space-x-1.5"
            onClick={handleLogout}
          >
            <span> LOG OUT</span>
          </CButton>
          {/* Coins */}
          <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-500 px-3 py-2 rounded-full">
            <FaCoins />
            <span className="font-semibold">100</span>
          </div>

          <div className="flex items-center space-x-1 bg-red-100 text-red-500 px-3 py-2 rounded-full">
            <FaFire />
            <span className="font-semibold">100</span>
          </div>

          <FaChartBar className="text-gray-500 cursor-pointer hover:text-black transition" />
          <FaBell className="text-gray-500 cursor-pointer hover:text-black transition" />

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
