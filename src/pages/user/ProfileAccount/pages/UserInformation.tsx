import { Typography } from "@mui/material";
import { useUser } from "../../../../hooks/user.hook";
import CAvatarUpload from "../components/cAvatarUpload/CAvatarUpload";
import { Controller, useForm } from "react-hook-form";
import {
  TUserEditInfoSchema,
  UserEditInfoSchema,
} from "../../../../validation/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import CTextField from "../../../../components/atoms/CTextField/CTextField";
import CButton from "../../../../components/atoms/CButton/CButton";

const UserInformation = () => {
  const currentUser = useUser();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<TUserEditInfoSchema>({
    mode: "onChange",
    resolver: zodResolver(UserEditInfoSchema),
  });

  const onSubmitProfile = (data: TUserEditInfoSchema) => {
    console.log(data);
  };
  return (
    <div className="w-full">
      <Typography variant="h6">User Information</Typography>
      <CAvatarUpload
        avatarUrl={currentUser?.avatarUrl}
        username={currentUser?.username}
      />
      <form
        className="flex flex-col gap-4 mt-8"
        onSubmit={handleSubmit(onSubmitProfile)}
      >
        <div className="grid md:grid-cols-2 md:gap-4 gap-4">
          <div>
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
          <div>
            <Controller
              name="fullname"
              control={control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <>
                  <CTextField
                    {...field}
                    type="text"
                    label="Full name"
                    placeholder="Full name"
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
        </div>
        <div className="grid md:grid-cols-2 md:gap-4 gap-4">
          <div>
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
          <div>
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <>
                  <CTextField
                    {...field}
                    type="text"
                    label="Phone number"
                    placeholder="Phone number"
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
        </div>
        <div className="grid md:grid-cols-2 md:gap-4 gap-4">
          <div>
            <Controller
              name="dateOfBirth"
              control={control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <>
                  <CTextField
                    {...field}
                    type="text"
                    label="Date of birth"
                    placeholder="Date of birth"
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
              name="gender"
              control={control}
              defaultValue=""
              render={({ field, fieldState }) => (
                <>
                  <CTextField
                    {...field}
                    type="text"
                    label="Gender"
                    placeholder="Gender"
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
        </div>
        <div className="grid md:grid-cols-3 md:gap-4 gap-4">
          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <>
                <CTextField
                  {...field}
                  type="text"
                  label="City"
                  placeholder="City"
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
          <Controller
            name="district"
            control={control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <>
                <CTextField
                  {...field}
                  type="text"
                  label="District"
                  placeholder="District"
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
          <Controller
            name="ward"
            control={control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <>
                <CTextField
                  {...field}
                  type="text"
                  label="Ward"
                  placeholder="Ward"
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
        <Controller
          name="detailAddress"
          control={control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <>
              <CTextField
                {...field}
                type="text"
                label="Address"
                placeholder="Address"
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
        <div className="grid md:grid-cols-2 md:gap-4 gap-4">
          <Controller
            name="university"
            control={control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <>
                <CTextField
                  {...field}
                  type="text"
                  label="University"
                  placeholder="University"
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
          <Controller
            name="major"
            control={control}
            defaultValue=""
            render={({ field, fieldState }) => (
              <>
                <CTextField
                  {...field}
                  type="text"
                  label="Major"
                  placeholder="Major"
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
        <CButton type="submit" className="w-full" isRounded>
          Save
        </CButton>
      </form>
    </div>
  );
};

export default UserInformation;
