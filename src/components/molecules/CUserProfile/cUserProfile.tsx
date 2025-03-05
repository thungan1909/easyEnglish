import { Avatar, Typography } from "@mui/material";
import { useUser } from "../../../hooks/user.hook";
import { useEffect, useRef, useState } from "react";
import CButton from "../../atoms/CButton/CButton";
import { useLogoutMutation } from "../../../hooks/auth.hook";

const CUserProfile = () => {
  const currentUser = useUser();
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { mutate: logoutMutation } = useLogoutMutation();

  const firstChar = currentUser?.username
    ? currentUser.username.charAt(0).toUpperCase()
    : "?";

  const handleLogout = () => {
    logoutMutation({});
  };

  const handleClickAvatar = () => {
    setOpenMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    };

    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  return (
    <div className="relative">
      <Avatar
        alt="user-avatar"
        className="!bg-purple-400 cursor-pointer"
        src={currentUser?.avatarUrl}
        onClick={handleClickAvatar}
        role="button"
        tabIndex={0}
      >
        {firstChar}
      </Avatar>

      {openMenu && (
        <div
          className="absolute right-0 top-12 w-[240px] rounded-lg shadow-2xl bg-white p-3"
          ref={menuRef}
        >
          <div className="flex gap-2">
            <Avatar
              alt="user-avatar"
              className="!bg-purple-400"
              src={currentUser?.avatarUrl}
            >
              {firstChar}
            </Avatar>
            <div className="flex flex-col">
              <Typography>
                {currentUser?.fullName || "Doan Thu Ngan"}
              </Typography>

              <Typography variant="caption" className="text-gray-500">
                {currentUser?.username}
              </Typography>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            <CButton variant="text" textTransform="capitalize">
              Manage listening
            </CButton>
            <CButton variant="text" textTransform="capitalize">
              My account
            </CButton>
            <CButton
              variant="text"
              textTransform="capitalize"
              onClick={handleLogout}
            >
              Logout
            </CButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default CUserProfile;
