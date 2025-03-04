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
import { AuthenticationLayout } from "../../../layout/AuthenticationLayout";

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
    <AuthenticationLayout>
      <div className="flex flex-col items-center justify-center gap-6">
        <Typography variant="h5">Login</Typography>
        <Typography className="text-center">
          Welcome to
          <span className="ml-1 text-purple-600">Easy English</span>
        </Typography>
        <form
          className="flex flex-col gap-6 w-full"
          onSubmit={handleSubmit(onSubmitLogin)}
        >
          <div className="flex flex-col gap-4">
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
            <CButton
              onClick={() => {
                navigate(ROUTES_CONSTANTS.AUTH.REGISTER);
              }}
              variant="text"
              size="large"
              textTransform="capitalize"
            >
              Create new account
            </CButton>

            <span className="text-center">/</span>

            <CButton
              onClick={() => {
                navigate(ROUTES_CONSTANTS.AUTH.VERIFY_ACCOUNT);
              }}
              variant="text"
              size="large"
              textTransform="capitalize"
            >
              Verify your account
            </CButton>
          </div>
        </form>
      </div>
    </AuthenticationLayout>
  );
};

export default Login;
