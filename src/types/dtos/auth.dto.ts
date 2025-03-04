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

export interface GetVerifyCodeDTO {
  email: string;
}

export interface GetVerifyCodeResponse {}

export interface LoginDTO {
  username: string;
  password: string;
}

export interface LoginOriginalResponse extends IOriginalResponse {}

export interface LogOutDTO {}
