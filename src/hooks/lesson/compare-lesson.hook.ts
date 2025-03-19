import { useMutation } from "@tanstack/react-query";
import {
  CompareLessonResponse,
  CompareListenLessonDTO,
} from "../../types/dtos/lesson.dto";
import { IHttpError } from "../../types/dtos/http";
import { compareListenLessonMutation } from "../../apis/lesson.api";

export const useCompareLessonMutation = () => {
  return useMutation<CompareLessonResponse, IHttpError, CompareListenLessonDTO>(
    {
      mutationFn: async (data: CompareListenLessonDTO) => {
        return compareListenLessonMutation.fn(data);
      },
    }
  );
};
