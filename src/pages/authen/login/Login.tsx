import { Typography } from "@mui/material";
import loginImg from "../../../assets/login_img_2.png";
import CTextField from "../../../components/atoms/CTextField/CTextField";

import { Controller, useForm } from "react-hook-form";
import {
  useAuthentication,
  useLoginMutation,
} from "../../../apis/api-hooks/auth.hook";
import { notify } from "../../../utils/notify";
import { useNavigate } from "react-router-dom";
import CButton from "../../../components/atoms/CButton/CButton";
import { defaultErrorMsg } from "../../../constants/errorMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import { useEffect } from "react";
import {
  TUserSignInSchema,
  UserSignInSchema,
} from "../../../validation/user.schema";

const resolver = zodResolver(UserSignInSchema);

const Login = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuthentication();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<TUserSignInSchema>({
    resolver,
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { mutate: loginMutation } = useLoginMutation();

  const onSubmitLogin = (data: TUserSignInSchema) => {
    loginMutation(data, {
      onError: (error) => {
        notify.error(error.message || defaultErrorMsg);
      },
      onSuccess: () => {
        navigate(ROUTES_CONSTANTS.DASHBOARD, { replace: true });
      },
    });
  };

  useEffect(() => {
    if (isAuth) {
      window.location.href = ROUTES_CONSTANTS.DASHBOARD;
    }
  }, [isAuth]);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r to-purple-200">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden flex w-full max-w-4xl">
        <div className="md:w-1/2 md:flex hidden items-center justify-center p-6 bg-gradient-to-r from-indigo-300 to bg-purple-400">
          <img
            src={loginImg}
            alt="Learning illustration"
            className="object-contain"
          />
        </div>

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
            className="mt-6 flex flex-col gap-4 max-w-sm mx-auto w-full relative"
            onSubmit={handleSubmit(onSubmitLogin)}
          >
            <div className="flex flex-col">
              <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({ field, fieldState }) => (
                  <>
                    <CTextField
                      {...field}
                      type="text"
                      label="Username"
                      placeholder="Username"
                      className="w-full"
                    />
                    {fieldState.error && (
                      <Typography color="error" variant="caption">
                        {fieldState.error.message}
                      </Typography>
                    )}
                  </>
                )}
              />
            </div>
            <div className="flex flex-col">
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field, fieldState }) => (
                  <>
                    <CTextField
                      {...field}
                      type="password"
                      label="Password"
                      placeholder="Password"
                      className="w-full"
                    />
                    {fieldState.error && (
                      <Typography color="error" variant="caption">
                        {fieldState.error.message}
                      </Typography>
                    )}
                  </>
                )}
              />
            </div>

            <div className="!text-end">
              <CButton
                onClick={() => {
                  navigate(ROUTES_CONSTANTS.AUTH.FORGOT_PASSWORD);
                }}
                variant="text"
                size="large"
                textTransform="capitalize"
              >
                Forgot your password?
              </CButton>
            </div>
            <CButton
              type="submit"
              disabled={!isValid}
              className="w-full"
              isRounded
            >
              Log In
            </CButton>
            <div className="flex justify-between">
              <a href={ROUTES_CONSTANTS.AUTH.REGISTER} className="ml-1">
                Create new account
              </a>
              <span className="text-center">/</span>
              <a href={ROUTES_CONSTANTS.AUTH.VERIFY_ACCOUNT} className="ml-1">
                Verify your account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
