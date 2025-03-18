import { useMutation } from "@tanstack/react-query";
import {
  SubmitListenLessonDTO,
  SubmitListenLessonResponse,
} from "../../types/dtos/lesson.dto";
import { IHttpError } from "../../types/dtos/http";
import { submitListenLessonMutation } from "../../apis/lesson.api";

export const useSubmitListenLessonMutation = () => {
  return useMutation<
    SubmitListenLessonResponse,
    IHttpError,
    SubmitListenLessonDTO
  >({
    mutationFn: async (data: SubmitListenLessonDTO) => {
      return submitListenLessonMutation.fn(data);
    },
  });
};
