import { ReactNode } from "react";
import { useAuthentication } from "../apis/hooks/auth.hook";
import Navbar from "../components/molecules/cNavbar/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isAuth } = useAuthentication();

  return (
    <div className="flex flex-col">
      <Navbar isAuth={isAuth} />
      <div>{children}</div>
    </div>
  );
};
export default MainLayout;
