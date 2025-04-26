import PersistCache from ".";
import { ACCESS_TOKEN_KEY } from "../../constants/authentications";
import { handleDecrypt, handleEncrypt } from "../encrypt";

export const setAccessToken = (accessToken: string) => {
  if (!accessToken) {
    return "";
  }

  PersistCache.save(
    ACCESS_TOKEN_KEY,
    handleEncrypt(JSON.stringify({ accessToken }))
  );
};

export const getAccessToken = (): { accessToken: string } => {
  let response;
  try {
    response = JSON.parse(handleDecrypt(PersistCache.read(ACCESS_TOKEN_KEY)));
  } catch {
    response = { accessToken: "" };
  }
  return response;
};

export const clearAccessToken = (): void => {
  PersistCache.remove(ACCESS_TOKEN_KEY);
};
