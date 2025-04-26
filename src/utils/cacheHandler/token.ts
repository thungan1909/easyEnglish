import CacheHandler from ".";
import { ACCESS_TOKEN_KEY } from "../../constants/authentications";

export const setAccessToken = (accessToken: string) => {
  if (!accessToken) {
    return "";
  }

  CacheHandler.write(ACCESS_TOKEN_KEY, JSON.stringify({ accessToken }));
};

export const getAccessToken = (): { accessToken: string } => {
  const response = { accessToken: CacheHandler.read(ACCESS_TOKEN_KEY) };

  if (!response.accessToken) {
    return { accessToken: "" };
  }

  return response;
};

export const clearAccessToken = (): void => {
  CacheHandler.remove(ACCESS_TOKEN_KEY);
};
