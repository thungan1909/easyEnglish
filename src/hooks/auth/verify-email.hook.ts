import { useMutation } from "@tanstack/react-query";
import {
  sendResetPasswordCodeMutation,
  verifyAccountMutation,
} from "../../apis/auth.api";
import {
  GetVerifyCodeDTO,
  GetVerifyCodeResponse,
  VerifyAccountDTO,
  VerifyAccountResponse,
} from "../../types/dtos/auth.dto";
import { IHttpError } from "../../types/dtos/http";

export const useVerifyAccountMutation = () => {
  return useMutation<VerifyAccountResponse, IHttpError, VerifyAccountDTO>({
    mutationFn: async (data: VerifyAccountDTO) => {
      return verifyAccountMutation.fn(data);
    },
  });
};

export const useGetVerifyCode = () => {
  return useMutation<GetVerifyCodeResponse, IHttpError, GetVerifyCodeDTO>({
    mutationFn: async (data: GetVerifyCodeDTO) => {
      return sendResetPasswordCodeMutation.fn(data);
    },
  });
};
