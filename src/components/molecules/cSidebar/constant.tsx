import { FaKey, FaUser } from "react-icons/fa";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import { FaChartColumn, FaGear } from "react-icons/fa6";

export const menuSidebarItems = [
  {
    href: ROUTES_CONSTANTS.USER.PROFILE_ACCOUNT,
    label: "User Information",
    icon: <FaUser />,
  },
  {
    href: ROUTES_CONSTANTS.USER.CHANGE_PASSWORD,
    label: "Update Password",
    icon: <FaKey />,
  },
  {
    href: ROUTES_CONSTANTS.USER.ANALYSIS,
    label: "Performance analysis",
    icon: <FaChartColumn />,
  },
  {
    href: ROUTES_CONSTANTS.USER.SETTINGS,
    label: "Settings",
    icon: <FaGear />,
  },
];
