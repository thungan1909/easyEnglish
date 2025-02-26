import PageNotFound from "../pages/PageNotFound";
import { RouteItemConfig } from "../types/route-config";
import { ROUTES_CONSTANTS } from "./constants";
import { DashboardPage, LoginPage } from "./lazyLoad";
import { Navigate } from "react-router-dom";

// export const paths = {
//   index: "/",
//   home: "/home",
//   auth: {
//     LOGIN: "/login",
//     REGISTER: "/register",
//     FORGOT_PASSWORD: "/forgot-password",
//     DEFAULT: "/",
//     PAGE_NOT_FOUND: "*",
//   },
//   LESSON: {
//     ADD_NEW: "add-new-lesson",
//   },
// };

const simpleRoutes: RouteItemConfig[] = [
  {
    path: ROUTES_CONSTANTS.AUTH.PAGE_NOT_FOUND,
    element: <PageNotFound />,
    showWithPermission: true, // showWithPermission = true => always show
  },
];

const mainRoutes: RouteItemConfig[] = [
  {
    path: ROUTES_CONSTANTS.AUTH.DEFAULT,
    element: <Navigate to={ROUTES_CONSTANTS.DASHBOARD} />,
    showWithPermission: true,
  },
  {
    path: ROUTES_CONSTANTS.DASHBOARD,
    element: <DashboardPage />,
    showWithPermission: true,
  },
];

const authenRoutes: RouteItemConfig[] = [
  {
    path: ROUTES_CONSTANTS.AUTH.LOGIN,
    element: <LoginPage />,
    showWithPermission: true,
  },
];

export { authenRoutes, mainRoutes, simpleRoutes };
