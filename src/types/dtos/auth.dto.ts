import { IOriginalResponse } from "./http";

export interface CheckEmailDTO {
  email: string;
}

export interface CheckEmailResponse {
  exists: boolean;
}

export interface GetVerifyCodeDTO {
  email: string;
}

export type GetVerifyCodeResponse = object;

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

export type LogOutDTO = object;

export interface RegisterUserDTO {
  email: string;
  username: string;
  password: string;
}

export type RegisterUserResponse = object;

export interface ResetPasswordDTO {
  email: string;
  password: string;
}

export type ResetPasswordResponse = object;

export type SendResetCodeResponse = object;

export interface VerifyAccountDTO {
  email: string;
  verifyCode: string;
}

export type VerifyAccountResponse = object;

export interface VerifyResetCodeDTO {
  email: string;
  resetCode: string;
}

export type VerifyResetCodeResponse = object;

export interface ProgramAuthDTO {
  roleCode?: string;
  programId?: string;
  programUrl?: string;
  programName?: string;
  rights?: string;
}
