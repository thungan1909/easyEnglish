import { Typography } from "@mui/material";
import CTextField from "../../../components/atoms/CTextField/CTextField";
import CButton from "../../../components/atoms/CButton/CButton";

import { Controller, UseFormReturn } from "react-hook-form";
import { TUserSignUpSchema } from "../../../validation/user.schema";
import { FaKey, FaUser } from "react-icons/fa";

export interface InputBasicInfoProps {
  onSubmitProfile: (data: TUserSignUpSchema) => void;
  formInstance: UseFormReturn<TUserSignUpSchema>;
}

const InputBasicInfo = ({
  onSubmitProfile,
  formInstance,
}: InputBasicInfoProps) => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { isValid },
  } = formInstance;

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <Typography variant="h5">Register</Typography>
      <Typography className="text-center">
        You registered with email
        <span className="ml-1" style={{ color: "var(--main-purple-600)" }}>
          {getValues("email") || "Unknown"}
        </span>
      </Typography>

      <form
        className="flex flex-col gap-6 w-full"
        onSubmit={handleSubmit(onSubmitProfile)}
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
        </div>
        <CButton type="submit" disabled={!isValid} className="w-full" isRounded>
          Next
        </CButton>
      </form>
    </div>
  );
};

export default InputBasicInfo;
