import { useMutation } from "@tanstack/react-query";
import {
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
  return useMutation<SendResetCodeResponse, IHttpError, string>({
    mutationFn: async (email: string) => {
      return sendResetCodeMutation.fn({ email });
    },
  });
};

export const useVerifyResetCode = () => {
  return useMutation<VerifyResetCodeResponse, IHttpError, VerifyResetCodeDTO>({
    mutationFn: async (data: VerifyResetCodeDTO) => {
      return verifyResetCodeMutation.fn(data);
    },
  });
};

export const useResetPassword = () => {
  return useMutation<ResetPasswordResponse, IHttpError, ResetPasswordDTO>({
    mutationFn: async (data: ResetPasswordDTO) => {
      return resetPasswordMutation.fn(data);
    },
  });
};
