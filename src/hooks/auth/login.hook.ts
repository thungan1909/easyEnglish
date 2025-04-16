import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { LoginDTO, LoginOriginalResponse } from "../../types/dtos/auth.dto";
import { IHttpError } from "../../types/dtos/http";
import { loginMutation } from "../../apis/auth.api";
import { persistToken } from "../../providers/auth";
import {
  AUTHENTICATION_QUERY_KEY,
  LOCALSTORAGE_AUTHINFO_KEY,
  TOKEN_STALE_TIME,
  USER_QUERY_KEY,
} from "../../constants";
import { getUserInfoMutation } from "../../apis/user.api";
import { AuthenticationInfoType } from "../../types/auth";
import { tryCatch } from "../../utils/helpers/try-catch";
import {
  fetchUserInfoErrorMsg,
  loginMissingUserIdMsg,
} from "../../constants/message/errorMsg";

export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<LoginOriginalResponse, IHttpError, LoginDTO>({
    mutationFn: async (data: LoginDTO) => {
      return loginMutation.fn(data);
    },
    onSuccess: async (data) => {
      try {
        const { access_token, refresh_token, user } = data;

        if (!user?.id) {
          throw new Error(loginMissingUserIdMsg);
        }

        persistToken({
          accessToken: access_token,
          refreshToken: refresh_token,
        });

        const authInfo = {
          isAuth: true,
          userId: user.id,
        };

        localStorage.setItem(
          LOCALSTORAGE_AUTHINFO_KEY,
          JSON.stringify(authInfo)
        );

        queryClient.setQueryData(AUTHENTICATION_QUERY_KEY, authInfo);

        await queryClient.invalidateQueries({
          queryKey: AUTHENTICATION_QUERY_KEY,
        });

        const userInfo = await getUserInfoMutation.fn();
        queryClient.setQueryData(USER_QUERY_KEY, userInfo);
      } catch (error) {
        console.error(fetchUserInfoErrorMsg, error);
      }
    },
  });
};

const _useAuthenticationCache = () => {
  // https://stackoverflow.com/questions/64896159/react-query-reuse-an-item-from-cache-of-items
  const queryClient = useQueryClient();

  return useQuery<AuthenticationInfoType>({
    queryKey: AUTHENTICATION_QUERY_KEY,
    initialData: tryCatch<AuthenticationInfoType>(() => {
      return JSON.parse(localStorage.getItem(LOCALSTORAGE_AUTHINFO_KEY) || "");
    }, {} as AuthenticationInfoType),
    queryFn: () => {
      return (
        queryClient.getQueryData<AuthenticationInfoType>(
          AUTHENTICATION_QUERY_KEY
        ) ?? ({} as AuthenticationInfoType)
      );
    },
    staleTime: TOKEN_STALE_TIME,
  });
};

export const useAuthentication = (): AuthenticationInfoType => {
  const { data } = _useAuthenticationCache();

  return data || ({} as AuthenticationInfoType);
};
