import { END_POINTS } from "../constants";
import { getAxiosInstance, getOriginalResponseData } from "../providers/axios";
import {
  ChallengeDTO,
  CreateChallengeResponse,
  DeleteChallengeResponse,
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
  fn: async (formData: TChallengeSchema): Promise<CreateChallengeResponse> => {
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

export const deleteChallengeMutation = {
  name: "deleteChallenge",
  fn: async (challengeId: string): Promise<DeleteChallengeResponse> => {
    try {
      return getOriginalResponseData<DeleteChallengeResponse>(
        await getAxiosInstance().delete(
          END_POINTS.CHALLENGE.DELETE.replace(":id", challengeId)
        )
      );
    } catch (error) {
      throw error;
    }
  },
};
