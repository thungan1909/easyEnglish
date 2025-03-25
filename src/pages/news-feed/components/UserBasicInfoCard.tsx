import { Avatar, Typography } from "@mui/material";
import { UserDTO } from "../../../types/dtos/user.dto";

export interface UserBasicInfoCardProps {
  currentUser?: UserDTO;
}

const UserBasicInfoCard = ({ currentUser }: UserBasicInfoCardProps) => {
  return (
    <div className="bg-white shadow p-4 rounded-lg">
      <div className="flex items-center gap-4">
        <Avatar
          alt="user-avatar"
          src={
            typeof currentUser?.avatarUrl === "string"
              ? currentUser?.avatarUrl
              : ""
          }
          sx={{ width: 56, height: 56 }}
        />
        <div>
          <Typography className="text-black">
            {currentUser?.fullName || "Full name"}
          </Typography>
          <Typography variant="caption" className="text-gray-500">
            @{currentUser?.username || "User name"}
          </Typography>
        </div>
      </div>

      <div className="flex justify-around text-center mt-2 p-2 bg-gray-100 rounded-lg">
        <div>
          <Typography>{currentUser?.listenedLessons?.length}</Typography>
          <Typography variant="caption" className="text-gray-500">
            Podcasts
          </Typography>
        </div>
        <div className="text-center">
          <Typography>{currentUser?.totalScore}</Typography>
          <Typography variant="caption" className="text-gray-500">
            Total score
          </Typography>
        </div>
        <div className="text-center">
          <Typography>218</Typography>
          <Typography variant="caption" className="text-gray-500">
            Activities
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default UserBasicInfoCard;
