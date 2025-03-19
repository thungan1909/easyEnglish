import { useEffect, useRef } from "react";
import { moreMenuItems } from "./constants";
import { Link } from "react-router-dom";

const MoreMenu = ({
  isOpen,
  setMoreMenuOpen,
}: {
  isOpen: boolean;
  setMoreMenuOpen: (open: boolean) => void;
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMoreMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, setMoreMenuOpen]);

  return isOpen ? (
    <div
      ref={menuRef}
      className="absolute top-16 left-16 max-w-[80%] bg-white shadow rounded-2xl"
    >
      <ul className="flex flex-col gap-y-4 text-gray-700 p-4">
        {moreMenuItems.map((item) => (
          <li key={item.href} className="">
            <Link
              to={item.href}
              className="transition"
              onClick={() => setMoreMenuOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default MoreMenu;
