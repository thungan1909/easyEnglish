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
import CDatePicker from "../../../../components/atoms/CDatePicker/CDatePicker";
import dayjs from "dayjs";

const UserInformation = () => {
  const currentUser = useUser();
  console.log(currentUser);

  const {
    control,
    watch,
    handleSubmit,
    formState: { isValid },
  } = useForm<TUserEditInfoSchema>({
    defaultValues: {
      username: currentUser?.username || "s",
      email: currentUser?.email || "s",
    },
    mode: "onChange",
    resolver: zodResolver(UserEditInfoSchema),
  });

  const onSubmitProfile = (data: TUserEditInfoSchema) => {
    console.log(data);
  };

  console.log(watch());
  return (
    <div className="w-full">
      <Typography variant="h6">User Information</Typography>
      <div className="text-center">
        <CAvatarUpload
          avatarUrl={currentUser?.avatarUrl}
          username={currentUser?.username}
        />
      </div>
      <form
        className="flex flex-col gap-4 mt-8"
        onSubmit={handleSubmit(onSubmitProfile)}
      >
        <div className="grid md:grid-cols-2 md:gap-4 gap-4">
          <div>
            <Controller
              name="username"
              control={control}
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
              render={({ field: { value, onChange } }) => (
                <>
                  <CDatePicker
                    value={value ? dayjs(value) : null} // Convert Date to Dayjs
                    onChange={onChange}
                    label="Date of birth"
                  />
                </>
              )}
            />
          </div>
          <div>
            <Controller
              name="gender"
              control={control}
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
