import { useMutation } from "@tanstack/react-query";
import { UpdateUserDTO, UpdateUserResponse } from "../../types/dtos/user.dto";
import { IHttpError } from "../../types/dtos/http";
import { updateUserMutation } from "../../apis/user.api";

export const useUpdateUserMutation = () => {
  return useMutation<UpdateUserResponse, IHttpError, UpdateUserDTO>({
    mutationFn: async (data: UpdateUserDTO) => {
      return updateUserMutation.fn(data);
    },
  });
};
