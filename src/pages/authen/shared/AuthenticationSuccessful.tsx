import { Typography } from "@mui/material";
import CButton from "../../../components/atoms/CButton/CButton";
import checkImg from "../../../assets/check-img.png";

import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import { VERIFY_ACCOUNT_STEP } from "./constants";
interface AuthenticationSuccessfulProps {
  type?: keyof typeof VERIFY_ACCOUNT_STEP;
}

const AuthenticationSuccessful = ({ type }: AuthenticationSuccessfulProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <img
        src={checkImg}
        alt="Check successfully illustration"
        className="object-contain w-50"
      />
      <Typography variant="h5">
        {type === VERIFY_ACCOUNT_STEP.REGISTER
          ? "Registration Successful"
          : type === VERIFY_ACCOUNT_STEP.RESET_PASSWORD
          ? "Reset Password Successful"
          : "Verification Successful"}
      </Typography>
      <Typography className="text-center">
        Welcome to
        <span
          className="ml-1 font-semibold"
          style={{ color: "var(--main-purple-600)" }}
        >
          Easy English
        </span>
      </Typography>

      <CButton
        onClick={() => navigate(ROUTES_CONSTANTS.AUTH.LOGIN)}
        className="w-full"
        isRounded
      >
        Go to Sign In
      </CButton>
    </div>
  );
};

export default AuthenticationSuccessful;
