import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { LessonDTO } from "../../types/dtos/lesson.dto";
import { IHttpError } from "../../types/dtos/http";
import {
  getLessonByIdList,
  getLessonByIdQuery,
  getLessonListQuery,
} from "../../apis/lesson.api";
import { LessonSubmissionResultDetail } from "../../types/dtos/submission.dto";

export const useGetLessonList = (
  options?: UseQueryOptions<LessonDTO[], IHttpError>
): UseQueryResult<LessonDTO[], IHttpError> => {
  return useQuery<LessonDTO[], IHttpError>({
    queryKey: [getLessonListQuery.name],
    queryFn: async () => getLessonListQuery.fn(),
    ...options,
    refetchOnWindowFocus: false,
    retry: 3,
    retryDelay: 3000,
  });
};

export const useGetLessonById = (
  id: string
): UseQueryResult<LessonDTO, IHttpError> => {
  return useQuery<LessonDTO, IHttpError>({
    queryKey: [getLessonByIdQuery.name, id],
    queryFn: async () => getLessonByIdQuery.fn(id),
    refetchOnWindowFocus: false,
    retry: 3,
    retryDelay: 3000,
  });
};

export const useGetLessonByIdList = (
  idsQuery: string[]
): UseQueryResult<LessonSubmissionResultDetail[], IHttpError> => {
  return useQuery<LessonSubmissionResultDetail[], IHttpError>({
    queryKey: [getLessonByIdList.name, idsQuery],
    queryFn: async () => getLessonByIdList.fn(idsQuery),
    refetchOnWindowFocus: false,
    retry: 3,
    retryDelay: 3000,
  });
};
