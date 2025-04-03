import { withDynamicImport } from "../utils/withDynamicImport";

// AUTHEN
export const LoginPage = withDynamicImport(
  () => import("../pages/authen/login/Login"),
  {
    loading: true,
  }
);

export const RegisterPage = withDynamicImport(
  () => import("../pages/authen/register/Register"),
  {
    loading: true,
  }
);

export const VerifyAccountPage = withDynamicImport(
  () => import("../pages/authen/verifyAccount/VerifyAccount"),
  {
    loading: true,
  }
);

export const ForgotPasswordPage = withDynamicImport(
  () => import("../pages/authen/resetPassword/ResetPassword"),
  {
    loading: true,
  }
);

// DASHBOARD

export const DashboardPage = withDynamicImport(
  () => import("../pages/dashboard/Dashboard"),
  {
    loading: true,
  }
);

// LESSON

export const LessonPage = withDynamicImport(
  () => import("../pages/lesson/Lesson"),
  {
    loading: true,
  }
);

export const CreateLessonPage = withDynamicImport(
  () => import("../pages/lesson/createLesson/CreateLesson"),
  {
    loading: true,
  }
);

export const LessonDetailPage = withDynamicImport(
  () => import("../pages/lesson/LessonDetail"),
  {
    loading: true,
  }
);

export const ListenLessonPage = withDynamicImport(
  () => import("../pages/lesson/listen/ListenLesson"),
  {
    loading: true,
  }
);

// Profile Account
export const ProfileAccountPage = withDynamicImport(
  () => import("../layout/ProfileAccountLayout"),
  {
    loading: true,
  }
);

export const UpdateUserInformationPage = withDynamicImport(
  () => import("../pages/user/ProfileAccount/pages/UpdateUserInformation")
);

export const ChangePasswordPage = withDynamicImport(
  () => import("../pages/user/ProfileAccount/pages/ChangePassword")
);

export const ChangeEmailPage = withDynamicImport(
  () => import("../pages/user/ProfileAccount/pages/ChangeEmail")
);

export const PerformanceAnalysisPage = withDynamicImport(
  () => import("../pages/user/ProfileAccount/pages/PerformanceAnalysis")
);

export const SettingsPage = withDynamicImport(
  () => import("../pages/user/ProfileAccount/pages/Settings")
);

export const LessonResultPage = withDynamicImport(
  () => import("../pages/lesson/listen/LessonResult"),
  {
    loading: true,
  }
);

// CHALLENGE
export const ChallengePage = withDynamicImport(
  () => import("../pages/challenges/Challenge"),
  {
    loading: true,
  }
);

export const ChallengeDetailPage = withDynamicImport(
  () => import("../pages/challenges/challengeDetail/ChallengeDetail"),
  {
    loading: true,
  }
);

export const CreateChallengePage = withDynamicImport(
  () => import("../pages/challenges/createChallenge/CreateChallenge"),
  {
    loading: true,
  }
);

// MANAGE LISTENING

export const ManageMyUploadsPage = withDynamicImport(
  () => import("../pages/manageMyUpload/ManageMyUpload"),
  {
    loading: true,
  }
);

export const EditLessonPage = withDynamicImport(
  () => import("../pages/manageMyUpload/EditLesson"),
  {
    loading: true,
  }
);

// FEEDS

export const NewsFeedPage = withDynamicImport(
  () => import("../pages/news-feed/NewsFeed"),
  {
    loading: true,
  }
);

// ADMIN

export const AdminDashboardPage = withDynamicImport(
  () => import("../pages/admin/AdminDashboard/AdminDashboard"),
  {
    loading: true,
  }
);

// RANKING LIST
export const RankingListPage = withDynamicImport(
  () => import("../pages/ranking/RankingList"),
  {
    loading: true,
  }
);
