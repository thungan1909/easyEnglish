import React, { Suspense, useMemo } from "react";
import { generateRoute } from "./GenerateRoute";
import { authenRoutes, mainRoutes, simpleRoutes } from "./paths";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const AppRoutes = () => {
  const authenMenu = useMemo(() => {
    return generateRoute(authenRoutes);
  }, []);

  const simpleMenu = useMemo(() => {
    return generateRoute(simpleRoutes);
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {authenMenu}
          {mainRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<MainLayout>{route.element}</MainLayout>}
            />
          ))}
          {simpleMenu}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default React.memo(AppRoutes);
