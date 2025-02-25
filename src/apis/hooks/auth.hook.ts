import { useMutation } from "@tanstack/react-query";
import { TUserSignInSchema } from "../../types/dtos/login.dto";
import { IHttpError } from "../../types/dtos/http";
import {
  checkExistEmail,
  loginMutation,
  signUpMutation,
  verifyEmailMutation,
} from "../user.api";
import { persistToken } from "../../providers/auth";

import {
  CheckExistEmailDTO,
  CheckExistEmailResponse,
  LoginDTO,
  LoginOriginalResponse,
  SignUpDTO,
  SignUpResponse,
  VerifyEmailDTO,
  VerifyEmailResponse,
} from "../../types/dtos/user.dto";

export const AUTHENTICATION_QUERY_KEY = ["getAuthentication"];

export const useLoginMutation = () => {
  return useMutation<LoginOriginalResponse, IHttpError, LoginDTO>({
    mutationFn: async (data: LoginDTO) => {
      return loginMutation.fn(data);
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });
};

export const useCheckExistEmailMutation = () => {
  return useMutation<CheckExistEmailResponse, IHttpError, CheckExistEmailDTO>({
    mutationFn: async (data: CheckExistEmailDTO) => {
      return checkExistEmail.fn(data);
    },
  });
};

export const useSignUpMutation = () => {
  return useMutation<SignUpResponse, IHttpError, SignUpDTO>({
    mutationFn: async (data: SignUpDTO) => {
      return signUpMutation.fn(data);
    },
  });
};

export const useVerifyEmailMutation = () => {
  return useMutation<VerifyEmailResponse, IHttpError, VerifyEmailDTO>({
    mutationFn: async (data: VerifyEmailDTO) => {
      return verifyEmailMutation.fn(data);
    },
  });
};
