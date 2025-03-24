import React from "react";
import ChallengeDetail from "../pages/challenges/ChallengeDetail";
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
  ChangeEmailPage,
  ChallengePage,
  LessonResultPage,
  ManageMyUploadsPage,
  EditLessonPage,
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
    path: ROUTES_CONSTANTS.LESSON.LISTEN.RESULT,
    element: <LessonResultPage />,
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.LESSON.ADD_NEW,
    element: <CreateLessonPage />,
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.CHALLENGE.BASE,
    element: <ChallengePage />,
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.CHALLENGE.DETAIL,
    element: <ChallengeDetail />,
    showWithPermission: true,
  },
];

const profileRoutes: RouteItemConfig[] = [
  {
    path: ROUTES_CONSTANTS.USER.PROFILE_ACCOUNT,
    component: UpdateUserInformationPage,
  },
  {
    path: ROUTES_CONSTANTS.USER.CHANGE_PASSWORD,
    component: ChangePasswordPage,
  },
  {
    path: ROUTES_CONSTANTS.USER.CHANGE_EMAIL,
    component: ChangeEmailPage,
  },
  {
    path: ROUTES_CONSTANTS.USER.ANALYSIS,
    component: PerformanceAnalysisPage,
  },
  {
    path: ROUTES_CONSTANTS.USER.SETTINGS,
    component: SettingsPage,
  },
].map(({ path, component }) => ({
  path,
  element: (
    <ProfileAccountPage>{React.createElement(component)}</ProfileAccountPage>
  ),
  showWithPermission: true,
}));

const mainRoutes: RouteItemConfig[] = [
  {
    path: ROUTES_CONSTANTS.DASHBOARD,
    element: <DashboardPage />,
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.MANAGE_MY_UPLOAD.BASE,
    element: <ManageMyUploadsPage />,
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.MANAGE_MY_UPLOAD.EDIT,
    element: <EditLessonPage />,
    showWithPermission: true,
  },
  ...profileRoutes,
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
];

export { authenRoutes, mainRoutes, simpleRoutes };
