import { Typography } from "@mui/material";
import CTextField from "../../../components/atoms/CTextField/CTextField";
import CButton from "../../../components/atoms/CButton/CButton";
import loginImg from "../../../assets/login_img_2.png";

import { TUserSignUpSchema } from "./schemas";
import { Controller, UseFormReturn } from "react-hook-form";

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
    <div>
      <Typography
        variant="h5"
        className="text-center font-semibold text-gray-800 p-4"
      >
        Register
      </Typography>
      <Typography className="text-center">
        You registered with email
        <span className="ml-1 font-semibold text-purple-600">
          {getValues("email") || "Unknown"}
        </span>
      </Typography>

      <form
        className="mt-6 flex flex-col max-w-sm mx-auto gap-5 w-full"
        onSubmit={handleSubmit(onSubmitProfile)}
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
        <CButton type="submit" disabled={!isValid} className="w-full">
          Next
        </CButton>
      </form>
    </div>
  );
};

export default InputBasicInfo;
