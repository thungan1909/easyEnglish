import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ChallengeDTO } from "../../types/dtos/challenge.dto";
import { IHttpError } from "../../types/dtos/http";
import {
  getChallengeByIdQuery,
  getChallengeListQuery,
} from "../../apis/challenge.api";
import { GetChallengesByLessonIdAPIResponse } from "../../types/dtos/challenge.dto";
import { getChallengesByLessonIdAPI } from "../../apis/challenge.api";

export const useGetChallengeList = (): UseQueryResult<
  ChallengeDTO[],
  IHttpError
> => {
  return useQuery<ChallengeDTO[], IHttpError>({
    queryKey: [getChallengeListQuery.name],
    queryFn: async () => getChallengeListQuery.fn(),
    refetchOnWindowFocus: false,
    retry: 3,
    retryDelay: 3000,
  });
};

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

export const useGetChallengesByLessonId = (
  id: string
): UseQueryResult<GetChallengesByLessonIdAPIResponse, IHttpError> => {
  return useQuery<GetChallengesByLessonIdAPIResponse, IHttpError>({
    queryKey: [getChallengesByLessonIdAPI.name, id],
    queryFn: async () => getChallengesByLessonIdAPI.fn(id),
    refetchOnWindowFocus: false,
    retry: 3,
    retryDelay: 3000,
    enabled: !!id,
  });
};
