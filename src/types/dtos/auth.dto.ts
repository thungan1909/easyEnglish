import { IOriginalResponse } from "./http";

export interface CheckExistEmailDTO {
  email: string;
}

export interface CheckExistEmailResponse {
  exists: boolean;
}

export interface SignUpResponse {}
export interface SignUpDTO {
  email: string;
  username: string;
  password: string;
}

export interface VerifyEmailResponse {}

export interface VerifyEmailDTO {
  email: string;
  verifyCode: string;
}

export interface VerifyResetCodeResponse {}

export interface VerifyResetCodeDTO {
  email: string;
  resetCode: string;
}

export interface GetVerifyCodeDTO {
  email: string;
}

export interface GetVerifyCodeResponse {}

export interface GetCodeResetPasswordDTO extends GetVerifyCodeDTO {
  email: string;
}

export interface GetCodeResetPasswordResponse {}

export interface ResetPasswordDTO {
  email: string;
  password: string;
}

export interface ResetPasswordResponse {}

export interface LoginDTO {
  username: string;
  password: string;
}

export interface LoginOriginalResponse extends IOriginalResponse {
  access_token: string;
  refresh_token: string;
  user: {
    id: string;
    username: string;
    email: string;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export interface LogOutDTO {}
