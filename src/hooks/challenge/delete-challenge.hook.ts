import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getLessonListQuery } from "../../apis/lesson.api";
import { IHttpError } from "../../types/dtos/http";
import { DeleteChallengeResponse } from "../../types/dtos/challenge.dto";
import {
  deleteChallengeMutation,
  getChallengeListQuery,
} from "../../apis/challenge.api";

export const useDeleteChallengeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<
    DeleteChallengeResponse,
    IHttpError,
    { challengeId: string }
  >({
    mutationFn: async ({ challengeId }) => {
      return deleteChallengeMutation.fn(challengeId);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [getChallengeListQuery.name],
      });
    },
  });
};
