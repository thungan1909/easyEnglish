import { useMemo } from "react";
import { menuSidebarItems } from "./constant";
import { Link } from "react-router-dom";

const CSidebar = () => {
  const renderedMenuItems = useMemo(
    () =>
      menuSidebarItems.map((item) => (
        <li key={item.href}>
          <Link
            to={item.href}
            className="flex items-center gap-3 hover:text-black !important"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        </li>
      )),
    [location]
  );

  return (
    <div className="w-64 p-4 bg-purple-400 text-white h-screen">
      <ul className="space-y-12 mt-4">{renderedMenuItems}</ul>
    </div>
  );
};

export default CSidebar;
