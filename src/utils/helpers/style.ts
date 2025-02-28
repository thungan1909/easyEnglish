import { Location } from "react-router-dom";

export const getLinkClassName = (href: string, location: Location) => {
  console.log("-=-----------");
  console.log("pathname", location.pathname);
  console.log("search", location.search);
  console.log("cong ne", location.pathname + location.search);
  console.log("hreee", href);
  console.log(
    location.pathname === href || location.pathname + location.search === href
  );
  return location.pathname === href ||
    location.pathname + location.search === href
    ? "text-purple-500 font-bold border-b-2 border-purple-500"
    : "text-gray-700 hover:text-purple-500";
};
