import { COOKIES } from "../constants";
import { PeristTokens } from "../types/auth";

export const persistToken = ({
  accessToken,
  refreshToken,
}: PeristTokens): void => {
  if (!!accessToken) {
    localStorage.setItem(COOKIES.ACCESS_TOKEN, accessToken);
  }
  if (!!refreshToken) {
    localStorage.setItem(COOKIES.REFRESH_TOKEN, refreshToken);
  }
};

export const getPersistToken = (): PeristTokens => {
  return {
    accessToken: localStorage.getItem(COOKIES.ACCESS_TOKEN) || "",
    refreshToken: localStorage.getItem(COOKIES.REFRESH_TOKEN) || "",
  };
};

export const clearPersistToken = (): void => {
  localStorage.clear();
};
