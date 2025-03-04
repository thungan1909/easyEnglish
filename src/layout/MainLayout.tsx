import { ReactNode } from "react";
import Navbar from "../components/molecules/cNavbar/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};
export default MainLayout;
