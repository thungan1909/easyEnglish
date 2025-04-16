export const COOKIES = {
  ACCESS_TOKEN: "ACCESS_TOKEN",
  REFRESH_TOKEN: "REFRESH_TOKEN",
};

export const QUERY_CACHE_TIME_DEFAULT = 5 * 60 * 100; // 5 minutes
export const LOCALSTORAGE_AUTHINFO_KEY = "authenticationInfo";
export const TOKEN_CACHE_TIME = 8 * 60 * 60 * 1000; // 8 hours
export const TOKEN_STALE_TIME = TOKEN_CACHE_TIME - 60 * 1000; // 8 hours - 1 minute
export const AUTHENTICATION_QUERY_KEY = ["authenticationQueryKey"];
