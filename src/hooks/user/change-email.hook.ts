import { useMutation } from "@tanstack/react-query";
import { ChangeEmailResponse } from "../../types/dtos/user.dto";
import { IHttpError } from "../../types/dtos/http";
import { TChangeEmailSchema } from "../../validation/user.schema";
import { changeEmailMutation } from "../../apis/user.api";

export const useChangeEmailMutation = () => {
    return useMutation<ChangeEmailResponse, IHttpError, TChangeEmailSchema>({
      mutationFn: async (data: TChangeEmailSchema) => {
        return changeEmailMutation.fn(data);
      },
    });
  };