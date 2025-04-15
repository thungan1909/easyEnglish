import { useMutation } from "@tanstack/react-query";
import {
  CheckEmailDTO,
  CheckEmailResponse,
  RegisterUserDTO,
  RegisterUserResponse,
} from "../../types/dtos/auth.dto";
import { IHttpError } from "../../types/dtos/http";
import { checkEmailMutation, registerUserMutation } from "../../apis/auth.api";

export const useCheckExistEmailMutation = () => {
  return useMutation<CheckEmailResponse, IHttpError, CheckEmailDTO>({
    mutationFn: async (data: CheckEmailDTO) => {
      return checkEmailMutation.fn(data);
    },
  });
};

export const useRegisterUserMutation = () => {
  return useMutation<RegisterUserResponse, IHttpError, RegisterUserDTO>({
    mutationFn: async (data: RegisterUserDTO) => {
      return registerUserMutation.fn(data);
    },
  });
};
