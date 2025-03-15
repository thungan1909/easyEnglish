import PageNotFound from "../pages/PageNotFound";
import { RouteItemConfig } from "../types/route-config";
import { lessonListenPaths, lessonPaths, ROUTES_CONSTANTS } from "./constants";
import {
  CreateLessonPage,
  DashboardPage,
  ForgotPasswordPage,
  LessonDetailPage,
  LessonPage,
  ListenLessonPage,
  LoginPage,
  PerformanceAnalysisPage,
  ProfileAccountPage,
  RegisterPage,
  SettingsPage,
  ChangePasswordPage,
  UpdateUserInformationPage,
  VerifyAccountPage,
  UpdateEmailPage,
  ChangeEmailPage,
} from "./lazyLoad";

const simpleRoutes: RouteItemConfig[] = [
  {
    path: ROUTES_CONSTANTS.AUTH.PAGE_NOT_FOUND,
    element: <PageNotFound />,
    showWithPermission: true,
  },
];

const lessonRoutes: RouteItemConfig[] = [
  ...lessonPaths.map((path) => ({
    path,
    element: <LessonPage />,
    showWithPermission: true,
  })),
  ...lessonListenPaths.map((path) => ({
    path,
    element: <ListenLessonPage />,
    showWithPermission: true,
  })),
  {
    path: ROUTES_CONSTANTS.LESSON.DETAIL,
    element: <LessonDetailPage />,
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.LESSON.ADD_NEW,
    element: <CreateLessonPage />,
    showWithPermission: true,
  },
];

const mainRoutes: RouteItemConfig[] = [
  {
    path: ROUTES_CONSTANTS.DASHBOARD,
    element: <DashboardPage />,
    showWithPermission: true,
  },
  // {
  //   path: ROUTES_CONSTANTS.USER.PROFILE_ACCOUNT,
  //   element: (
  //     <ProfileAccountPage>
  //       <UpdateUserInformationPage />
  //     </ProfileAccountPage>
  //   ),
  //   showWithPermission: true,
  // },
  // {
  //   path: ROUTES_CONSTANTS.USER.CHANGE_PASSWORD,
  //   element: (
  //     <ProfileAccountPage>
  //       <ChangePasswordPage />
  //     </ProfileAccountPage>
  //   ),
  //   showWithPermission: true,
  // },
  // {
  //   path: ROUTES_CONSTANTS.USER.ANALYSIS,
  //   element: (
  //     <ProfileAccountPage>
  //       <PerformanceAnalysisPage />
  //     </ProfileAccountPage>
  //   ),
  //   showWithPermission: true,
  // },
  // {
  //   path: ROUTES_CONSTANTS.USER.SETTINGS,
  //   element: (
  //     <ProfileAccountPage>
  //       <SettingsPage />
  //     </ProfileAccountPage>
  //   ),
  //   showWithPermission: true,
  // },
  ...lessonRoutes,
];

const authenRoutes: RouteItemConfig[] = [
  {
    path: ROUTES_CONSTANTS.AUTH.LOGIN,
    element: <LoginPage />,
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.AUTH.REGISTER,
    element: <RegisterPage />,
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.AUTH.VERIFY_ACCOUNT,
    element: <VerifyAccountPage />,
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.AUTH.RESET_PASSWORD,
    element: <ForgotPasswordPage />,
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.USER.PROFILE_ACCOUNT,
    element: (
      <ProfileAccountPage>
        <UpdateUserInformationPage />
      </ProfileAccountPage>
    ),
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.USER.CHANGE_PASSWORD,
    element: (
      <ProfileAccountPage>
        <ChangePasswordPage />
      </ProfileAccountPage>
    ),
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.USER.CHANGE_EMAIL,
    element: (
      <ProfileAccountPage>
        <ChangeEmailPage />
      </ProfileAccountPage>
    ),
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.USER.ANALYSIS,
    element: (
      <ProfileAccountPage>
        <PerformanceAnalysisPage />
      </ProfileAccountPage>
    ),
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.USER.SETTINGS,
    element: (
      <ProfileAccountPage>
        <SettingsPage />
      </ProfileAccountPage>
    ),
    showWithPermission: true,
  },
];

export { authenRoutes, mainRoutes, simpleRoutes };
