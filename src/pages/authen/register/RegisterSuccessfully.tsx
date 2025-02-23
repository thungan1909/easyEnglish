import { Typography } from "@mui/material";
import CButton from "../../../components/atoms/CButton/CButton";
import loginImg from "../../../assets/login_img_2.png";
import checkImg from "../../../assets/check-img.png";

import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../../constants";

const RegisterSuccessfully = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden flex w-full max-w-4xl">
            {/* Left Side - Image */}
            <div className="md:w-1/2 md:flex hidden items-center justify-center p-6 bg-gradient-to-r from-indigo-300 to bg-purple-400">
                <img
                    src={loginImg}
                    alt="Learning illustration"
                    className="object-contain"
                />
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full md:w-1/2 p-10 flex flex-col justify-center min-w-sm items-center">
                <img
                    src={checkImg}
                    alt="Check successfully illustration"
                    className="object-contain w-50"
                />
                <Typography
                    variant="h6"
                    className="text-center font-semibold text-gray-800 p-4 !mb-4"
                >
                    Registration Successful
                </Typography>

                <CButton
                    fullWidth
                    onClick={() => navigate(ROUTES_CONSTANTS.AUTH.LOGIN)}
                    className="!bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white !py-3 !rounded-full"
                >
                    Go to Sign In
                </CButton>
            </div>
        </div>
    );
};

export default RegisterSuccessfully;
