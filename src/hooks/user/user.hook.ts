import { useQuery } from "@tanstack/react-query";
import { USER_QUERY_KEY } from "../../constants";
import { getUserInfoMutation } from "../../apis/user.api";

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: USER_QUERY_KEY,
    queryFn: getUserInfoMutation.fn,
    staleTime: 1000 * 60 * 5, // Cache valid for 5 minutes
    // cacheTime: 1000 * 60 * 30, // Keep data for 30 minutes
  });
};
