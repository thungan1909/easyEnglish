import { useMutation } from "@tanstack/react-query";
import {
  CheckExistEmailDTO,
  CheckExistEmailResponse,
  SignUpDTO,
  SignUpResponse,
} from "../../types/dtos/auth.dto";
import { IHttpError } from "../../types/dtos/http";
import { checkExistEmail, signUpMutation } from "../../apis/auth.api";

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
