import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IHttpError } from "../types/dtos/http";
import {
  checkExistEmail,
  getVerifyCodeMutation,
  loginMutation,
  signUpMutation,
  verifyEmailMutation,
} from "../apis/auth.api";

import {
  CheckExistEmailDTO,
  CheckExistEmailResponse,
  GetVerifyCodeDTO,
  GetVerifyCodeResponse,
  LoginDTO,
  LoginOriginalResponse,
  LogOutDTO,
  SignUpDTO,
  SignUpResponse,
  VerifyEmailDTO,
  VerifyEmailResponse,
} from "../types/dtos/auth.dto";
import { clearPersistToken, persistToken } from "../providers/auth";
import { AuthenticationInfoType, PeristTokens } from "../types/auth";
import {
  LOCALSTORAGE_AUTHINFO_KEY,
  TOKEN_STALE_TIME,
  USER_QUERY_KEY,
} from "../constants";
import { tryCatch } from "../utils/helpers/try-catch";
import { ROUTES_CONSTANTS } from "../routers/constants";
import { getUserInfoMutation } from "../apis/user.api";

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
    onSuccess: async (data) => {
      try {
        const { access_token, refresh_token, user } = data; // Extract user info from response

        if (!user?._id) {
          throw new Error("User ID is missing in login response");
        }

        // Store tokens & userId in localStorage or state
        await persistToken({
          accessToken: access_token,
          refreshToken: refresh_token,
        });

        queryClient.setQueryData(AUTHENTICATION_QUERY_KEY, {
          isAuth: true,
          userId: user._id,
        });

        console.log(
          "Updated authentication state:",
          queryClient.getQueryData(AUTHENTICATION_QUERY_KEY)
        );

        await queryClient.invalidateQueries({
          queryKey: AUTHENTICATION_QUERY_KEY,
        });

        const userInfo = await getUserInfoMutation.fn();
        console.log("User info fetched:", userInfo);
        queryClient.setQueryData(USER_QUERY_KEY, userInfo);
      } catch (error) {
        console.error("Failed to fetch user info:", error);
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
      const cachedData = queryClient.getQueryData<AuthenticationInfoType>(
        AUTHENTICATION_QUERY_KEY
      );
      return cachedData ?? ({} as AuthenticationInfoType);
    },
    staleTime: TOKEN_STALE_TIME,
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

export const useGetVerifyCode = () => {
  return useMutation<GetVerifyCodeResponse, IHttpError, GetVerifyCodeDTO>({
    mutationFn: async (data: GetVerifyCodeDTO) => {
      return getVerifyCodeMutation.fn(data);
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
