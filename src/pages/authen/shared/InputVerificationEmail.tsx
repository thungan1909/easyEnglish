import { Controller, UseFormReturn } from "react-hook-form";

import CTextField from "../../../components/atoms/CTextField/CTextField";
import { Typography } from "@mui/material";
import CButton from "../../../components/atoms/CButton/CButton";
import { TGetVerifyCodeSchema } from "../../../validation/user.schema";

export interface InputVerificationEmailProps {
  onSubmitForm: (data: TGetVerifyCodeSchema) => void;
  formInstance: UseFormReturn<TGetVerifyCodeSchema>;
  isVerify?: boolean;
}

const InputVerificationEmail = ({
  onSubmitForm,
  formInstance,
  isVerify,
}: InputVerificationEmailProps) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = formInstance;

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <Typography variant="h5">
        {isVerify ? "Verify Your Account" : "Reset Password"}
      </Typography>
      <Typography>
        Enter your email to
        {isVerify ? " get verification code" : " reset password"}
      </Typography>
      <form
        className="flex flex-col w-full gap-6"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className="flex flex-col">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <>
                <CTextField
                  {...field}
                  type="text"
                  label="Email"
                  placeholder="Email"
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
        <CButton type="submit" disabled={!isValid} className="w-full" isRounded>
          Next
        </CButton>
      </form>
    </div>
  );
};

export default InputVerificationEmail;
