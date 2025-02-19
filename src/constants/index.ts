export const BASE_URL = import.meta.env.VITE_API_URL;

export const END_POINTS = {
  AUTH: {
    LOGIN: "/user/login",
  },
};

export const COOKIES = {
  REMEMBER_ME: "rememberLogin",
  ACCESS_TOKEN: "ACCESS_TOKEN",
  REFRESH_TOKEN: "REFRESH_TOKEN",
};

export const QUERY_CACHE_TIME_DEFAULT = 5 * 60 * 100; // 5 minutes
