import { Avatar, IconButton } from "@mui/material";
import { FaCamera } from "react-icons/fa";
import { useState } from "react";
import { getFirstCharAvatar } from "../../../../../utils/helpers/getFirstCharAvatar";

export interface CAvatarUploadProps {
  avatarUrl?: string;
  username?: string;
}

const CAvatarUpload = ({ avatarUrl, username }: CAvatarUploadProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block mt-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Avatar
        alt="user-avatar"
        className="!bg-purple-400"
        src={avatarUrl}
        sx={{ width: 64, height: 64 }}
      >
        {!avatarUrl && getFirstCharAvatar(username)}
      </Avatar>

      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-300 bg-opacity-500 flex items-center justify-center rounded-full">
          <IconButton size="medium">
            <FaCamera className="text-white" />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default CAvatarUpload;
