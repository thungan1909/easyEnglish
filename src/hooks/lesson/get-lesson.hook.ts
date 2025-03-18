import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  LessonEntity,
  LessonListQueryFilter,
} from "../../types/dtos/lesson.dto";
import { IHttpError } from "../../types/dtos/http";
import { getLessonByIdQuery, getLessonListQuery } from "../../apis/lesson.api";

export const useGetLessonList = (
  filter: LessonListQueryFilter,
  options?: UseQueryOptions<LessonEntity[], IHttpError>
): UseQueryResult<LessonEntity[], IHttpError> => {
  return useQuery<LessonEntity[], IHttpError>({
    queryKey: [getLessonListQuery.name, filter],
    queryFn: async () => getLessonListQuery.fn(filter),
    ...options,
    refetchOnWindowFocus: false,
    retry: 3,
    retryDelay: 3000,
  });
};

export const useGetLessonById = (
  id: string
): UseQueryResult<LessonEntity, IHttpError> => {
  return useQuery<LessonEntity, IHttpError>({
    queryKey: [getLessonByIdQuery.name, id],
    queryFn: async () => getLessonByIdQuery.fn(id),
    refetchOnWindowFocus: false,
    retry: 3,
    retryDelay: 3000,
  });
};
