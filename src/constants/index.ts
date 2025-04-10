// export const BASE_URL = import.meta.env.VITE_API_URL;
export const BASE_URL = "http://localhost:5000/v1";

export const END_POINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    CHECK_EXIST_EMAIL: "/auth/check-exist-email",
    SIGN_UP: "/auth/sign-up",
    GET_USER_INFO: "/auth/me",
    VERIFY_ACCOUNT: "/auth/verify-account",
    GET_VERIFY_CODE: "/auth/get-verify-code",
    GET_RESET_CODE: "/auth/get-reset-code",
    VERIFY_RESET_CODE: "/auth/verify-reset-code",
    RESET_PASSWORD: "/auth/reset-password",
  },
  USER: {
    UPDATE_INFO: "/user/update",
    UPDATE_AVATAR: "/user/update-avatar",
    CHANGE_PASSWORD: "/user/change-password",
    CHANGE_EMAIL: "/user/change-email",
    GET_BY_ID: "/user/:id",
    GET_BY_IDS: "/user/ids",
  },
  LESSON: {
    CREATE: "/lesson/create",
    EDIT: "/lesson/update/:id",
    DELETE: "/lesson/delete/:id",
    GET_LIST_LESSON: "/lesson/list/inquiry",
    GET_LESSON_BY_ID: "/lesson/:id",
    GET_LESSON_BY_ID_LIST: "/lesson/batch",
  },
  SUBMISSION: {
    LISTEN: {
      SUBMIT: "/submission/listen/submit",
      COMPARE: "/submission/listen/compare",
      GET_RESULT: "/submission/result",
      GET_TOP_SCORE: "/submission/top-score",
    },
  },
  LEADERBOARD: {
    GET_TOP_WEEKLY: "leaderboard/top-weekly",
  },
  CHALLENGE: {
    CREATE: "/challenge/create",
    GET_CHALLENGE_BY_ID: "/challenge/:id",
    GET_LIST_CHALLENGE: "/challenge/list/inquiry",
    GET_LIST_BY_LESSON_ID: "/challenge/get-by-lesson/:id",
    UPDATE: "/challenge/update/:id",
    UPDATE_LIST: "/challenge/list/update",
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
export const USER_QUERY_KEY = ["user"];
export const LESSON_QUERY_KEY = ["lesson"];
export const AUTHENTICATION_QUERY_KEY = ["getAuthentication"];
export const CHALLENGE_QUERY_KEY = ["challenge"];
export const CHALLENGE_LIST_QUERY_KEY = ["challenge_list"];
