import { END_POINTS } from "../constants";
import { getAxiosInstance, getOriginalResponseData } from "../providers/axios";
import { CreateLessonResponse, CreatLessonDTO } from "../types/dtos/lesson.dto";

export const createLessonMutation = {
  name: "createLesson",
  fn: async (data: CreatLessonDTO): Promise<CreateLessonResponse> => {
    try {
      return getOriginalResponseData<CreateLessonResponse>(
        await getAxiosInstance().post(END_POINTS.LESSON.CREATE, data)
      );
    } catch (error) {
      throw error;
    }
  },
};
