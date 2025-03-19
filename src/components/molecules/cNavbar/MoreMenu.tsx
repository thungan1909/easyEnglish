import { useEffect, useRef } from "react";
import { moreMenuItems } from "./constants";
import { Link } from "react-router-dom";

const MoreMenu = ({
  isOpen,
  setMoreMenuOpen,
}: {
  isOpen: boolean;
  setMoreMenuOpen: (openMenu: "more" | null) => void;
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMoreMenuOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, setMoreMenuOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="absolute top-full mt-2 py-2 min-w-[180px] z-50 shadow-md rounded-lg bg-white"
    >
      <ul className="flex flex-col text-gray-700">
        {moreMenuItems.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className="block px-4 py-2 hover:bg-gray-100 transition"
              onClick={() => setMoreMenuOpen(null)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoreMenu;
