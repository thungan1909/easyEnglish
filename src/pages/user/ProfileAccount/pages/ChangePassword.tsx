import { Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import {
  TUserChangePasswordSchema,
  UserChangePasswordSchema,
} from "../../../../validation/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import CTextField from "../../../../components/atoms/CTextField/CTextField";
import CButton from "../../../../components/atoms/CButton/CButton";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { useChangePasswordMutation } from "../../../../hooks/user/change-password.hook";

const ChangePassword = () => {
  const { mutate: changePasswordMutation } = useChangePasswordMutation();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<TUserChangePasswordSchema>({
    defaultValues: {},
    mode: "onChange",
    resolver: zodResolver(UserChangePasswordSchema),
  });

  const onSubmitProfile = (data: TUserChangePasswordSchema) => {
    changePasswordMutation(data, {
      onSuccess: () => {},
    });
  };

  return (
    <div className="w-full">
      <Typography variant="h5">Change Password</Typography>
      <Typography className="text-gray-400" variant="caption">
        Please change your password regularly to improve the security of your
        account.
      </Typography>
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
            name="oldPassword"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <CTextField
                  {...field}
                  type="password"
                  label="Old password"
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
        <div>
          <Controller
            name="newPassword"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <CTextField
                  {...field}
                  type="password"
                  label="New password"
                  placeholder="New Password"
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
        <CButton type="submit" className="w-full" disabled={!isValid} isRounded>
          Change Password
        </CButton>
      </form>
    </div>
  );
};

export default ChangePassword;
