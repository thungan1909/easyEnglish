import { useMutation, useQuery } from "@tanstack/react-query";
import { USER_QUERY_KEY } from "../../constants";
import { getUserInfoMutation, getUsersByIds } from "../../apis/user.api";
import { UserDTO } from "../../types/dtos/user.dto";
import { IHttpError } from "../../types/dtos/http";

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: USER_QUERY_KEY,
    queryFn: getUserInfoMutation.fn,
    staleTime: 1000 * 60 * 5,
  });
};

export const useGetUsersByIds = () => {
  return useMutation<UserDTO[], IHttpError, string[]>({
    mutationFn: (ids: string[]) => getUsersByIds.fn(ids),
  });
};
