export const ROUTES_CONSTANTS = {
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
    PAGE_NOT_FOUND: "*",
    VERIFY_ACCOUNT: "/verify-account",
  },
  DASHBOARD: "/",
  LESSON: {
    BASE: "/lesson",
    DETAIL: "/lesson/detail/:id",
    ADD_NEW: "/lesson/add-new",
    SCOPE: {
      MINE: "/lesson?scope=mine",
      LISTENING: "/lesson?scope=listening",
      LISTENED: "/lesson?scope=listened",
      ALL: "/lesson?scope=all",
    },
  },
  CHALLENGE: {
    BASE: "/challange",
  },
};

export const lessonPaths = [
  ROUTES_CONSTANTS.LESSON.BASE,
  ROUTES_CONSTANTS.LESSON.SCOPE.MINE,
  ROUTES_CONSTANTS.LESSON.SCOPE.LISTENING,
  ROUTES_CONSTANTS.LESSON.SCOPE.LISTENED,
  ROUTES_CONSTANTS.LESSON.SCOPE.ALL,
  ROUTES_CONSTANTS.LESSON.DETAIL,
];
