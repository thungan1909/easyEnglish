import { Typography } from "@mui/material";
import { useUser } from "../../../../hooks/user.hook";
import CAvatarUpload from "../components/cAvatarUpload/CAvatarUpload";

const UserInformation = () => {
  const currentUser = useUser();

  return (
    <div className="h-full">
      <Typography variant="h5">User Information</Typography>
      <CAvatarUpload
        avatarUrl={currentUser?.avatarUrl}
        username={currentUser?.username}
      />
    </div>
  );
};

export default UserInformation;
