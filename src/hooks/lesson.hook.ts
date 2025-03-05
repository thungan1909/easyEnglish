import { useMutation } from "@tanstack/react-query";
import { CreateLessonResponse, CreatLessonDTO } from "../types/dtos/lesson.dto";
import { IHttpError } from "../types/dtos/http";
import { createLessonMutation } from "../apis/lesson.api";

export const useCreateLessonMutation = () => {
  return useMutation<CreateLessonResponse, IHttpError, CreatLessonDTO>({
    mutationFn: async (data: CreatLessonDTO) => {
      return createLessonMutation.fn(data);
    },
  });
};
