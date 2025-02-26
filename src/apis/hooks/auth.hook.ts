import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { IHttpError } from "../../types/dtos/http";
import {
  checkExistEmail,
  loginMutation,
  signUpMutation,
  verifyEmailMutation,
} from "../user.api";

import {
  CheckExistEmailDTO,
  CheckExistEmailResponse,
  LoginDTO,
  LoginOriginalResponse,
  LogOutDTO,
  SignUpDTO,
  SignUpResponse,
  VerifyEmailDTO,
  VerifyEmailResponse,
} from "../../types/dtos/user.dto";
import { clearPersistToken, persistToken } from "../../providers/auth";
import { AuthenticationInfoType, PeristTokens } from "../../types/auth";
import { LOCALSTORAGE_AUTHINFO_KEY, TOKEN_STALE_TIME } from "../../constants";
import { tryCatch } from "../../utils/helpers/try-catch";
import { ROUTES_CONSTANTS } from "../../routers/constants";

export const AUTHENTICATION_QUERY_KEY = ["getAuthentication"];

export const updateAuthenticationInfo = ({
  accessToken,
  refreshToken,
}: PeristTokens) => {
  const queryClient = useQueryClient();

  queryClient.setQueryData<AuthenticationInfoType>(
    AUTHENTICATION_QUERY_KEY,
    (prev) => {
      return {
        ...((prev || {}) as AuthenticationInfoType),
        accessToken,
        refreshToken,
      };
    }
  );
};

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<LoginOriginalResponse, IHttpError, LoginDTO>({
    mutationFn: async (data: LoginDTO) => {
      return loginMutation.fn(data);
    },
    onSuccess: (data) => {
      persistToken({
        accessToken: data?.access_token,
        refreshToken: data?.refresh_token,
      });

      // const { data: responseData } = data || {};

      // const { permissions, roles } = responseData || {};

      const authenticationInfo: AuthenticationInfoType = {
        isAuth: true,
        // roleMap:
        //   roles?.reduce<RoleMapType>((obj, role) => {
        //     obj[role.code] = role;
        //     return obj;
        //   }, {}) || {},
        // screenPermissionMap:
        //   permissions?.reduce<ScreenPermissionMapType>((obj, item) => {
        //     obj[item.screen.code] = {
        //       screen_code: item.screen.code,
        //       role_code: item.role.code,
        //       is_select: item.is_select,
        //       is_insert: item.is_insert,
        //       is_update: item.is_update,
        //       is_delete: item.is_delete,
        //     };
        //     return obj;
        //   }, {}) || {},
        // uriPermissionMap:
        //   permissions.reduce<UriPermissionMapType>((obj, item) => {
        //     const selectUris =
        //       item.select_uris.reduce<UriPermissionMapType>((o, uri) => {
        //         o[uri] = {
        //           uri_value: uri,
        //           screen_code: item.screen.code,
        //           role_code: item.role.code,
        //           type: "is_select",
        //         };
        //         return o;
        //       }, {}) || {};
        //     const insertUris =
        //       item.insert_uris.reduce<UriPermissionMapType>((o, uri) => {
        //         o[uri] = {
        //           uri_value: uri,
        //           screen_code: item.screen.code,
        //           role_code: item.role.code,
        //           type: "is_insert",
        //         };
        //         return o;
        //       }, {}) || {};
        //     const updateUris =
        //       item.update_uris.reduce<UriPermissionMapType>((o, uri) => {
        //         o[uri] = {
        //           uri_value: uri,
        //           screen_code: item.screen.code,
        //           role_code: item.role.code,
        //           type: "is_update",
        //         };
        //         return o;
        //       }, {}) || {};
        //     const deleteUris =
        //       item.delete_uris.reduce<UriPermissionMapType>((o, uri) => {
        //         o[uri] = {
        //           uri_value: uri,
        //           screen_code: item.screen.code,
        //           role_code: item.role.code,
        //           type: "is_delete",
        //         };
        //         return o;
        //       }, {}) || {};
        //     return Object.assign(
        //       obj,
        //       selectUris,
        //       insertUris,
        //       updateUris,
        //       deleteUris
        //     );
        //   }, {}) || {},
        // isFailed: false,
        // processing: false,
        // isExternal: false,
        // isBlocked: false,
      };

      localStorage.setItem(
        LOCALSTORAGE_AUTHINFO_KEY,
        JSON.stringify(authenticationInfo)
      );

      queryClient.setQueryData<AuthenticationInfoType>(
        AUTHENTICATION_QUERY_KEY,
        authenticationInfo
      );
    },
  });
};

const _useAuthenticationCache = () => {
  // https://stackoverflow.com/questions/64896159/react-query-reuse-an-item-from-cache-of-items
  const queryClient = useQueryClient();

  return useQuery<AuthenticationInfoType>({
    queryKey: AUTHENTICATION_QUERY_KEY,
    // keepPreviousData: true,
    initialData: tryCatch<AuthenticationInfoType>(() => {
      return JSON.parse(localStorage.getItem(LOCALSTORAGE_AUTHINFO_KEY) || "");
    }, {} as AuthenticationInfoType),
    queryFn: () => {
      const cachedData = queryClient.getQueryData<AuthenticationInfoType>(
        AUTHENTICATION_QUERY_KEY
      );
      return cachedData ?? ({} as AuthenticationInfoType);
    },
    staleTime: TOKEN_STALE_TIME,
    // cacheTime: TOKEN_CACHE_TIME,
  });
};

export const useAuthentication = (): AuthenticationInfoType => {
  const { data } = _useAuthenticationCache();

  return data || ({} as AuthenticationInfoType);
};

export const useCheckExistEmailMutation = () => {
  return useMutation<CheckExistEmailResponse, IHttpError, CheckExistEmailDTO>({
    mutationFn: async (data: CheckExistEmailDTO) => {
      return checkExistEmail.fn(data);
    },
  });
};

export const useSignUpMutation = () => {
  return useMutation<SignUpResponse, IHttpError, SignUpDTO>({
    mutationFn: async (data: SignUpDTO) => {
      return signUpMutation.fn(data);
    },
  });
};

export const useVerifyEmailMutation = () => {
  return useMutation<VerifyEmailResponse, IHttpError, VerifyEmailDTO>({
    mutationFn: async (data: VerifyEmailDTO) => {
      return verifyEmailMutation.fn(data);
    },
  });
};

type UseLogoutParams = {
  redirect?: boolean;
};

export const useLogoutMutation = (
  params: UseLogoutParams = { redirect: true }
) => {
  const { redirect } = params || {};
  const queryClient = useQueryClient();

  return useMutation<null, IHttpError, LogOutDTO>({
    mutationFn: async () => {
      localStorage.removeItem(LOCALSTORAGE_AUTHINFO_KEY);
      clearPersistToken();
      if (redirect) {
        window.location.href = ROUTES_CONSTANTS.AUTH.LOGIN;
      } else {
        queryClient.setQueryData<AuthenticationInfoType>(
          AUTHENTICATION_QUERY_KEY,
          {} as AuthenticationInfoType,
          {}
        );
      }
      return null;
    },
  });
};
