import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  LoginDataDTO,
  LoginOriginalResponse,
} from "../../types/dtos/login.dto";
import { IHttpError } from "../../types/dtos/http";
import { loginMutation } from "../user.api";
import { persistToken } from "../../providers/auth";
import {
  AuthenticationInfo,
  RoleMapType,
  ScreenPermissionMapType,
  UriPermissionMapType,
} from "../../types/auth";

export const AUTHENTICATION_QUERY_KEY = ["getAuthentication"];

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<LoginOriginalResponse, IHttpError, LoginDataDTO>({
    mutationFn: async (data: LoginDataDTO) => {
      return loginMutation.fn(data);
    },
    onSuccess: (data) => {
      persistToken({
        accessToken: data?.access_token,
        refreshToken: data?.refresh_token,
      });

      const { data: responseData } = data || {};
      const { permissions, roles } = responseData || {};

      const authenticationInfo: AuthenticationInfo = {
        isAuth: true,
        roleMap:
          roles?.reduce<RoleMapType>((obj, role) => {
            obj[role.code] = role;
            return obj;
          }, {}) || {},
        screenPermissionMap:
          permissions?.reduce<ScreenPermissionMapType>((obj, item) => {
            obj[item.screen.code] = {
              screen_code: item.screen.code,
              role_code: item.role.code,
              is_select: item.is_select,
              is_insert: item.is_insert,
              is_update: item.is_update,
              is_delete: item.is_delete,
            };
            return obj;
          }, {}) || {},
        uriPermissionMap:
          permissions.reduce<UriPermissionMapType>((obj, item) => {
            const selectUris =
              item.select_uris.reduce<UriPermissionMapType>((o, uri) => {
                o[uri] = {
                  uri_value: uri,
                  screen_code: item.screen.code,
                  role_code: item.role.code,
                  type: "is_select",
                };
                return o;
              }, {}) || {};
            const insertUris =
              item.insert_uris.reduce<UriPermissionMapType>((o, uri) => {
                o[uri] = {
                  uri_value: uri,
                  screen_code: item.screen.code,
                  role_code: item.role.code,
                  type: "is_insert",
                };
                return o;
              }, {}) || {};
            const updateUris =
              item.update_uris.reduce<UriPermissionMapType>((o, uri) => {
                o[uri] = {
                  uri_value: uri,
                  screen_code: item.screen.code,
                  role_code: item.role.code,
                  type: "is_update",
                };
                return o;
              }, {}) || {};
            const deleteUris =
              item.delete_uris.reduce<UriPermissionMapType>((o, uri) => {
                o[uri] = {
                  uri_value: uri,
                  screen_code: item.screen.code,
                  role_code: item.role.code,
                  type: "is_delete",
                };
                return o;
              }, {}) || {};
            return Object.assign(
              obj,
              selectUris,
              insertUris,
              updateUris,
              deleteUris
            );
          }, {}) || {},
        isFailed: false,
        processing: false,
        isExternal: false,
        isBlocked: false,
      };

      //   localStorage.setItem(
      //     LOCALSTORAGE_AUTHINFO_KEY,
      //     JSON.stringify(authenticationInfo)
      //   );

      // https://stackoverflow.com/questions/64896159/react-query-reuse-an-item-from-cache-of-items
      queryClient.setQueryData<AuthenticationInfo>(
        AUTHENTICATION_QUERY_KEY,
        authenticationInfo
      );
    },
  });
};
