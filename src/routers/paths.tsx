import AddNewLesson from "../pages/lesson/addNewLesson/AddNewLesson";
import PageNotFound from "../pages/PageNotFound";
import { RouteItemConfig } from "../types/route-config";
import { ROUTES_CONSTANTS } from "./constants";
import {
  DashboardPage,
  LessonDetailPage,
  LessonPage,
  LoginPage,
  RegisterPage,
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
    element: <LessonPage />,
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.LESSON.SCOPE.MINE,
    element: <LessonPage />,
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.LESSON.SCOPE.LISTENING,
    element: <LessonPage />,
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.LESSON.SCOPE.LISTENED,
    element: <LessonPage />,
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.LESSON.SCOPE.ALL,
    element: <LessonPage />,
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.LESSON.DETAIL,
    element: <LessonDetailPage />,
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.LESSON.ADD_NEW,
    element: <AddNewLesson />,
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
];

export { authenRoutes, mainRoutes, simpleRoutes };
