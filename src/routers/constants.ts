export const ROUTES_CONSTANTS = {
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
    RESET_PASSWORD: "/reset-password",
    PAGE_NOT_FOUND: "*",
    VERIFY_ACCOUNT: "/verify-account",
  },
  DASHBOARD: "/",
  USER: {
    PROFILE_ACCOUNT: "/user/profile-account",
    CHANGE_PASSWORD: "/user/change-password",
    CHANGE_EMAIL: "/user/update-email",
    ANALYSIS: "/user/performance-analysis",
    SETTINGS: "/user/settings",
  },
  LESSON: {
    BASE: "/lesson",
    DETAIL: "/lesson/detail/:id",
    ADD_NEW: "/lesson/add-new",
    LISTEN: {
      TYPE: {
        BASE: "/lesson/listen/:id",
        WITH_HINT: "/lesson/listen/:id?type=hint",
        WITHOUT_HINT: "/lesson/listen/:id?type=withoutHint",
      },
    },
    SCOPE: {
      MINE: "/lesson?scope=mine",
      LISTENING: "/lesson?scope=listening",
      LISTENED: "/lesson?scope=listened",
      ALL: "/lesson?scope=all",
    },
  },
  CHALLENGE: {
    BASE: "/challenge",
  },
};

export const lessonPaths = [
  ROUTES_CONSTANTS.LESSON.BASE,
  ...Object.values(ROUTES_CONSTANTS.LESSON.SCOPE),
];

export const lessonListenPaths = [
  ROUTES_CONSTANTS.LESSON.LISTEN.TYPE.BASE,
  ...Object.values(ROUTES_CONSTANTS.LESSON.LISTEN.TYPE),
];

export const profileAccountPaths = [
  ROUTES_CONSTANTS.USER.PROFILE_ACCOUNT,
  ROUTES_CONSTANTS.USER.CHANGE_PASSWORD,
];
