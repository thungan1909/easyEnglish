import { useMutation } from "@tanstack/react-query";
import { IHttpError } from "../../types/dtos/http";
import {
  ChangePasswordResponse,
  UserChangePasswordDTO,
} from "../../types/dtos/user.dto";
import { changePasswordMutation } from "../../apis/user.api";

export const useChangePasswordMutation = () => {
  return useMutation<ChangePasswordResponse, IHttpError, UserChangePasswordDTO>(
    {
      mutationFn: async (data: UserChangePasswordDTO) => {
        return changePasswordMutation.fn(data);
      },
    }
  );
};
