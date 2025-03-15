import { FaEnvelope, FaKey, FaUser } from "react-icons/fa";
import { FaChartColumn, FaGear } from "react-icons/fa6";
import { ROUTES_CONSTANTS } from "../../../../../routers/constants";

export const menuSidebarItems = [
  {
    href: ROUTES_CONSTANTS.USER.PROFILE_ACCOUNT,
    label: "Update Information",
    icon: <FaUser />,
  },
  {
    href: ROUTES_CONSTANTS.USER.CHANGE_PASSWORD,
    label: "Change Password",
    icon: <FaKey />,
  },
  {
    href: ROUTES_CONSTANTS.USER.UPDATE_EMAIL,
    label: "Update Email",
    icon: <FaEnvelope />,
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
