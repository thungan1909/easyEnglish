import { use } from "react";

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

export interface SignUpResponse {

}

export interface SignUpDTO {
  email: string;
  username: string;
  password: string;
}

export interface VerifyEmailResponse {

}
export interface VerifyEmailDTO {
  email: string;
  username: string;
  verifyCode: string;
}