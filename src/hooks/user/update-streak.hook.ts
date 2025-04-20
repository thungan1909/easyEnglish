import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getUserInfoMutation,
  updateUserStreakMutation,
} from "../../apis/user.api";
import { IHttpError } from "../../types/dtos/http";
import { UserResponse } from "../../types/dtos/user.dto";

export const useUpdateUserStreakMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<UserResponse, IHttpError, void>({
    mutationFn: async () => {
      return updateUserStreakMutation.fn();
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [getUserInfoMutation.name],
      });
    },
  });
};
