import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getUserInfoMutation,
  updateUserStreakMutation,
} from "../../apis/user.api";
import { IHttpError } from "../../types/dtos/http";
import { UpdateUserStreakResponse } from "../../types/dtos/user.dto";
import { notify } from "../../utils/notifyUtils";
import { updateStreakSuccessMsg } from "../../constants/message/successMsg";

export const useUpdateUserStreakMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<UpdateUserStreakResponse, IHttpError, void>({
    mutationFn: async () => {
      return updateUserStreakMutation.fn();
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [getUserInfoMutation.name],
      });
      notify.success(updateStreakSuccessMsg);
    },
  });
};
