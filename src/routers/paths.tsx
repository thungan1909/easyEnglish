import PageNotFound from "../pages/PageNotFound";
import { RouteItemConfig } from "../types/route-config";
import { lessonPaths, ROUTES_CONSTANTS } from "./constants";
import {
  CreateLessonPage,
  DashboardPage,
  ForgotPasswordPage,
  LessonDetailPage,
  LessonPage,
  LoginPage,
  RegisterPage,
  VerifyAccountPage,
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
