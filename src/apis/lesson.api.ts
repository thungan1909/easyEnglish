import { END_POINTS } from "../constants";
import { getAxiosInstance, getOriginalResponseData } from "../providers/axios";
import {
  CreateLessonResponse,
  LessonListQueryFilter,
  LessonEntity,
  SubmitListenLessonDTO,
  SubmitListenLessonResponse,
} from "../types/dtos/lesson.dto";
import { TCreateNewLessonSchema } from "../validation/lesson.schema";

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
  fn: async (filter: LessonListQueryFilter): Promise<LessonEntity[]> => {
    return getOriginalResponseData<LessonEntity[]>(
      await getAxiosInstance().get(END_POINTS.LESSON.GET_LIST_LESSON, {
        data: filter,
      })
    );
  },
};

export const getLessonByIdQuery = {
  name: "getLessonByIdQuery",
  fn: async (id: string): Promise<LessonEntity> => {
    return getOriginalResponseData<LessonEntity>(
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
