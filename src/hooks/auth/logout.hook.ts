import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IHttpError } from "../../types/dtos/http";
import { LogOutDTO } from "../../types/dtos/auth.dto";
import {
  AUTHENTICATION_QUERY_KEY,
  LOCALSTORAGE_AUTHINFO_KEY,
} from "../../constants";
import { clearPersistToken } from "../../providers/auth";
import { ROUTES_CONSTANTS } from "../../routers/constants";
import { AuthenticationInfoType } from "../../types/auth";

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
