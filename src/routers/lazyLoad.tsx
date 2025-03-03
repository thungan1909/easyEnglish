import { withDynamicImport } from "../hooks/withDynamicImport";

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

export const LessonPage = withDynamicImport(
  () => import("../pages/lesson/Lesson"),
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

export const DashboardPage = withDynamicImport(
  () => import("../pages/dashboard/Dashboard"),
  {
    loading: true,
  }
);
