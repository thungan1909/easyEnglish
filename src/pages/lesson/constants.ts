import { ROUTES_CONSTANTS } from "../../routers/constants";

export const menuItems = [
  { href: ROUTES_CONSTANTS.LESSON.SCOPE.ALL, label: "All Lessons" },
  { href: ROUTES_CONSTANTS.LESSON.SCOPE.MINE, label: "My Uploads" },
  {
    href: `${ROUTES_CONSTANTS.LESSON.BASE}?scope=listened`,
    label: "Listened Lessons",
  },
];
