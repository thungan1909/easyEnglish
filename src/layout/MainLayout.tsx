import { ReactNode } from "react";
import Navbar from "../components/molecules/cNavbar/Navbar";
import { useAuthentication } from "../hooks/auth.hook";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isAuth } = useAuthentication();
  console.log(isAuth);

  return (
    <div className="flex flex-col">
      <Navbar isAuth={isAuth} />
      <div>{children}</div>
    </div>
  );
};
export default MainLayout;
