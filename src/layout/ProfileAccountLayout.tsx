import { ReactNode } from "react";
import CSidebar from "../pages/user/ProfileAccount/components/cSidebar/Sidebar";

interface ProfileAccountProps {
  children: ReactNode;
}

const ProfileAccount = ({ children }: ProfileAccountProps) => {
  return (
    <div className="fixed top-16 flex w-full ">
      <CSidebar />
      <div className="flex-1 p-16">{children}</div>
    </div>
  );
};

export default ProfileAccount;
