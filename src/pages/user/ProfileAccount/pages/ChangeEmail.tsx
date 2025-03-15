import { Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import CTextField from "../../../../components/atoms/CTextField/CTextField";
import CButton from "../../../../components/atoms/CButton/CButton";
import { FaEnvelope, FaKey } from "react-icons/fa";
import {
  TChangeEmailSchema,
  ChangeEmailSchema,
} from "../../../../validation/user.schema";

const ChangeEmail = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<TChangeEmailSchema>({
    defaultValues: {},
    mode: "onChange",
    resolver: zodResolver(ChangeEmailSchema),
  });

  const onSubmitProfile = (data: TChangeEmailSchema) => {
    //
  };

  return (
    <div className="w-full">
      <Typography variant="h6">Change Email</Typography>
      <form
        className="flex flex-col gap-4 mt-8"
        onSubmit={handleSubmit(onSubmitProfile)}
      >
        <div>
          <Controller
            name="oldEmail"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <CTextField
                  {...field}
                  type="text"
                  label="Old Email"
                  placeholder="Old Email"
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
            name="newEmail"
            control={control}
            render={({ field, fieldState }) => (
              <>
                <CTextField
                  {...field}
                  type="text"
                  label="New email"
                  placeholder="Enter your new email"
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
          CHANGE EMAIL
        </CButton>
      </form>
    </div>
  );
};

export default ChangeEmail;
