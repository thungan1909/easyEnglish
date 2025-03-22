import { END_POINTS } from "../constants";
import { getAxiosInstance, getOriginalResponseData } from "../providers/axios";
import { ChallengeDTO } from "../types/dtos/challenge.dto";

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
