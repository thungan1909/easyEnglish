import { ReactNode, useEffect } from "react";
import loginImg from "../assets/login_img_2.png";
import { ROUTES_CONSTANTS } from "../routers/constants";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../hooks/auth/login.hook";

export interface AuthenticationLayoutProps {
  stepperSection?: ReactNode;
  children: ReactNode;
}

export const AuthenticationLayout = ({
  stepperSection,
  children,
}: AuthenticationLayoutProps) => {
  const { isAuth } = useAuthentication();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate(ROUTES_CONSTANTS.DASHBOARD, { replace: true });
    }
  }, [isAuth, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r to-purple-200 p-5">
      <div className="md:w-1/2 w-full mb-8">{stepperSection}</div>
      <div className="bg-white shadow rounded-2xl overflow-hidden flex w-full max-w-4xl">
        <div
          className="md:w-1/2 md:flex hidden bg-gradient-to-r from-indigo-300"
          style={{ backgroundColor: "var(--main-color)" }}
        >
          <img
            src={loginImg}
            alt="Learning illustration"
            className="object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">{children}</div>
      </div>
    </div>
  );
};
