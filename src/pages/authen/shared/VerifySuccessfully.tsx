import { Typography } from "@mui/material";
import CButton from "../../../components/atoms/CButton/CButton";
import checkImg from "../../../assets/check-img.png";

import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
interface VerifySuccessfullyProps {
  isVerify?: boolean;
}
const VerifySuccessfully = ({ isVerify }: VerifySuccessfullyProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <img
        src={checkImg}
        alt="Check successfully illustration"
        className="object-contain w-50"
      />
      <Typography variant="h5">
        {isVerify ? "Verification Successful" : "Registration Successful"}
      </Typography>
      <Typography className="text-center">
        Welcome to
        <span className="ml-1 font-semibold text-purple-600">Easy English</span>
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

export default VerifySuccessfully;
