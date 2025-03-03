// export const BASE_URL = import.meta.env.VITE_API_URL;
export const BASE_URL = "http://localhost:5000/v1";

export const END_POINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    CHECK_EXIST_EMAIL: "/auth/check-exist-email",
    SIGN_UP: "/auth/sign-up",
    VERIFY_USER: "/auth/verify-user",
    GET_VERIFY_CODE: "/auth/get-verify-code",
  },
};

export const COOKIES = {
  REMEMBER_ME: "rememberLogin",
  ACCESS_TOKEN: "ACCESS_TOKEN",
  REFRESH_TOKEN: "REFRESH_TOKEN",
};

export const QUERY_CACHE_TIME_DEFAULT = 5 * 60 * 100; // 5 minutes
export const LOCALSTORAGE_AUTHINFO_KEY = "authenticationInfo";
export const TOKEN_CACHE_TIME = 8 * 60 * 60 * 1000; // 8 hours
export const TOKEN_STALE_TIME = TOKEN_CACHE_TIME - 60 * 1000; // 8 hours - 1 minute
