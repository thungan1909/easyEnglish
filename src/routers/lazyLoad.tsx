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
  () => import("../pages/user/ProfileAccount/pages/UpdateUserInformation"),
  {
    loading: true,
  }
);

export const ChangePasswordPage = withDynamicImport(
  () => import("../pages/user/ProfileAccount/pages/ChangePassword"),
  {
    loading: true,
  }
);

export const ChangeEmailPage = withDynamicImport(
  () => import("../pages/user/ProfileAccount/pages/ChangeEmail"),
  {
    loading: true,
  }
);

export const PerformanceAnalysisPage = withDynamicImport(
  () => import("../pages/user/ProfileAccount/pages/PerformanceAnalysis"),
  {
    loading: true,
  }
);

export const SettingsPage = withDynamicImport(
  () => import("../pages/user/ProfileAccount/pages/Settings"),
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
