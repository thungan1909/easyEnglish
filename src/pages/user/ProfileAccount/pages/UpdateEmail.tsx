import { Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import CTextField from "../../../../components/atoms/CTextField/CTextField";
import CButton from "../../../../components/atoms/CButton/CButton";
import { FaEnvelope } from "react-icons/fa";
import {
  TUpdateEmailSchema,
  UpdateEmailSchema,
} from "../../../../validation/user.schema";

const UpdateEmail = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<TUpdateEmailSchema>({
    defaultValues: {},
    mode: "onChange",
    resolver: zodResolver(UpdateEmailSchema),
  });

  const onSubmitProfile = (data: TUpdateEmailSchema) => {
    //
  };

  return (
    <div className="w-full">
      <Typography variant="h6">Update Email</Typography>
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
        <CButton type="submit" className="w-full" disabled={!isValid} isRounded>
          Save
        </CButton>
      </form>
    </div>
  );
};

export default UpdateEmail;
