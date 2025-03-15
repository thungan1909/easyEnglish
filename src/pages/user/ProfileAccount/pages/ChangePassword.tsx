import { Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import {
  TUserResetPasswordSchema,
  UserResetPasswordSchema,
} from "../../../../validation/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import CTextField from "../../../../components/atoms/CTextField/CTextField";
import CButton from "../../../../components/atoms/CButton/CButton";
import { FaEnvelope } from "react-icons/fa";

const ChangePassword = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<TUserResetPasswordSchema>({
    defaultValues: {},
    mode: "onChange",
    resolver: zodResolver(UserResetPasswordSchema),
  });

  const onSubmitProfile = (data: TUserResetPasswordSchema) => {
    //
  };

  return (
    <div className="w-full">
      <Typography variant="h6">Change Password</Typography>
      <form
        className="flex flex-col gap-4 mt-8"
        onSubmit={handleSubmit(onSubmitProfile)}
      >
        <div>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <CTextField
                  {...field}
                  type="text"
                  label="Email"
                  placeholder="Email"
                  className="w-full"
                  startIcon={<FaEnvelope />}
                  disabled
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
        <div>
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
        <div>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <CTextField
                  {...field}
                  type="password"
                  label="Confirm password"
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
        <CButton type="submit" className="w-full" disabled={!isValid} isRounded>
          Save
        </CButton>
      </form>
    </div>
  );
};

export default ChangePassword;
