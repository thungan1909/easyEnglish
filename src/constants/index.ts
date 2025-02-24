// export const BASE_URL = import.meta.env.VITE_API_URL;
export const BASE_URL = "http://localhost:5000/v1";

export const END_POINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    CHECK_EXIST_EMAIL: "/auth/check-exist-email",
    SIGN_UP: "/auth/sign-up",
    VERIFY_USER: "/auth/verify-user",
  },
};

export const ROUTES_CONSTANTS = {
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
    DEFAULT: "/",
    PAGE_NOT_FOUND: "*",
  },
  LESSON: {
    ADD_NEW: "add-new-lesson",
  },
};

export const COOKIES = {
  REMEMBER_ME: "rememberLogin",
  ACCESS_TOKEN: "ACCESS_TOKEN",
  REFRESH_TOKEN: "REFRESH_TOKEN",
};

export const QUERY_CACHE_TIME_DEFAULT = 5 * 60 * 100; // 5 minutes
