import { END_POINTS } from "../constants/endpoint";
import {
  ChallengeDTO,
  CreateChallengeResponse,
  DeleteChallengeResponse,
  GetChallengesByLessonIdAPIResponse,
  UpdateChallengeDTO,
  UpdateChallengeResponse,
} from "../types/dtos/challenge.dto";
import {
  createDeleteMutation,
  createGetByIdQuery,
  createGetQuery,
  createPostMutation,
  createPutWithIdMutation,
} from "../utils/axiosUtils";
import { TChallengeSchema } from "../validation/challenge.schema";

export const getChallengeByIdQuery = {
  name: "getChallengeByIdQuery",
  ...createGetByIdQuery<ChallengeDTO>(END_POINTS.CHALLENGE.GET_CHALLENGE_BY_ID),
};

export const createChallengeMutation = {
  name: "createChallenge",
  ...createPostMutation<TChallengeSchema, CreateChallengeResponse>(
    END_POINTS.CHALLENGE.CREATE
  ),
};

export const getChallengeListQuery = {
  name: "getChallengeListQuery",
  ...createGetQuery<ChallengeDTO[]>(END_POINTS.CHALLENGE.GET_LIST_CHALLENGE),
};

export const getChallengesByLessonIdAPI = {
  name: "getChallengesByLessonIdAPI",
  ...createGetByIdQuery<GetChallengesByLessonIdAPIResponse>(
    END_POINTS.CHALLENGE.GET_LIST_BY_LESSON_ID
  ),
};

export const updateChallengeMutation = {
  name: "updateChallenge",
  ...createPutWithIdMutation<TChallengeSchema, UpdateChallengeResponse>(
    END_POINTS.CHALLENGE.UPDATE
  ),
};

export const updateChallengeListMutation = {
  name: "updateChallengeList",
  ...createPutWithIdMutation<UpdateChallengeDTO[], UpdateChallengeResponse>(
    END_POINTS.CHALLENGE.UPDATE_LIST
  ),
};

export const deleteChallengeMutation = {
  name: "deleteChallenge",
  ...createDeleteMutation<string, DeleteChallengeResponse>(
    END_POINTS.CHALLENGE.DELETE
  ),
};
