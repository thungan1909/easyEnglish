import {
  FaBars,
  FaBell,
  FaCaretDown,
  FaChartBar,
  FaCoins,
  FaFire,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import logo from "../../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import CButton from "../../atoms/CButton/CButton";
import CUserProfileAvatar from "../CUserProfile/cUserProfile";
import MoreMenu from "./MoreMenu";
import { menuItems, primaryMenuItems } from "./constants";
import { getLinkClassName } from "../../../utils/activeLinkUtils";

interface NavbarProps {
  isAuth: Boolean;
}

const Navbar = ({ isAuth }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<"mobile" | "more" | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpenMenu(null);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex items-center shadow px-6 py-3 fixed top-0 w-full backdrop-blur-md bg-white z-50 h-16 space-x-4">
      <div className="flex items-center gap-x-6">
        <img src={logo} alt="EasyEnglish logo" className="h-8" />

        <ul className="hidden md:flex gap-x-6">
          {primaryMenuItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={`transition ${getLinkClassName(
                  item.href,
                  location
                )}`}
                onClick={() => setOpenMenu(null)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="relative">
            <button
              onClick={() => setOpenMenu(openMenu === "more" ? null : "more")}
              className="!text-gray-700 flex items-center"
            >
              More
              <FaCaretDown />
            </button>
            <MoreMenu
              isOpen={openMenu === "more"}
              setMoreMenuOpen={setOpenMenu}
            />
          </li>
        </ul>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpenMenu(openMenu === "mobile" ? null : "mobile")}
        >
          {openMenu === "mobile" ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {openMenu === "mobile" && (
          <div className="absolute top-16 left-16 max-w-[80%] bg-white shadow rounded-2xl">
            <ul className="flex flex-col gap-y-4 text-gray-700 p-4">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`transition ${getLinkClassName(
                      item.href,
                      location
                    )}`}
                    onClick={() => setOpenMenu(null)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="ml-auto flex items-center space-x-4">
        <div className="hidden md:flex items-center relative ml-auto">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" />
          <input
            type="text"
            placeholder="Search something..."
            className="bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {isAuth ? (
          <>
            <div className="hidden md:flex items-center space-x-4">
              {/* Coins & Streak */}
              <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-600 px-3 py-2 rounded-full hover:bg-yellow-200 transition cursor-pointer">
                <FaCoins />
                <span className="font-semibold">100</span>
              </div>

              <div className="flex items-center space-x-1 bg-red-100 text-red-600 px-3 py-2 rounded-full hover:bg-red-200 cursor-pointer">
                <FaFire />
                <span className="font-semibold">100</span>
              </div>

              {/* Icons */}
              <FaChartBar className="text-gray-500 cursor-pointer hover:text-black transition" />
              <FaBell className="text-gray-500 cursor-pointer hover:text-black transition" />
            </div>
            <CUserProfileAvatar />
          </>
        ) : (
          <div className="flex gap-3">
            <CButton
              variant="text"
              onClick={() => {
                navigate(ROUTES_CONSTANTS.AUTH.LOGIN);
              }}
            >
              Login
            </CButton>

            <CButton
              isRounded
              onClick={() => {
                navigate(ROUTES_CONSTANTS.AUTH.REGISTER);
              }}
            >
              Register now
            </CButton>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
