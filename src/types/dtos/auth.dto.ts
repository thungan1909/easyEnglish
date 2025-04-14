import { IOriginalResponse } from "./http";

export interface CheckEmailDTO {
  email: string;
}

export interface CheckEmailResponse {
  exists: boolean;
}

export interface RegisterUserResponse {}
export interface RegisterUserDTO {
  email: string;
  username: string;
  password: string;
}

export interface VerifyAccountResponse {}

export interface VerifyAccountDTO {
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

export interface SendResetCodeDTO extends GetVerifyCodeDTO {
  email: string;
}

export interface SendResetCodeResponse {}

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
