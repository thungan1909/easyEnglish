import { getAxiosInstance, getOriginalResponseData } from "../providers/axios";
import { END_POINTS } from "../constants";
import {
  CheckExistEmailDTO,
  CheckExistEmailResponse,
  GetCodeResetPasswordDTO,
  GetCodeResetPasswordResponse,
  GetVerifyCodeDTO,
  GetVerifyCodeResponse,
  LoginDTO,
  LoginOriginalResponse,
  ResetPasswordDTO,
  ResetPasswordResponse,
  SignUpDTO,
  SignUpResponse,
  VerifyEmailDTO,
  VerifyEmailResponse,
  VerifyResetCodeDTO,
  VerifyResetCodeResponse,
} from "../types/dtos/auth.dto";

export const loginMutation = {
  name: "login",
  fn: async (data: LoginDTO): Promise<LoginOriginalResponse> => {
    try {
      return getOriginalResponseData<LoginOriginalResponse>(
        await getAxiosInstance().post(END_POINTS.AUTH.LOGIN, data)
      );
    } catch (error) {
      throw error;
    }
  },
};

export const checkExistEmail = {
  name: "checkExistEmail",
  fn: async (data: CheckExistEmailDTO): Promise<CheckExistEmailResponse> => {
    try {
      return getOriginalResponseData<CheckExistEmailResponse>(
        await getAxiosInstance().post(END_POINTS.AUTH.CHECK_EXIST_EMAIL, data)
      );
    } catch (error) {
      throw error;
    }
  },
};

export const signUpMutation = {
  name: "signUp",
  fn: async (data: SignUpDTO): Promise<SignUpResponse> => {
    try {
      return getOriginalResponseData<SignUpResponse>(
        await getAxiosInstance().post(END_POINTS.AUTH.SIGN_UP, data)
      );
    } catch (error) {
      throw error;
    }
  },
};

export const verifyEmailMutation = {
  name: "verifyEmail",
  fn: async (data: VerifyEmailDTO): Promise<VerifyEmailResponse> => {
    try {
      return getOriginalResponseData<VerifyEmailResponse>(
        await getAxiosInstance().post(END_POINTS.AUTH.VERIFY_USER, data)
      );
    } catch (error) {
      throw error;
    }
  },
};

export const getVerifyCodeMutation = {
  name: "getVerifyCode",
  fn: async (data: GetVerifyCodeDTO): Promise<GetVerifyCodeResponse> => {
    try {
      return getOriginalResponseData<GetVerifyCodeResponse>(
        await getAxiosInstance().post(END_POINTS.AUTH.GET_VERIFY_CODE, data)
      );
    } catch (error) {
      throw error;
    }
  },
};

export const getCodeResetPasswordMutation = {
  name: "getCodeResetPassword",
  fn: async (
    data: GetCodeResetPasswordDTO
  ): Promise<GetCodeResetPasswordResponse> => {
    try {
      return getOriginalResponseData<GetCodeResetPasswordResponse>(
        await getAxiosInstance().post(END_POINTS.AUTH.GET_RESET_EMAIL, data)
      );
    } catch (error) {
      throw error;
    }
  },
};

export const verifyResetCodeMutation = {
  name: "verifyResetCode",
  fn: async (data: VerifyResetCodeDTO): Promise<VerifyResetCodeResponse> => {
    try {
      return getOriginalResponseData<VerifyResetCodeResponse>(
        await getAxiosInstance().post(END_POINTS.AUTH.VERIFY_RESET_CODE, data)
      );
    } catch (error) {
      throw error;
    }
  },
};

export const resetPasswordMutation = {
  name: "resetPassword",
  fn: async (data: ResetPasswordDTO): Promise<ResetPasswordResponse> => {
    try {
      return getOriginalResponseData<ResetPasswordResponse>(
        await getAxiosInstance().post(END_POINTS.AUTH.RESET_PASSWORD, data)
      );
    } catch (error) {
      throw error;
    }
  },
};
