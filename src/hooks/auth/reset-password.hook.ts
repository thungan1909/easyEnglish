import { useMutation } from "@tanstack/react-query";
import {
  SendResetCodeDTO,
  SendResetCodeResponse,
  ResetPasswordDTO,
  ResetPasswordResponse,
  VerifyResetCodeDTO,
  VerifyResetCodeResponse,
} from "../../types/dtos/auth.dto";
import { IHttpError } from "../../types/dtos/http";
import {
  sendResetCodeMutation,
  resetPasswordMutation,
  verifyResetCodeMutation,
} from "../../apis/auth.api";

export const useGetResetCode = () => {
  return useMutation<SendResetCodeResponse, IHttpError, SendResetCodeDTO>({
    mutationFn: async (data: SendResetCodeDTO) => {
      return sendResetCodeMutation.fn(data);
    },
  });
};

export const useVerifyResetCodeMutation = () => {
  return useMutation<VerifyResetCodeResponse, IHttpError, VerifyResetCodeDTO>({
    mutationFn: async (data: VerifyResetCodeDTO) => {
      return verifyResetCodeMutation.fn(data);
    },
  });
};

export const useResetPasswordMutation = () => {
  return useMutation<ResetPasswordResponse, IHttpError, ResetPasswordDTO>({
    mutationFn: async (data: ResetPasswordDTO) => {
      return resetPasswordMutation.fn(data);
    },
  });
};
