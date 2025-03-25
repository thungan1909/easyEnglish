import { useMutation } from "@tanstack/react-query";
import { CreateLessonResponse } from "../../types/dtos/lesson.dto";
import { IHttpError } from "../../types/dtos/http";
import { createChallengeMutation } from "../../apis/challenge.api";
import { TCreateChallengeSchema } from "../../validation/challenge.schema";

export const useCreateLChallengeMutation = () => {
  return useMutation<CreateLessonResponse, IHttpError, TCreateChallengeSchema>({
    mutationFn: async (formData: TCreateChallengeSchema) => {
      return createChallengeMutation.fn(formData);
    },
  });
};
