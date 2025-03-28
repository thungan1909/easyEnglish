import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetChallengesByLessonIdAPIResponse } from "../../types/dtos/challenge.dto";
import { IHttpError } from "../../types/dtos/http";
import { getChallengesByLessonIdAPI } from "../../apis/challenge.api";

export const useGetChallengesByLessonId = (
  id: string
): UseQueryResult<GetChallengesByLessonIdAPIResponse, IHttpError> => {
  return useQuery<GetChallengesByLessonIdAPIResponse, IHttpError>({
    queryKey: [getChallengesByLessonIdAPI.name, id],
    queryFn: async () => getChallengesByLessonIdAPI.fn(id),
    refetchOnWindowFocus: false,
    retry: 3,
    retryDelay: 3000,
    enabled: !!id, // Chỉ chạy query khi lessonId có giá trị
  });
};
