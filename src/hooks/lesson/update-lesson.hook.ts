import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editLessonMutation, getLessonByIdQuery } from "../../apis/lesson.api";
import { IHttpError } from "../../types/dtos/http";
import { TLessonSchema } from "../../validation/lesson.schema";
import { EditLessonResponse } from "../../types/dtos/lesson.dto";

export const useUpdateLesson = () => {
  const queryClient = useQueryClient();

  return useMutation<
    EditLessonResponse,
    IHttpError,
    { lessonId: string; data: TLessonSchema }
  >({
    mutationFn: async ({ lessonId, data }) => {
      return editLessonMutation.fn(data, lessonId);
    },
    onSuccess: async (_, { lessonId }) => {
      await queryClient.invalidateQueries({
        queryKey: [getLessonByIdQuery.name, lessonId],
      });
    },
  });
};
