import { Typography } from "@mui/material";
import CButton from "../../../components/atoms/CButton/CButton";
import checkImg from "../../../assets/check-img.png";

import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../../routers/constants";

const RegisterSuccessfully = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center  justify-center ">
        <img
          src={checkImg}
          alt="Check successfully illustration"
          className="object-contain w-50"
        />
      </div>
      <Typography
        variant="h5"
        className="text-center font-semibold text-gray-800 !mb-2"
      >
        Registration Successful
      </Typography>
      <Typography className="text-center">
        Welcome to
        <span className="ml-1 font-semibold text-purple-600">Easy English</span>
      </Typography>

      <CButton
        fullWidth
        onClick={() => navigate(ROUTES_CONSTANTS.AUTH.LOGIN)}
        className="!bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white !py-3 !rounded-full !mt-16"
      >
        Go to Sign In
      </CButton>
    </div>
  );
};

export default RegisterSuccessfully;
