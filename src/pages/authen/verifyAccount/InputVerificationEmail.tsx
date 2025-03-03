import { Controller, UseFormReturn } from "react-hook-form";
import { TGetVerifyCodeSchema } from "../../../types/dtos/login.dto";
import CTextField from "../../../components/atoms/CTextField/CTextField";
import { Typography } from "@mui/material";
import CButton from "../../../components/atoms/CButton/CButton";

export interface InputVerificationEmailProps {
  onSubmitForm: (data: TGetVerifyCodeSchema) => void;
  formInstance: UseFormReturn<TGetVerifyCodeSchema>;
}

const InputVerificationEmail = ({
  onSubmitForm,
  formInstance,
}: InputVerificationEmailProps) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = formInstance;

  return (
    <div>
      <Typography
        variant="h5"
        className="text-center font-semibold text-gray-800 p-4"
      >
        Verify Your Account
      </Typography>
      <Typography className="text-center">
        Enter your email to get verification code
      </Typography>
      <form
        className="mt-6 flex flex-col gap-4 max-w-sm mx-auto w-full relative"
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
        <CButton type="submit" disabled={!isValid} className="w-full">
          Next
        </CButton>
      </form>
    </div>
  );
};

export default InputVerificationEmail;
