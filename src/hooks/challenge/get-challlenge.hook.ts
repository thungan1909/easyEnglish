import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ChallengeDTO } from "../../types/dtos/challenge.dto";
import { IHttpError } from "../../types/dtos/http";
import { getChallengesByLessonIdAPI } from "../../apis/challenge.api";

export const useGetChallengesByLessonId = (
  id: string
): UseQueryResult<ChallengeDTO[], IHttpError> => {
  return useQuery<ChallengeDTO[], IHttpError>({
    queryKey: [getChallengesByLessonIdAPI.name, id],
    queryFn: async () => getChallengesByLessonIdAPI.fn(id),
    refetchOnWindowFocus: false,
    retry: 3,
    retryDelay: 3000,
    enabled: !!id, // Chỉ chạy query khi lessonId có giá trị
  });
};
