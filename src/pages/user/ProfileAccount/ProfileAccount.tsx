import { ReactNode } from "react";
import CSidebard from "../../../components/molecules/cSidebar/Sidebar";

interface ProfileAccountProps {
  children: ReactNode;
}

const ProfileAccount = ({ children }: ProfileAccountProps) => {
  return (
    <>
      <CSidebard />
      {children}
    </>
  );
};

export default ProfileAccount;
