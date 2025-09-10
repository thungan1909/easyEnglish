export const BASE_URL = "http://localhost:5000/v1";


export const END_POINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    CHECK_EMAIL: "/auth/check-email",
    GET_USER_INFO: "/auth/me",

    // Email Verification
    SEND_VERIFY_CODE: "/auth/email/send-code",
    VERIFY_ACCOUNT: "/auth/email/verify",

    // Password Reset
    SEND_RESET_CODE: "/auth/password/send-reset-code",
    VERIFY_RESET_CODE: "/auth/password/verify-reset-code",
    RESET_PASSWORD: "/auth/password/reset",
    CHANGE_PASSWORD: "/auth/password/change",
  },
  USER: {
    UPDATE_INFO: "/user/update",
    UPDATE_AVATAR: "/user/update-avatar",
    CHANGE_EMAIL: "/user/change-email",
    UPDATE_STREAK: "/user/update-streak",
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
      GET_RESULT: "/submission/result/:id",
      GET_TOP_SCORE: "/submission/top-score/:id",
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
    DELETE: "challenge/delete/:id",
  },
};
