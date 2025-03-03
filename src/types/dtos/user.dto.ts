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

// export type PermissionLoginViewModel = {
//   insert_uris: string[];
//   select_uris: string[];
//   update_uris: string[];
//   delete_uris: string[];
//   is_select: boolean;
//   is_insert: boolean;
//   is_update: boolean;
//   is_delete: boolean;
//   role: RoleEntity;
//   screen: ScreenEntity;
// };

// export interface LoginOriginalResponse extends IOriginalResponse {
//   data: {
//     permissions: PermissionLoginViewModel[];
//     roles: RoleEntity[];
//   };
// }

export interface LoginOriginalResponse extends IOriginalResponse {}

export interface LogOutDTO {}
