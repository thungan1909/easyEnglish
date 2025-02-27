import MainLayout from "../layout/MainLayout";
import PageNotFound from "../pages/PageNotFound";
import { RouteItemConfig } from "../types/route-config";
import { ROUTES_CONSTANTS } from "./constants";
import { DashboardPage, LessonPage, LoginPage, RegisterPage } from "./lazyLoad";

const simpleRoutes: RouteItemConfig[] = [
  {
    path: ROUTES_CONSTANTS.AUTH.PAGE_NOT_FOUND,
    element: <PageNotFound />,
    showWithPermission: true, // showWithPermission = true => always show
  },
];

const mainRoutes: RouteItemConfig[] = [
  {
    path: ROUTES_CONSTANTS.DASHBOARD,
    element: <DashboardPage />,
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.LESSON.BASE,
    element: <LessonPage />,
    showWithPermission: true,
  },
  {
    path: `${ROUTES_CONSTANTS.LESSON.BASE}?scope=listening`, // Route for ongoing lessons
    element: <LessonPage />, // Reuse the LessonPage component
    showWithPermission: true,
  },
  {
    path: `${ROUTES_CONSTANTS.LESSON.BASE}?scope=listened`, // Route for completed lessons
    element: <LessonPage />, // Reuse the LessonPage component
    showWithPermission: true,
  },
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
];

export { authenRoutes, mainRoutes, simpleRoutes };
