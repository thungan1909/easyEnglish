import { useMutation } from "@tanstack/react-query";
import { IHttpError } from "../../types/dtos/http";
import { ChangePasswordResponse } from "../../types/dtos/user.dto";
import { changePasswordMutation } from "../../apis/user.api";
import { TUserChangePasswordSchema } from "../../validation/user.schema";
export type UserChangePasswordDTO = Omit<
  TUserChangePasswordSchema,
  "email" | "confirmPassword"
>;

export const useChangePasswordMutation = () => {
  return useMutation<ChangePasswordResponse, IHttpError, UserChangePasswordDTO>(
    {
      mutationFn: async (data: UserChangePasswordDTO) => {
        console.log(data);
        return changePasswordMutation.fn(data); // Send only newPassword and currentPassword
      },
    }
  );
};
