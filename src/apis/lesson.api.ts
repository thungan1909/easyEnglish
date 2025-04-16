import { END_POINTS } from "../constants";
import {
  CreateLessonResponse,
  LessonDTO,
  SubmitListenLessonDTO,
  SubmitListenLessonResponse,
  CompareLessonResponse,
  CompareListenLessonDTO,
  EditLessonResponse,
  DeleteLessonResponse,
} from "../types/dtos/lesson.dto";
import {
  LessonSubmissionResult,
  LessonSubmissionResultDetail,
  TopScoresResponse,
} from "../types/dtos/submission.dto";
import {
  createDeleteMutation,
  createGetByIdQuery,
  createGetQuery,
  createGetWithQueryArray,
  createPostMutation,
  createPutWithIdMutation,
} from "../utils/helpers/createMutation";
import { TLessonSchema } from "../validation/lesson.schema";

export const createLessonMutation = {
  name: "createLesson",
  ...createPostMutation<TLessonSchema, CreateLessonResponse>(
    END_POINTS.LESSON.CREATE,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  ),
};

export const getLessonListQuery = {
  name: "getLessonListQuery",
  ...createGetQuery<LessonDTO[]>(END_POINTS.LESSON.GET_LIST_LESSON),
};

export const getLessonByIdQuery = {
  name: "getLessonByIdQuery",
  ...createGetByIdQuery<LessonDTO>(END_POINTS.LESSON.GET_LESSON_BY_ID),
};

export const submitListenLessonMutation = {
  name: "submitListenLesson",
  ...createPostMutation<SubmitListenLessonDTO, SubmitListenLessonResponse>(
    END_POINTS.SUBMISSION.LISTEN.SUBMIT
  ),
};

export const compareListenLessonMutation = {
  name: "compareListenLesson",
  ...createPostMutation<CompareListenLessonDTO, CompareLessonResponse>(
    END_POINTS.SUBMISSION.LISTEN.COMPARE
  ),
};
export const getLessonResultById = {
  name: "getLessonResultById",
  ...createGetByIdQuery<LessonSubmissionResult>(
    END_POINTS.SUBMISSION.LISTEN.GET_RESULT
  ),
};

export const getTopScores = {
  name: "getTopScores",
  ...createGetByIdQuery<TopScoresResponse>(
    END_POINTS.SUBMISSION.LISTEN.GET_TOP_SCORE
  ),
};

export const editLessonMutation = {
  name: "editLesson",
  ...createPutWithIdMutation<TLessonSchema, EditLessonResponse>(
    END_POINTS.LESSON.EDIT,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  ),
};

export const deleteLessonMutation = {
  name: "deleteLesson",
  ...createDeleteMutation<string, DeleteLessonResponse>(
    END_POINTS.CHALLENGE.DELETE
  ),
};

export const getLessonByIdList = {
  name: "getLessonByIdList",
  ...createGetWithQueryArray<LessonSubmissionResultDetail[]>(
    END_POINTS.LESSON.GET_LESSON_BY_ID_LIST,
    "ids"
  ),
};
