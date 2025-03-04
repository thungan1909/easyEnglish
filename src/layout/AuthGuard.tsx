import { Navigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../routers/constants";
import { useAuthentication } from "../apis/api-hooks/auth.hook";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { isAuth } = useAuthentication();

  if (!isAuth) {
    return <Navigate to={ROUTES_CONSTANTS.AUTH.LOGIN} replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
