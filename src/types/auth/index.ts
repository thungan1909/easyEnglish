import { CRUDType } from "../../pages/permission/type";

export type PeristTokens = {
  accessToken: string;
  refreshToken: string;
};

export type RoleMapType = {
  [key: string]: {
    code: string;
    name: string;
  };
};

export type ScreenPermissionMapType = {
  [screen_code: string]: {
    screen_code: string;
    role_code: string;
    is_select: boolean;
    is_insert: boolean;
    is_update: boolean;
    is_delete: boolean;
  };
};

export type UriPermissionMapType = {
  [uri_value: string]: {
    uri_value: string;
    screen_code: string;
    role_code: string;
    type: CRUDType;
  };
};

export type AuthenticationInfoType = {
  isAuth: boolean;
  // roleMap: RoleMapType;
  // screenPermissionMap: ScreenPermissionMapType;
  // uriPermissionMap: UriPermissionMapType;
  // processing: boolean;
  // isFailed: boolean;
  // isExternal: boolean;
  // isBlocked: boolean;
};
