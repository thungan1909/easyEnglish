export const ROUTES_CONSTANTS = {
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
    PAGE_NOT_FOUND: "*",
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
