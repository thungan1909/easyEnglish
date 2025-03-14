import { useMutation } from "@tanstack/react-query";
import {
  UpdateUserAvatarDTO,
  UpdateUserAvatarResponse,
  UpdateUserDTO,
  UpdateUserResponse,
} from "../../types/dtos/user.dto";
import { IHttpError } from "../../types/dtos/http";
import {
  updateUserAvatarMutation,
  updateUserMutation,
} from "../../apis/user.api";

export const useUpdateUserMutation = () => {
  return useMutation<UpdateUserResponse, IHttpError, UpdateUserDTO>({
    mutationFn: async (data: UpdateUserDTO) => {
      return updateUserMutation.fn(data);
    },
  });
};

export const useUpdateUserAvatarMutation = () => {
  return useMutation<UpdateUserAvatarResponse, IHttpError, UpdateUserAvatarDTO>(
    {
      mutationFn: async (data: UpdateUserAvatarDTO) => {
        return updateUserAvatarMutation.fn(data);
      },
    }
  );
};
