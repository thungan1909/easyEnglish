import { ReactNode } from "react";
import { useAuthentication } from "../apis/hooks/auth.hook";
import Navbar from "../components/molecules/cNavbar/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isAuth } = useAuthentication();

  return (
    <div className="bg-gradient-to-r to-purple-200  flex flex-col">
      <Navbar isAuth={isAuth} />
      <div className="max-h-screen overflow-y-auto">{children}</div>
    </div>
  );
};
export default MainLayout;
