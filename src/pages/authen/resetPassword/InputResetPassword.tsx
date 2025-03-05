import { Typography } from "@mui/material";
import CTextField from "../../../components/atoms/CTextField/CTextField";
import CButton from "../../../components/atoms/CButton/CButton";

import { Controller, UseFormReturn } from "react-hook-form";
import { TUserResetPasswordSchema } from "../../../validation/user.schema";

export interface InputResetPasswordProps {
  onSubmitPassword: (data: TUserResetPasswordSchema) => void;
  formInstance: UseFormReturn<TUserResetPasswordSchema>;
}

const InputResetPassword = ({
  onSubmitPassword,
  formInstance,
}: InputResetPasswordProps) => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { isValid },
  } = formInstance;

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <Typography variant="h5">Reset Password</Typography>
      <Typography className="text-center">
        Enter new password for
        <span className="ml-1 text-purple-600">
          {getValues("email") || "Unknown"}
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

          <div className="flex flex-col">
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
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
