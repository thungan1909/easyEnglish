import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ChallengeDTO } from "../../types/dtos/challenge.dto";
import { IHttpError } from "../../types/dtos/http";
import { getChallengeByIdQuery } from "../../apis/challenge.api";

export const useGetChallengeById = (
  id: string
): UseQueryResult<ChallengeDTO, IHttpError> => {
  return useQuery<ChallengeDTO, IHttpError>({
    queryKey: [getChallengeByIdQuery.name, id],
    queryFn: async () => getChallengeByIdQuery.fn(id),
    refetchOnWindowFocus: false,
    retry: 3,
    retryDelay: 3000,
  });
};
