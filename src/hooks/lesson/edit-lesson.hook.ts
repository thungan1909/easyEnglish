import { useMutation } from "@tanstack/react-query";
import { editLessonMutation } from "../../apis/lesson.api";
import { IHttpError } from "../../types/dtos/http";
import { TEditLessonSchema } from "../../validation/lesson.schema";
import { EditLessonResponse } from "../../types/dtos/lesson.dto";

export const useEditLessonMutation = () => {
  return useMutation<EditLessonResponse, IHttpError, TEditLessonSchema>({
    mutationFn: async (formData: TEditLessonSchema) => {
      return editLessonMutation.fn(formData);
    },
  });
};
