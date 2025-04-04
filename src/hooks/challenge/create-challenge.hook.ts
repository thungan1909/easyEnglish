import { useMutation } from "@tanstack/react-query";
import { CreateLessonResponse } from "../../types/dtos/lesson.dto";
import { IHttpError } from "../../types/dtos/http";
import { createChallengeMutation } from "../../apis/challenge.api";
import { TChallengeSchema } from "../../validation/challenge.schema";

export const useCreateChallengeMutation = () => {
  return useMutation<CreateLessonResponse, IHttpError, TChallengeSchema>({
    mutationFn: async (formData: TChallengeSchema) => {
      return createChallengeMutation.fn(formData);
    },
  });
};
