import GlobalNavigationRegister from "./GlobalNavigationRegister";
import React, { useMemo } from "react";
import { generateRoute } from "./GenerateRoute";
import { authenRoutes, mainRoutes, simpleRoutes } from "./paths";
import { useAuthentication } from "../apis/hooks/auth.hook";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage } from "./lazyLoad";
import { ROUTES_CONSTANTS } from "./constants";

const AppRoutes = () => {
  // const { screenPermissionMap } = useAuthentication();

  // const userMenu = useMemo(() => {
  //   return generateRoute(mainRoutes, screenPermissionMap);
  // }, [screenPermissionMap]);

  // const authMenu = useMemo(() => {
  //   return generateRoute(authenRoutes, screenPermissionMap);
  // }, [screenPermissionMap]);

  // const simpleMenu = useMemo(() => {
  //   return generateRoute(simpleRoutes, screenPermissionMap);
  // }, [screenPermissionMap]);

  // const { screenPermissionMap } = useAuthentication();

  const userMenu = useMemo(() => {
    return generateRoute(mainRoutes);
  }, []);

  const authMenu = useMemo(() => {
    return generateRoute(authenRoutes);
  }, []);

  const simpleMenu = useMemo(() => {
    return generateRoute(simpleRoutes);
  }, []);

  return (
    <BrowserRouter>
      <GlobalNavigationRegister />
      <Routes>
        {authMenu}
        <Route path={ROUTES_CONSTANTS.AUTH.DEFAULT} element={<DashboardPage />}>
          {userMenu}
        </Route>
        {simpleMenu}
      </Routes>
    </BrowserRouter>
  );
};

export default React.memo(AppRoutes);
