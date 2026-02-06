import { withDynamicImport } from "../utils/withDynamicImport";

// AUTHEN
export const LoginPage = withDynamicImport(
  () => import("../pages/authen/login/LoginPage"),
  {
    loading: true,
  },
);

export const RegisterPage = withDynamicImport(
  () => import("../pages/authen/register/RegisterPage"),
  {
    loading: true,
  },
);

export const VerifyAccountPage = withDynamicImport(
  () => import("../pages/authen/verifyAccount/VerifyAccountPage"),
  {
    loading: true,
  },
);

export const ForgotPasswordPage = withDynamicImport(
  () => import("../pages/authen/resetPassword/ResetPasswordPage"),
  {
    loading: true,
  },
);

// DASHBOARD

export const DashboardPage = withDynamicImport(
  () => import("../pages/dashboard/Dashboard"),
  {
    loading: true,
  },
);

// LESSON

export const LessonPage = withDynamicImport(
  () => import("../pages/lesson/Lesson"),
  {
    loading: true,
  },
);

export const CreateLessonPage = withDynamicImport(
  () => import("../pages/lesson/create/CreateLesson"),
  {
    loading: true,
  },
);

export const LessonDetailPage = withDynamicImport(
  () => import("../pages/lesson/detail/LessonDetail"),
  {
    loading: true,
  },
);

export const ListenLessonPage = withDynamicImport(
  () => import("../pages/lesson/listen/ListenLesson"),
  {
    loading: true,
  },
);

// Profile Account
export const ProfileAccountPage = withDynamicImport(
  () => import("../layout/ProfileAccountLayout"),
  {
    loading: true,
  },
);

export const UpdateUserInformationPage = withDynamicImport(
  () => import("../pages/user/ProfileAccount/pages/UpdateUserInformation"),
);

export const ChangePasswordPage = withDynamicImport(
  () => import("../pages/user/ProfileAccount/pages/ChangePassword"),
);

export const ChangeEmailPage = withDynamicImport(
  () => import("../pages/user/ProfileAccount/pages/ChangeEmail"),
);

export const PerformanceAnalysisPage = withDynamicImport(
  () => import("../pages/user/ProfileAccount/pages/PerformanceAnalysis"),
);

export const SettingsPage = withDynamicImport(
  () => import("../pages/user/ProfileAccount/pages/Settings"),
);

export const LessonResultPage = withDynamicImport(
  () => import("../pages/lesson/listen/LessonResult"),
  {
    loading: true,
  },
);

// CHALLENGE
export const ChallengePage = withDynamicImport(
  () => import("../pages/challenges/Challenges"),
  {
    loading: true,
  },
);

export const ChallengeDetailPage = withDynamicImport(
  () => import("../pages/challenges/challengeDetail/ChallengeDetail"),
  {
    loading: true,
  },
);

export const CreateChallengePage = withDynamicImport(
  () => import("../pages/challenges/create/CreateChallenge"),
  {
    loading: true,
  },
);

// MANAGE LISTENING

export const ManageMyUploadsPage = withDynamicImport(
  () => import("../pages/manageMyUpload/ManageMyUpload"),
  {
    loading: true,
  },
);

export const UpdateLessonPage = withDynamicImport(
  () => import("../pages/lesson/update/UpdateLesson"),
  {
    loading: true,
  },
);

export const UpdateChallengePage = withDynamicImport(
  () => import("../pages/challenges/update/UpdateChallenge"),
  {
    loading: true,
  },
);

// FEEDS

export const NewsFeedPage = withDynamicImport(
  () => import("../pages/news-feed/NewsFeed"),
  {
    loading: true,
  },
);

// ADMIN

export const AdminDashboardPage = withDynamicImport(
  () => import("../pages/admin/AdminDashboard/AdminDashboard"),
  {
    loading: true,
  },
);

// RANKING LIST
export const RankingListPage = withDynamicImport(
  () => import("../pages/ranking/RankingList"),
  {
    loading: true,
  },
);
