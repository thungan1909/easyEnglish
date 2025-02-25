import { IOriginalResponse } from "./http";

export type ChangePasswordDataDTO = {
  old_password: string;
  new_password: string;
};

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
  username: string;
  verifyCode: string;
}

export interface LoginDTO {
  username: string;
  password: string;
}

export interface LoginOriginalResponse extends IOriginalResponse {
  user: {
    user_id: string;
    user_email: string;
    user_name: string;
  };
}
