import { useMutation } from "@tanstack/react-query";
import {
  getVerifyCodeMutation,
  verifyEmailMutation,
} from "../../apis/auth.api";
import {
  GetVerifyCodeDTO,
  GetVerifyCodeResponse,
  VerifyEmailDTO,
  VerifyEmailResponse,
} from "../../types/dtos/auth.dto";
import { IHttpError } from "../../types/dtos/http";

export const useVerifyEmailMutation = () => {
  return useMutation<VerifyEmailResponse, IHttpError, VerifyEmailDTO>({
    mutationFn: async (data: VerifyEmailDTO) => {
      return verifyEmailMutation.fn(data);
    },
  });
};

export const useGetVerifyCode = () => {
  return useMutation<GetVerifyCodeResponse, IHttpError, GetVerifyCodeDTO>({
    mutationFn: async (data: GetVerifyCodeDTO) => {
      return getVerifyCodeMutation.fn(data);
    },
  });
};
