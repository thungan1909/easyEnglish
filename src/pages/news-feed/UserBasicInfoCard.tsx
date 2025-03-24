import { Avatar, Typography } from "@mui/material";
import { UserDTO } from "../../types/dtos/user.dto";

export interface UserBasicInfoCardProps {
  currentUser: UserDTO;
}

const UserBasicInfoCard = ({ currentUser }: UserBasicInfoCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg w-[80%]">
      <div className="flex gap-4">
        <Avatar
          alt="user-avatar"
          src={
            typeof currentUser?.avatarUrl === "string"
              ? currentUser?.avatarUrl
              : ""
          }
          sx={{ width: 42, height: 42 }}
        />
        <div>
          <Typography className="text-black">
            {currentUser?.fullName || "Full name"}
          </Typography>
          <Typography variant="caption" className="text-gray-500">
            {currentUser?.username || "User name"}
          </Typography>
        </div>
      </div>
      <div className="flex justify-between mt-2 p-2 bg-gray-100 rounded-lg ">
        <div className="text-center">
          <Typography>28</Typography>
          <Typography variant="caption" className="text-gray-500">
            Podcasts
          </Typography>
        </div>
        <div className="text-center">
          <Typography>1.187</Typography>
          <Typography variant="caption" className="text-gray-500">
            Listend words
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
