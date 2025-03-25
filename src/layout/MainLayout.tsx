import { ReactNode, useEffect, useState } from "react";
import Navbar from "../components/molecules/cNavbar/Navbar";
import { FaPlus } from "react-icons/fa";
import CButton from "../components/atoms/CButton/CButton";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../routers/constants";
import { useAuthentication } from "../hooks/auth/login.hook";
import { motion } from "framer-motion";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isAuth } = useAuthentication();
  const navigate = useNavigate();
  const location = useLocation();

  const [isAddNewPage, setIsAddNewPage] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsAddNewPage(location.pathname.includes("add-new"));
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar isAuth={isAuth} />
      <div>{children}</div>

      {!isAddNewPage && (
        <div className="fixed bottom-12 right-12 flex flex-col items-end gap-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className={`flex flex-col gap-2 ${isMenuOpen ? "block" : "hidden"}`}
          >
            <CButton
              className="rounded-lg shadow-lg transition-all"
              onClick={() => {
                navigate(ROUTES_CONSTANTS.LESSON.ADD_NEW);
                setIsMenuOpen(false);
              }}
            >
              Add new lesson
            </CButton>
            <CButton
              className="rounded-lg shadow-lg transition-all"
              onClick={() => {
                navigate(ROUTES_CONSTANTS.CHALLENGE.ADD_NEW);
                setIsMenuOpen(false);
              }}
            >
              Add new challenge
            </CButton>
          </motion.div>

          <motion.div
            animate={{ rotate: isMenuOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <CButton
              className="!w-16 !h-16 !rounded-full shadow-xl transition-all"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <FaPlus size={28} />
            </CButton>
          </motion.div>
        </div>
      )}
    </div>
  );
};
export default MainLayout;
