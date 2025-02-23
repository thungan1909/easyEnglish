import { Button, Typography } from "@mui/material";
import loginImg from "../../../assets/login_img_2.png";
import CTextField from "../../../components/atoms/CTextField/CTextField";
import { useCallback, useState } from "react";
import { LoginDataDTO } from "../../../types/dtos/login.dto";
import { useForm } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useLoginMutation } from "../../../apis/hooks/auth.hook";
import { notify } from "../../../utils/notify";
import { useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../../constants";

const resolver = classValidatorResolver(LoginDataDTO);

const Login = () => {
  const [apiError, setApiError] = useState<string>("");

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<LoginDataDTO>({
    resolver,
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { mutate: execLogin } = useLoginMutation();

  const submitForm = useCallback((data: any) => {
    console.log(data);
    setApiError("");
    execLogin(data, {
      onError: (err) => {
        notify.warning(`Error! ${err.message}`);
        setApiError(err.message);
      },
      onSuccess: () => {
        navigate(ROUTES_CONSTANTS.AUTH.DEFAULT, { replace: true });
      },
    });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r to-purple-200">
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
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <Typography
            variant="h5"
            className="text-center font-semibold text-gray-800 p-4"
          >
            Login
          </Typography>
          <Typography className="text-center">
            Welcome back to
            <span className="ml-1 font-semibold text-purple-600">
              Easy English
            </span>
          </Typography>

          <form
            className="mt-6 flex flex-col gap-5 max-w-sm mx-auto  w-full relative"
            id="login-form"
            onSubmit={handleSubmit(submitForm)}
          >
            <CTextField
              type="text"
              label="User name"
              placeholder="User name"
              {...register("username")}
            />
            <CTextField
              type="password"
              label="Password"
              {...register("password")}
              placeholder="Password"
            />
            <a className="text-end !text-purple-600" href={ROUTES_CONSTANTS.AUTH.FORGOT_PASSWORD}>Forgot your password?</a>
            <Button
              variant="contained"
              className="!bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white !py-3 !rounded-full"
              fullWidth
              type="submit"
            >
              Log In
            </Button>
            
            <a className="text-center !text-gray-800" href={ROUTES_CONSTANTS.AUTH.REGISTER}>Create new account</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
