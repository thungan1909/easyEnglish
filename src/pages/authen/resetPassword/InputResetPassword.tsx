import { Typography } from "@mui/material";
import CTextField from "../../../components/atoms/CTextField/CTextField";
import CButton from "../../../components/atoms/CButton/CButton";

import { Controller } from "react-hook-form";
import { InputResetPasswordProps } from "./types";

const InputResetPassword = ({
  onSubmitPassword,
  formInstance,
}: InputResetPasswordProps) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid },
  } = formInstance;

  const email = watch("email");

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <Typography variant="h5">Reset Password</Typography>
      <Typography className="text-center">
        Enter new password for
        <span className="ml-1" style={{ color: "var(--main-600)" }}>
          {email || "Unknown"}
        </span>
      </Typography>

      <form
        className="flex flex-col gap-6 w-full"
        onSubmit={handleSubmit(onSubmitPassword)}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <Controller
              name="password"
              control={control}
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

          <div className="flex flex-col">
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <CTextField
                    {...field}
                    type="password"
                    label="Confirm Password"
                    placeholder="Confirm Password"
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
        </div>
        <CButton type="submit" disabled={!isValid} className="w-full" isRounded>
          Reset password
        </CButton>
      </form>
    </div>
  );
};

export default InputResetPassword;
