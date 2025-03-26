export const ROUTES_CONSTANTS = {
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
    RESET_PASSWORD: "/reset-password",
    PAGE_NOT_FOUND: "/404",
    VERIFY_ACCOUNT: "/verify-account",
  },
  DASHBOARD: "/",
  USER: {
    PROFILE_ACCOUNT: "/user/profile-account",
    CHANGE_PASSWORD: "/user/change-password",
    CHANGE_EMAIL: "/user/change-email",
    ANALYSIS: "/user/performance-analysis",
    SETTINGS: "/user/settings",
  },
  MANAGE_MY_UPLOAD: {
    BASE: "/manage-my-upload",
    EDIT: "/manage-my-upload/edit/:id",
  },
  LESSON: {
    BASE: "/lesson",
    DETAIL: "/lesson/detail/:id",
    ADD_NEW: "/lesson/add-new",
    LISTEN: {
      RESULT: "/lesson/result/:id",
      BASE: "/lesson/listen/:id",
      TYPE: {
        WITH_HINT: "/lesson/listen/:id?type=hint",
        WITHOUT_HINT: "/lesson/listen/:id?type=withoutHint",
      },
    },
    SCOPE: {
      MINE: "/lesson?scope=mine",
      LISTENED: "/lesson?scope=listened",
      ALL: "/lesson?scope=all",
    },
  },
  CHALLENGE: {
    BASE: "/challenges",
    ADD_NEW: "/challenges/add-new",
    DETAIL: "/challenge/detail/:id",
  },
  FEEDS: {
    BASE: "/news-feed",
  },
  RANKING_LIST: {
    BASE: "/ranking",
  },
  ADMIN: {
    DASHBOARD: "/admin/dashboard",
  },
};

export const lessonPaths = [
  ROUTES_CONSTANTS.LESSON.BASE,
  ...Object.values(ROUTES_CONSTANTS.LESSON.SCOPE),
];

export const lessonListenPaths = [
  ROUTES_CONSTANTS.LESSON.LISTEN.BASE,
  `${ROUTES_CONSTANTS.LESSON.LISTEN.BASE}?type=hint`,
  `${ROUTES_CONSTANTS.LESSON.LISTEN.BASE}?type=withoutHint`,
];

export const profileAccountPaths = [
  ROUTES_CONSTANTS.USER.PROFILE_ACCOUNT,
  ROUTES_CONSTANTS.USER.CHANGE_PASSWORD,
];
