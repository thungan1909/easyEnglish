import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IHttpError } from "../../types/dtos/http";
import {
  UpdateChallengeDTO,
  UpdateChallengeResponse,
} from "../../types/dtos/challenge.dto";
import { CHALLENGE_QUERY_KEY } from "../../constants";
import {
  updateChallengeMutation,
  updateChallengeListMutation,
  getChallengeByIdQuery,
} from "../../apis/challenge.api";
import { TChallengeSchema } from "../../validation/challenge.schema";

export const useUpdateChallengeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<
    UpdateChallengeResponse,
    IHttpError,
    { challengeId: string; data: TChallengeSchema }
  >({
    mutationFn: async ({ challengeId, data }) => {
      return updateChallengeMutation.fn(challengeId, data);
    },
    onSuccess: async (_, { challengeId }) => {
      await queryClient.invalidateQueries({
        queryKey: [getChallengeByIdQuery.name, challengeId],
      });
    },
  });
};

export const useUpdateChallengeListMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<UpdateChallengeResponse, IHttpError, UpdateChallengeDTO[]>(
    {
      mutationFn: async (data: UpdateChallengeDTO[]) => {
        return updateChallengeListMutation.fn(data);
      },
      onSuccess: async () => {
        await queryClient.invalidateQueries({
          queryKey: CHALLENGE_QUERY_KEY,
        });
      },
    }
  );
};
