import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  SubmitListenLessonDTO,
  SubmitListenLessonResponse,
} from "../../types/dtos/lesson.dto";
import { IHttpError } from "../../types/dtos/http";
import { submitListenLessonMutation } from "../../apis/lesson.api";
import { getUserInfoMutation } from "../../apis/user.api";

export const useSubmitListenLesson = () => {
  const queryClient = useQueryClient();

  return useMutation<
    SubmitListenLessonResponse,
    IHttpError,
    SubmitListenLessonDTO
  >({
    mutationFn: async (data: SubmitListenLessonDTO) => {
      return submitListenLessonMutation.fn(data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [getUserInfoMutation.name],
      });
    },
  });
};
