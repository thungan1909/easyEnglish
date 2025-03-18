import { Avatar, Divider, Typography } from "@mui/material";
import { useGetCurrentUser } from "../../../hooks/user/user.hook";
import { useEffect, useRef, useState } from "react";
import CButton from "../../atoms/CButton/CButton";
import { FaCog, FaFolder, FaSignOutAlt } from "react-icons/fa";
import { useLogoutMutation } from "../../../hooks/auth/logout.hook";
import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import { getFirstCharAvatar } from "../../../utils/helpers/getFirstCharAvatar";

const CUserProfileAvatar = () => {
  const currentUser = useGetCurrentUser();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { mutate: logoutMutation } = useLogoutMutation();

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
        {getFirstCharAvatar(currentUser?.username)}
      </Avatar>

      {openMenu && (
        <div
          className="absolute right-0 top-12 w-[240px] rounded-lg shadow bg-white p-5"
          ref={menuRef}
        >
          <div className="flex gap-2 cursor-pointer mb-2">
            <Avatar
              alt="user-avatar"
              className="!bg-purple-400"
              src={currentUser?.avatarUrl}
            >
              {getFirstCharAvatar(currentUser?.username)}
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
          <Divider />
          <div className="flex flex-col gap-2 mt-2 items-start px-2">
            <CButton
              variant="text"
              textTransform="capitalize"
              className="gap-2"
            >
              <FaFolder />
              Manage listening
            </CButton>
            <CButton
              variant="text"
              textTransform="capitalize"
              className="gap-2"
              onClick={() => {
                navigate(ROUTES_CONSTANTS.USER.PROFILE_ACCOUNT);
              }}
            >
              <FaCog />
              My account
            </CButton>
            <CButton
              variant="text"
              textTransform="capitalize"
              className="gap-2"
              onClick={handleLogout}
            >
              <FaSignOutAlt />
              Logout
            </CButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default CUserProfileAvatar;
