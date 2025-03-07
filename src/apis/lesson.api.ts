import { END_POINTS } from "../constants";
import { getAxiosInstance, getOriginalResponseData } from "../providers/axios";
import {
  CreateLessonResponse,
  CreateLessonDTO,
  LessonListQueryFilter,
  LessonEntity,
} from "../types/dtos/lesson.dto";

export const createLessonMutation = {
  name: "createLesson",
  fn: async (data: CreateLessonDTO): Promise<CreateLessonResponse> => {
    try {
      return getOriginalResponseData<CreateLessonResponse>(
        await getAxiosInstance().post(END_POINTS.LESSON.CREATE, data)
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
