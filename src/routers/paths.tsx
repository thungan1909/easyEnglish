import AuthGuard from "../layout/AuthGuard";
import AddNewLesson from "../pages/lesson/addNewLesson/AddNewLesson";
import PageNotFound from "../pages/PageNotFound";
import { RouteItemConfig } from "../types/route-config";
import { ROUTES_CONSTANTS } from "./constants";
import {
  DashboardPage,
  LessonPage,
  LoginPage,
  RegisterPage,
  VerifyAccountPage,
} from "./lazyLoad";

const simpleRoutes: RouteItemConfig[] = [
  {
    path: ROUTES_CONSTANTS.AUTH.PAGE_NOT_FOUND,
    element: <PageNotFound />,
    showWithPermission: true, // showWithPermission = true => always show
  },
];

const lessonRoutes: RouteItemConfig[] = [
  {
    path: ROUTES_CONSTANTS.LESSON.BASE,
    element: (
      <AuthGuard>
        <LessonPage />
      </AuthGuard>
    ),
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.LESSON.SCOPE.MINE,
    element: (
      <AuthGuard>
        <LessonPage />
      </AuthGuard>
    ),
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.LESSON.SCOPE.LISTENING,
    element: (
      <AuthGuard>
        <LessonPage />
      </AuthGuard>
    ),
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.LESSON.SCOPE.LISTENED,
    element: (
      <AuthGuard>
        <LessonPage />
      </AuthGuard>
    ),
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.LESSON.SCOPE.ALL,
    element: (
      <AuthGuard>
        <LessonPage />
      </AuthGuard>
    ),
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.LESSON.DETAIL,
    element: (
      <AuthGuard>
        <LessonPage />
      </AuthGuard>
    ),
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.LESSON.ADD_NEW,
    element: (
      <AuthGuard>
        <AddNewLesson />
      </AuthGuard>
    ),
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
];

export { authenRoutes, mainRoutes, simpleRoutes };
