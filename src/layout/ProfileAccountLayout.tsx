import { ReactNode } from "react";
import CSidebar from "../pages/user/ProfileAccount/components/cSidebar/Sidebar";

interface ProfileAccountProps {
  children: ReactNode;
}

const ProfileAccount = ({ children }: ProfileAccountProps) => {
  return (
    <div className="flex w-full">
      <CSidebar />
      <div className="flex-1 md:ml-64 md:px-48 pt-32 md:pb-12 px-8 pb-16 flex items-center ">
        {children}
      </div>
    </div>
  );
};

export default ProfileAccount;
