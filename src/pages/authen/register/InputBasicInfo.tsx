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
  const { control, handleSubmit, getValues } = formInstance;

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
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
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
                  />
                  {fieldState.error && (
                    <span className="text-red-500">
                      {fieldState.error.message}
                    </span>
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
                  />
                  {fieldState.error && (
                    <span className="text-red-500">
                      {fieldState.error.message}
                    </span>
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
                  />
                  {fieldState.error && (
                    <span className="text-red-500">
                      {fieldState.error.message}
                    </span>
                  )}
                </>
              )}
            />
          </div>
          <CButton
            fullWidth
            type="submit"
            className="!bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white !py-3 !rounded-full"
          >
            Next
          </CButton>
        </form>
      </div>
    </div>
  );
};

export default InputBasicInfo;
