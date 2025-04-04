import { END_POINTS } from "../constants";
import { getAxiosInstance, getOriginalResponseData } from "../providers/axios";
import {
  ChallengeDTO,
  CreateChallengeResponse,
  GetChallengesByLessonIdAPIResponse,
  UpdateChallengeDTO,
  UpdateChallengeResponse,
} from "../types/dtos/challenge.dto";
import { TChallengeSchema } from "../validation/challenge.schema";

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

export const getChallengeListQuery = {
  name: "getChallengeListQuery",
  fn: async (): Promise<ChallengeDTO[]> => {
    return getOriginalResponseData<ChallengeDTO[]>(
      await getAxiosInstance().get(END_POINTS.CHALLENGE.GET_LIST_CHALLENGE)
    );
  },
};

export const getChallengesByLessonIdAPI = {
  name: "getChallengesByLessonIdAPI",
  fn: async (id: string): Promise<GetChallengesByLessonIdAPIResponse> => {
    return getOriginalResponseData<GetChallengesByLessonIdAPIResponse>(
      await getAxiosInstance().get(
        END_POINTS.CHALLENGE.GET_LIST_BY_LESSON_ID.replace(":id", id)
      )
    );
  },
};

export const updateChallengeMutation = {
  name: "updateChallengeMutation",
  fn: async (
    challengeId: string,
    data: TChallengeSchema
  ): Promise<UpdateChallengeResponse> => {
    try {
      return getOriginalResponseData<UpdateChallengeResponse>(
        await getAxiosInstance().put(
          END_POINTS.CHALLENGE.UPDATE.replace(":id", challengeId),
          data
        )
      );
    } catch (error) {
      throw error;
    }
  },
};

export const updateChallengeListMutation = {
  name: "updateChallengeListMutation",
  fn: async (data: UpdateChallengeDTO[]): Promise<UpdateChallengeResponse> => {
    try {
      return getOriginalResponseData<UpdateChallengeResponse>(
        await getAxiosInstance().put(END_POINTS.CHALLENGE.UPDATE_LIST, data)
      );
    } catch (error) {
      throw error;
    }
  },
};
