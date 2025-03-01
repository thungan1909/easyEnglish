import { Location } from "react-router-dom";

export const getLinkClassName = (href: string, location: Location) => {
  return location.pathname === href ||
    location.pathname + location.search === href
    ? "text-purple-500 font-bold border-b-2 border-purple-500"
    : "text-gray-700 hover:text-purple-500";
};
