import { useQuery } from "@tanstack/react-query";
import { getUserInfoMutation } from "../../apis/user.api";

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: [getUserInfoMutation.name],
    queryFn: getUserInfoMutation.fn,
    staleTime: 1000 * 60 * 5,
  });
};

// export const useGetUsersByIds = () => {
//   return useMutation<UserDTO[], IHttpError, string[]>({
//     mutationFn: (ids: string[]) => getUsersByIds.fn(ids),
//   });
// };
