import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../routers/constants";
import CButton from "../components/atoms/CButton/CButton";
import { Typography } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";

const LoginReminder = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <Typography variant="h3">Sorry, 403 Authentication Required</Typography>
      <Typography>You need to sign in to access this page.</Typography>
      <CButton
        onClick={() => navigate(ROUTES_CONSTANTS.AUTH.LOGIN)}
        size="large"
        isRounded
        textTransform="capitalize"
      >
        Sign in now
        <FaArrowRight size={24} className="ml-2" />
      </CButton>
    </div>
  );
};

export default LoginReminder;
