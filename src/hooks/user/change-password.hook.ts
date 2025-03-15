import { useMutation } from "@tanstack/react-query";
import { IHttpError } from "../../types/dtos/http";
import { ChangePasswordResponse } from "../../types/dtos/user.dto";
import { changePasswordMutation } from "../../apis/user.api";
import { TUserChangePasswordSchema } from "../../validation/user.schema";

export const useChangePasswordMutation = () => {
    return useMutation<ChangePasswordResponse, IHttpError, TUserChangePasswordSchema>({
      mutationFn: async (data: TUserChangePasswordSchema) => {
        return changePasswordMutation.fn(data);
      },
    });
  };