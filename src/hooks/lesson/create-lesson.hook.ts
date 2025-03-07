import { useMutation } from "@tanstack/react-query";
import {
  CreateLessonResponse,
  CreateLessonDTO,
} from "../../types/dtos/lesson.dto";
import { IHttpError } from "../../types/dtos/http";
import { createLessonMutation } from "../../apis/lesson.api";

export const useCreateLessonMutation = () => {
  return useMutation<CreateLessonResponse, IHttpError, CreateLessonDTO>({
    mutationFn: async (data: CreateLessonDTO) => {
      return createLessonMutation.fn(data);
    },
  });
};
