import { useMutation } from "@tanstack/react-query";
import { CreateLessonResponse } from "../../types/dtos/lesson.dto";
import { IHttpError } from "../../types/dtos/http";
import { createLessonMutation } from "../../apis/lesson.api";
import { TLessonSchema } from "../../validation/lesson.schema";

export const useCreateLessonMutation = () => {
  return useMutation<CreateLessonResponse, IHttpError, TLessonSchema>({
    mutationFn: async (formData: TLessonSchema) => {
      return createLessonMutation.fn(formData);
    },
  });
};
