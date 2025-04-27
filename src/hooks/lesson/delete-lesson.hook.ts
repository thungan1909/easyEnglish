import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteLessonMutation,
  getLessonListQuery,
} from "../../apis/lesson.api";
import { IHttpError } from "../../types/dtos/http";
import { DeleteLessonResponse } from "../../types/dtos/lesson.dto";

export const useDeleteLesson = () => {
  const queryClient = useQueryClient();

  return useMutation<DeleteLessonResponse, IHttpError, { lessonId: string }>({
    mutationFn: async ({ lessonId }) => {
      return deleteLessonMutation.fn(lessonId);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [getLessonListQuery.name],
      });
    },
  });
};
