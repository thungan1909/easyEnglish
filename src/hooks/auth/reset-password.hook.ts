import { useMutation } from "@tanstack/react-query";
import {
  GetCodeResetPasswordDTO,
  GetCodeResetPasswordResponse,
  ResetPasswordDTO,
  ResetPasswordResponse,
  VerifyResetCodeDTO,
  VerifyResetCodeResponse,
} from "../../types/dtos/auth.dto";
import { IHttpError } from "../../types/dtos/http";
import {
  getCodeResetPasswordMutation,
  resetPasswordMutation,
  verifyResetCodeMutation,
} from "../../apis/auth.api";

export const useGetCodeResetPassword = () => {
  return useMutation<
    GetCodeResetPasswordResponse,
    IHttpError,
    GetCodeResetPasswordDTO
  >({
    mutationFn: async (data: GetCodeResetPasswordDTO) => {
      return getCodeResetPasswordMutation.fn(data);
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
