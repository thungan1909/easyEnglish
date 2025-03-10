import { useMutation } from "@tanstack/react-query";
import { CreateLessonResponse } from "../../types/dtos/lesson.dto";
import { IHttpError } from "../../types/dtos/http";
import { createLessonMutation } from "../../apis/lesson.api";
import { TCreateNewLessonSchema } from "../../validation/lesson.schema";

export const useCreateLessonMutation = () => {
  return useMutation<CreateLessonResponse, IHttpError, TCreateNewLessonSchema>({
    mutationFn: async (formData: TCreateNewLessonSchema) => {
      return createLessonMutation.fn(formData);
    },
  });
};
