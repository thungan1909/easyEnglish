import { END_POINTS } from "../constants";
import { getAxiosInstance, getOriginalResponseData } from "../providers/axios";
import {
  ChallengeDTO,
  CreateChallengeResponse,
} from "../types/dtos/challenge.dto";
import { TCreateChallengeSchema } from "../validation/challenge.schema";

export const getChallengeByIdQuery = {
  name: "getChallengeByIdQuery",
  fn: async (id: string): Promise<ChallengeDTO> => {
    return getOriginalResponseData<ChallengeDTO>(
      await getAxiosInstance().get(
        END_POINTS.CHALLENGE.GET_CHALLENGE_BY_ID.replace(":id", id)
      )
    );
  },
};

export const createChallengeMutation = {
  name: "createChallenge",
  fn: async (
    formData: TCreateChallengeSchema
  ): Promise<CreateChallengeResponse> => {
    try {
      return getOriginalResponseData<CreateChallengeResponse>(
        await getAxiosInstance().post(END_POINTS.CHALLENGE.CREATE, formData)
      );
    } catch (error) {
      throw error;
    }
  },
};
