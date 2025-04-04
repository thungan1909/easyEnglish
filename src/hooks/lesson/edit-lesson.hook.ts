import { useMutation } from "@tanstack/react-query";
import { editLessonMutation } from "../../apis/lesson.api";
import { IHttpError } from "../../types/dtos/http";
import { TLessonSchema } from "../../validation/lesson.schema";
import { EditLessonResponse } from "../../types/dtos/lesson.dto";

export const useEditLessonMutation = () => {
  return useMutation<
    EditLessonResponse,
    IHttpError,
    { lessonId: string; data: TLessonSchema }
  >({
    mutationFn: async ({ lessonId, data }) => {
      return editLessonMutation.fn(lessonId, data);
    },
  });
};
