import { getAxiosInstance, getOriginalResponseData } from "../providers/axios";
import { END_POINTS } from "../constants";
import {
  CheckExistEmailDTO,
  CheckExistEmailResponse,
  GetResetCodeDTO,
  getResetCodeResponse,
  GetVerifyCodeDTO,
  GetVerifyCodeResponse,
  LoginDTO,
  LoginOriginalResponse,
  ResetPasswordDTO,
  ResetPasswordResponse,
  SignUpDTO,
  SignUpResponse,
  VerifyAccountDTO,
  VerifyAccountResponse,
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

export const checkExistEmailMutation = {
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

export const verifyAccountMutation = {
  name: "verifyAccount",
  fn: async (data: VerifyAccountDTO): Promise<VerifyAccountResponse> => {
    try {
      return getOriginalResponseData<VerifyAccountResponse>(
        await getAxiosInstance().post(END_POINTS.AUTH.VERIFY_ACCOUNT, data)
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

export const getResetCodeMutation = {
  name: "getCodeReset",
  fn: async (data: GetResetCodeDTO): Promise<getResetCodeResponse> => {
    try {
      return getOriginalResponseData<getResetCodeResponse>(
        await getAxiosInstance().post(END_POINTS.AUTH.GET_RESET_CODE, data)
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
