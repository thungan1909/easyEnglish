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
} from "../../apis/challenge.api";

export const useUpdateChallengeMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<UpdateChallengeResponse, IHttpError, UpdateChallengeDTO>({
    mutationFn: async (data: UpdateChallengeDTO) => {
      return updateChallengeMutation.fn(data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: CHALLENGE_QUERY_KEY,
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
