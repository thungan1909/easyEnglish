import { useMutation, useQueryClient } from "@tanstack/react-query";
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
import { AUTHENTICATION_QUERY_KEY } from "../../constants";

export const useUpdateUserMutation = () => {
  return useMutation<UpdateUserResponse, IHttpError, UpdateUserDTO>({
    mutationFn: async (data: UpdateUserDTO) => {
      return updateUserMutation.fn(data);
    },
  });
};

export const useUpdateUserAvatarMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<UpdateUserAvatarResponse, IHttpError, UpdateUserAvatarDTO>(
    {
      mutationFn: async (data: UpdateUserAvatarDTO) => {
        return updateUserAvatarMutation.fn(data);
      },
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: AUTHENTICATION_QUERY_KEY,
        });
      },
    }
  );
};
