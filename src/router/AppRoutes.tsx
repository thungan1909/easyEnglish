import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import AddNewLesson from "../pages/addNewLesson/AddNewLesson";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/authen/login/Login";
import Register from "../pages/authen/register/Register";
import { ROUTES_CONSTANTS } from "../constants";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES_CONSTANTS.AUTH.DEFAULT} element={<Dashboard />} />
      <Route path={ROUTES_CONSTANTS.LESSON.ADD_NEW} element={<AddNewLesson />} />
      <Route path={ROUTES_CONSTANTS.AUTH.LOGIN} element={<Login />} />
      <Route path={ROUTES_CONSTANTS.AUTH.REGISTER} element={<Register />} />
      <Route path={ROUTES_CONSTANTS.AUTH.PAGE_NOT_FOUND} element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
