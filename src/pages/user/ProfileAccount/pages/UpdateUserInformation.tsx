import { Typography } from "@mui/material";
import { useGetCurrentUser } from "../../../../hooks/user/user.hook";
import CAvatarUpload from "../components/cAvatarUpload/CAvatarUpload";
import { Controller, useForm } from "react-hook-form";
import {
  TUpdateUserSchema,
  UpdateUserSchema,
} from "../../../../validation/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import CTextField from "../../../../components/atoms/CTextField/CTextField";
import CButton from "../../../../components/atoms/CButton/CButton";
import CDatePicker from "../../../../components/atoms/CDatePicker/CDatePicker";
import dayjs from "dayjs";
import CSelect from "../../../../components/atoms/CSelect/CSelect";
import { genderOptions } from "../constant";
import {
  useUpdateUserAvatarMutation,
  useUpdateUserMutation,
} from "../../../../hooks/user/edit-user.hook";
import { notify } from "../../../../utils/notify";
import { useEffect, useState } from "react";
import {
  FaAddressCard,
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaUser,
} from "react-icons/fa";

const UpdateUserInformation = () => {
  const currentUser = useGetCurrentUser();
  const { mutate: updateUserMutation } = useUpdateUserMutation();
  const { mutate: updateUserAvatarMutation } = useUpdateUserAvatarMutation();
  const [isUpdateAvatarSuccess, setIsUpdateAvatarSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<TUpdateUserSchema>({
    defaultValues: {
      username: currentUser?.username,
      fullname: currentUser?.fullName,
      email: currentUser?.email,
      birthDate: currentUser?.birthDate,
      gender: currentUser?.gender,
      phoneNumber: currentUser?.phoneNumber,
      city: currentUser?.city,
      district: currentUser?.district,
      ward: currentUser?.ward,
      detailAddress: currentUser?.detailAddress,
      university: currentUser?.university,
      major: currentUser?.major,
    },
    mode: "onChange",
    resolver: zodResolver(UpdateUserSchema),
  });

  const onSubmitProfile = (data: TUpdateUserSchema) => {
    updateUserMutation(data, {
      onSuccess: () => {
        //
      },
    });
  };

  const handleUploadAvatar = async (avatarUrl: string | File) => {
    updateUserAvatarMutation(
      {
        avatarUrl: avatarUrl,
      },
      // {
      //   onSuccess: () => {
      //     notify.success("Update avatar successfully");
      //     setIsUpdateAvatarSuccess(true);
      //   },
      // }
      {
        onSuccess: async () => {
          notify.success("Update avatar successfully");

          // ✅ Force React Query to refetch current user
          // await queryClient.invalidateQueries({
          //   queryKey: AUTHENTICATION_QUERY_KEY,
          // });

          // ✅ Optional: Update local state immediately
          // setCurrentUser((prev) => ({ ...prev, avatarUrl }));
        },
      }
    );
  };

  useEffect(() => {
    console.log("currentUser", currentUser);
  }, [currentUser]);

  return (
    <div className="w-full">
      <Typography variant="h6">Update Your Information</Typography>
      <div className="text-center">
        <CAvatarUpload
          avatarUrl={currentUser?.avatarUrl}
          username={currentUser?.username}
          onUpload={handleUploadAvatar}
          isUpdateAvatarSuccess={isUpdateAvatarSuccess}
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
                    startIcon={<FaUser />}
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
                    startIcon={<FaAddressCard />}
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
              name="phoneNumber"
              control={control}
              render={({ field, fieldState }) => (
                <>
                  <CTextField
                    {...field}
                    type="text"
                    label="Phone number"
                    placeholder="Phone number"
                    startIcon={<FaPhone />}
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
              name="birthDate"
              control={control}
              render={({ field: { value, onChange } }) => (
                <>
                  <CDatePicker
                    value={value ? dayjs(value) : null}
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
              render={({ field: { value, onChange }, fieldState }) => (
                <>
                  <CSelect
                    options={genderOptions}
                    value={value}
                    onChangeValue={onChange}
                    label="Gender"
                    placeholder="Select gender"
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
                startIcon={<FaBuilding />}
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
        <CButton type="submit" className="w-full" disabled={!isValid} isRounded>
          Save
        </CButton>
      </form>
    </div>
  );
};

export default UpdateUserInformation;
