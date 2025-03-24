import { ReactNode } from "react";
import loginImg from "../assets/login_img_2.png";

export interface AuthenticationLayoutProps {
  stepperSection?: ReactNode;
  children: ReactNode;
}

export const AuthenticationLayout = ({
  stepperSection,
  children,
}: AuthenticationLayoutProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r to-purple-200 p-5">
      <div className="md:w-1/2 w-full mb-8">{stepperSection}</div>
      <div className="bg-white shadow rounded-2xl overflow-hidden flex w-full max-w-4xl">
        <div className="md:w-1/2 md:flex hidden bg-gradient-to-r from-indigo-300 to bg-purple-400">
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
