import { Typography } from "@mui/material";
import CTextField from "../../../components/atoms/CTextField/CTextField";

import { Controller, useForm } from "react-hook-form";
import { notify } from "../../../utils/notifyUtils";
import { useNavigate } from "react-router-dom";
import CButton from "../../../components/atoms/CButton/CButton";
import { defaultErrorMsg } from "../../../constants/message/validationMsg";
import { zodResolver } from "@hookform/resolvers/zod";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import {
  TUserSignInSchema,
  UserSignInSchema,
} from "../../../validation/user.schema";
import { AuthenticationLayout } from "../../../layout/AuthenticationLayout";
import { useEffect } from "react";
import {
  useAuthentication,
  useLoginMutation,
} from "../../../hooks/auth/login.hook";
import { FaKey, FaUser } from "react-icons/fa";

const resolver = zodResolver(UserSignInSchema);

const Login = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuthentication();
  const { mutate: loginMutation } = useLoginMutation();

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
      navigate(ROUTES_CONSTANTS.DASHBOARD, { replace: true });
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
                      startIcon={<FaUser />}
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
                      startIcon={<FaKey />}
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
                  navigate(ROUTES_CONSTANTS.AUTH.RESET_PASSWORD);
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
