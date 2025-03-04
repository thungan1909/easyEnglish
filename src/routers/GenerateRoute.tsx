import { Route } from "react-router-dom";
import { RouteItemConfig } from "../types/route-config";

export const generateRoute = (routes: RouteItemConfig[]): React.ReactNode => {
  return routes.map((route, index) => {
    return (
      <Route path={route.path} element={route.element} key={route.path + index}>
        {route?.child && generateRoute(route.child)}
      </Route>
    );
  });
};
