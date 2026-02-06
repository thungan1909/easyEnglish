import { Controller } from "react-hook-form";

import CTextField from "../../../components/atoms/CTextField/CTextField";
import { Typography } from "@mui/material";
import CButton from "../../../components/atoms/CButton/CButton";
import { ROUTES_CONSTANTS } from "../../../routers/constants";
import { useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { InputVerificationEmailProps } from "./types";

const InputVerificationEmail = ({
  onSubmitForm,
  formInstance,
  isVerifyPage,
}: InputVerificationEmailProps) => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = formInstance;

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <Typography variant="h5">
        {isVerifyPage ? "Verify Your Account" : "Password Password"}
      </Typography>
      <Typography>
        Enter your email to
        {isVerifyPage ? " get verification code" : " reset password"}
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
                  startIcon={<FaEnvelope />}
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

        <CButton
          onClick={() => {
            navigate(ROUTES_CONSTANTS.AUTH.LOGIN);
          }}
          variant="text"
          size="large"
          className="!ml-1"
        >
          Back to Log in
        </CButton>
      </form>
    </div>
  );
};

export default InputVerificationEmail;
