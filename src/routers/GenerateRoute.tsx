import { Route } from "react-router-dom";
import { RouteChildItemConfig, RouteItemConfig } from "../types/route-config";

// export const checkShowRoute = (
//   config: RoutePermissionConfig
//   // screenPermissionMap: ScreenPermissionMapType
// ): boolean => {
//   if (typeof config === "boolean") return config;

//   // if (!screenPermissionMap) return false;

//   return config.crudType.some((x) => {
//     return screenPermissionMap[config.screenCode]?.[x] === true;
//   });
// };

export const generateRoute = (
  routes: RouteItemConfig[] | RouteChildItemConfig[]
  // screenPermissionMap: ScreenPermissionMapType
): React.ReactNode => {
  return routes.map((route, index) => {
    // if (checkShowRoute(route.showWithPermission, screenPermissionMap)) {
    return (
      <Route path={route.path} element={route.element} key={route.path + index}>
        {/* {route?.child && generateRoute(route.child, screenPermissionMap)} */}
        {route?.child && generateRoute(route.child)}
        {/* {route?.subChild && generateRoute(route.subChild, screenPermissionMap)} */}
      </Route>
    );
    // }
    // return null;
  });
};
