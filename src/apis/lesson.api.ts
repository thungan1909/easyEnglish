import { END_POINTS } from "../constants";
import { getAxiosInstance, getOriginalResponseData } from "../providers/axios";
import {
  CreateLessonResponse,
  LessonListQueryFilter,
  LessonDTO,
  SubmitListenLessonDTO,
  SubmitListenLessonResponse,
  CompareLessonResponse,
  CompareListenLessonDTO,
  EditLessonResponse,
} from "../types/dtos/lesson.dto";
import {
  LessonSubmissionResponse,
  TopScoresResponse,
} from "../types/dtos/submission.dto";
import {
  TCreateNewLessonSchema,
  TEditLessonSchema,
} from "../validation/lesson.schema";

export const createLessonMutation = {
  name: "createLesson",
  fn: async (
    formData: TCreateNewLessonSchema
  ): Promise<CreateLessonResponse> => {
    try {
      return getOriginalResponseData<CreateLessonResponse>(
        await getAxiosInstance().post(END_POINTS.LESSON.CREATE, formData, {
          headers: { "Content-Type": "multipart/form-data" }, // Ensure proper format
        })
      );
    } catch (error) {
      throw error;
    }
  },
};

export const getLessonListQuery = {
  name: "getLessonListQuery",
  fn: async (filter: LessonListQueryFilter): Promise<LessonDTO[]> => {
    return getOriginalResponseData<LessonDTO[]>(
      await getAxiosInstance().get(END_POINTS.LESSON.GET_LIST_LESSON, {
        data: filter,
      })
    );
  },
};

export const getLessonByIdQuery = {
  name: "getLessonByIdQuery",
  fn: async (id: string): Promise<LessonDTO> => {
    return getOriginalResponseData<LessonDTO>(
      await getAxiosInstance().get(
        END_POINTS.LESSON.GET_LESSON_BY_ID.replace(":id", id)
      )
    );
  },
};

export const submitListenLessonMutation = {
  name: "submitListenLesson",
  fn: async (
    data: SubmitListenLessonDTO
  ): Promise<SubmitListenLessonResponse> => {
    try {
      return getOriginalResponseData<SubmitListenLessonResponse>(
        await getAxiosInstance().post(END_POINTS.SUBMISSION.LISTEN.SUBMIT, data)
      );
    } catch (error) {
      throw error;
    }
  },
};

export const compareListenLessonMutation = {
  name: "compareListenLesson",
  fn: async (data: CompareListenLessonDTO): Promise<CompareLessonResponse> => {
    try {
      return getOriginalResponseData<CompareLessonResponse>(
        await getAxiosInstance().post(
          END_POINTS.SUBMISSION.LISTEN.COMPARE,
          data
        )
      );
    } catch (error) {
      throw error;
    }
  },
};

export const getLessonResultById = {
  name: "getLessonResultById",
  fn: async (id: string): Promise<LessonSubmissionResponse> => {
    try {
      return getOriginalResponseData<LessonSubmissionResponse>(
        await getAxiosInstance().get(END_POINTS.SUBMISSION.LISTEN.GET_RESULT, {
          params: { lessonId: id },
        })
      );
    } catch (error) {
      throw error;
    }
  },
};

export const getTopScores = {
  name: "getTopScores",
  fn: async (id: string): Promise<TopScoresResponse> => {
    try {
      return getOriginalResponseData<TopScoresResponse>(
        await getAxiosInstance().get(
          END_POINTS.SUBMISSION.LISTEN.GET_TOP_SCORE,
          {
            params: { lessonId: id },
          }
        )
      );
    } catch (error) {
      throw error;
    }
  },
};

export const editLessonMutation = {
  name: "editLesson",
  fn: async (
    lessonId: string,
    formData: TEditLessonSchema
  ): Promise<EditLessonResponse> => {
    try {
      return getOriginalResponseData<EditLessonResponse>(
        await getAxiosInstance().put(
          END_POINTS.LESSON.EDIT.replace(":id", lessonId),
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
      );
    } catch (error) {
      throw error;
    }
  },
};

export const deleteLessonMutation = {
  name: "deleteLesson",
  fn: async (lessonId: string): Promise<EditLessonResponse> => {
    try {
      return getOriginalResponseData<EditLessonResponse>(
        await getAxiosInstance().delete(
          END_POINTS.LESSON.DELETE.replace(":id", lessonId)
        )
      );
    } catch (error) {
      throw error;
    }
  },
};
