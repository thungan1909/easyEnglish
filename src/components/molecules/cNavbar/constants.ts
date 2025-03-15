import { ROUTES_CONSTANTS } from "../../../routers/constants";

export const menuItems = [
  { href: ROUTES_CONSTANTS.DASHBOARD, label: "Home" },
  { href: ROUTES_CONSTANTS.LESSON.BASE, label: "Lesson" },
  {
    href: ROUTES_CONSTANTS.CHALLENGE.BASE,
    label: "Challenges",
  }, 
  {
    href: ROUTES_CONSTANTS.CLASSES.BASE,
    label: "Classes",
  },
  {
    href: ROUTES_CONSTANTS.FEEDS.BASE,
    label: "Feeds",
  },
  {
    href: ROUTES_CONSTANTS.RANKING_LIST.BASE,
    label: "Ranking List",
  },
];


export const primaryMenuItems = menuItems.filter(item =>
  ["Home", "Lesson", "Challenges"].includes(item.label)
);
export const moreMenuItems = menuItems.filter(item =>
  ["Classes", "Feeds", "Ranking List"].includes(item.label)
);