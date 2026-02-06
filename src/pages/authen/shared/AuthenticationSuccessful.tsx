import { Typography } from "@mui/material";
import CButton from "../../../components/atoms/CButton/CButton";
import checkImg from "../../../assets/check-img.png";

import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import { SUCCESSFUL_TITLE_MAP } from "./constants";
import { AuthenticationSuccessfulProps } from "./types";

const AuthenticationSuccessful = ({ type }: AuthenticationSuccessfulProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <img
        src={checkImg}
        alt="Check successfully illustration"
        className="object-contain w-50"
      />
      <Typography variant="h5">{SUCCESSFUL_TITLE_MAP[type]}</Typography>

      <Typography className="text-center">
        Welcome to
        <span
          className="ml-1 font-semibold"
          style={{ color: "var(--main-600)" }}
        >
          Easy English
        </span>
      </Typography>

      <CButton
        onClick={() => navigate(ROUTES_CONSTANTS.AUTH.LOGIN, { replace: true })}
        className="w-full"
        isRounded
      >
        Go to Sign In
      </CButton>
    </div>
  );
};

export default AuthenticationSuccessful;
