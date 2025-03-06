import { ReactNode, useEffect, useState } from "react";
import Navbar from "../components/molecules/cNavbar/Navbar";
import { FaPlus } from "react-icons/fa";
import CButton from "../components/atoms/CButton/CButton";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../routers/constants";
import { useAuthentication } from "../hooks/auth/login.hook";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isAuth } = useAuthentication();
  const navigate = useNavigate();
  const location = useLocation();
  const [isAddNewPage, setIsAddNewPage] = useState(false);

  useEffect(() => {
    setIsAddNewPage(location.pathname.includes("add-new"));
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isAuth={isAuth} />
      <div>{children}</div>
      {!isAddNewPage && (
        <CButton
          className="!fixed bottom-12 right-12 w-14 h-14 !rounded-full !aspect-square"
          onClick={() => {
            navigate(ROUTES_CONSTANTS.LESSON.ADD_NEW);
          }}
        >
          <FaPlus size={24} />
        </CButton>
      )}
    </div>
  );
};
export default MainLayout;
